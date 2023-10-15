require('dotenv').config()
const PORT = process.env.PORT ?? 8001
const express = require('express')
const app = express()
const pool = require('./db')

//first endpoint to get all contacts
app.get('/contacts',async(req,res) =>{

    try {
        const contacts = await pool.query('SELECT * FROM contacts')

        res.json(contacts?.rows)  
    } catch (err) {
        console.error(err)
        // here you can write your logs to monitor errors in production,
        // Essentiallly i have send the entire to frontend
        res.json(err)
        
    }finally{
        // await any thing that need to be termiated
    }
    
})


//
app.listen(PORT, ()=> console.log(`Server running on port port ${PORT}`));