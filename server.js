require("dotenv").config();
const PORT = process.env.PORT ?? 8001;
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const express = require("express");
const app = express();
const pool = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

app.use("/signup", async (req, res) => {
  const { email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  try {
    const signup = await pool.query(
      "INSERT INTO users (email, hashed_password) VALUES($1,$2)",
      [email, hashedPassword]
    );

    const token = jwt.sign({ email }, "secret", { expiresIn: "1hr" });

    res.json({ email, token });
  } catch (err) {
    console.error(err);
    // log error in a file
    res.json({ detail: err.detail });

    // frontent to decide what to show on from the detailed error
  } finally {
    //close any risk resource , access to a certain database
  }
});

app.use("/login", async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password){
    return res.json("all fields a required")
  }
  try {
    // check if email exist
    const users = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (!users.rows.length){ return res.json({ detail: "user does not exist" })};

    const success = await bcrypt.compare(
      password,
      users.rows[0].hashed_password
    );
    
    const token = jwt.sign({ email }, "secret", { expiresIn: "1hr" });
    if (!success) {
        res.json({ detail: "Login failed" });
    } else {
        res.json({ email: users.rows[0].email, token });
    }
  } catch (err) {
    console.error(err);
    res.json(err)
  } finally {
    // close any resource that should not be running upon login error
    //strictly for financial systems in which
  }
});
app.get("/contacts/:userEmail", async (req, res) => {
  try {
    const contacts = await pool.query("SELECT * FROM contacts");
    res.json(contacts?.rows);
  } catch (err) {
    console.error(err);
    // here you can write your logs to monitor errors in production,
    // Essentiallly i have send the entire to frontend
    res.json(err);
  } finally {
    // await any thing that need to be termiated incase of an error
  }
});

// create a new contact , we expect to get some data from frontent.
// esentially we will get contactEmail, contaName, contact  and date
// we will generate id using uuid library, already installed
app.post("/contacts", async (req, res) => {
  try {
    const { userEmail, contactName, contact, date } = req.body;
    console.log(userEmail);
    const id = uuidv4();

    const newContact = await pool.query(
      "INSERT INTO contacts(id, useremail, contactname, contact, date) VALUES($1, $2,$3,$4,$5)",
      [id, userEmail, contactName, contact, date]
    );
    res.json(newContact);
  } catch (err) {
    console.error(err);
    res.json(err)
    // Log errors to a file (good practice)
  } finally {
    // await any thing that need to be termiated incase of an error
  }
});

// edit existing contact
app.patch("/contacts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { userEmail, contactName, contact, date } = req.body;
    const editContact = await pool.query(
      "UPDATE contacts SET useremail = $1, contactname = $2, contact = $3, date = $4 WHERE id = $5",
      [userEmail, contactName, contact, date, id]
    );
    res.json(editContact);
  } catch (err) {
    console.error(err);
    res.json(err);
  } finally {
    // close any open resource
  }
});

//delet contact 
app.delete('/contacts/:id',async(req,res)=>{
    try {
        const {id} =req.params
       const deletedContact =  await pool.query('DELETE FROM contacts WHERE id = $1', [id])
       res.json(deletedContact)
        
    } catch (err) {
        console.error(err)
        res.json(err)
    }

    

})
app.listen(PORT, () => console.log(`Server running on port port ${PORT}`));
