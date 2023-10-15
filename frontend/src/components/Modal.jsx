import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const Modal = ({ mode, setShowModal, contact, getData}) => {
  const editMode = mode ==="edit"? true: false
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const [data, setData] = useState({
    userEmail:editMode?contact.useremail:cookies.user_email,
    contactName:editMode?contact.contactname:"Enter contact name",
    contact:editMode?contact.contact:"",
    date:editMode? contact.date: new Date() 
  })
  const postData = async (e) =>{
    try {
      e.preventDefault()
      const response = await fetch(`http://localhost:8000/contacts`,{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
       })
  
       if(response.status === 200){ 
        setShowModal(false)
         getData()
       }
    } catch (err) {
      console.error(err)
    }
  }
  const editData = async(e)=>{
    console.log(data)

      try {
        e.preventDefault()
       
       const response = await fetch(`http://localhost:8000/contacts/${contact.id}`,{
          method:'PATCH',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(data)
        })
        console.log(response)
        if(response.status ===200){
          setShowModal(false)
          getData()
        }
        
      } catch (err) {
        console.error(err)
        
      }
  }
  const handlChange = (e) => {
    const {name, value}=e.target
    setData(data=>({
      ...data,
      [name]:value
    }))
   
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode==="edit"?"edit":"create"} your contact</h3>
          <button onClick={()=>{setShowModal(false)}}>X</button>
        </div>
        <form>
          <label htmlFor="contantName">Conact Name</label>
          <input
            required
            maxLength={30}
            minLength={4}
            placeholder="Your contact name goes here Characters(4 - 30)"
            name={"contactName"}
            value={data.contactName}
            
            onChange={handlChange}
          />
          <br />
          <label htmlFor="contact">Enter tel no.</label>
          <input
            required
            id="contact"
            type="tel"
            name="contact"
            value={data.contact}
           
            onChange={handlChange}
          />

          <input className={mode} type="submit" onClick={editMode ? editData:postData} />
        </form>
      </div>
    </div>
  );
};

export default Modal;
