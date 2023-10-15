import { FcApprove, FcDisapprove } from "react-icons/fc";
import ProgressBar from "./ProgressBar";
import Modal from "./Modal";
import { useState } from "react";
const ListItem = ({ contact, getData }) => {
  const [showModal, setShowModal] = useState(false)
  const deleteItem = async() =>{
    try {
      const response = await fetch(`http://localhost:8000/contacts/${contact.id}`,{
        method:'DELETE'
      })
      
      if(response.status===200){
        getData()
        
      }
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <li className="list-item">
      <div className="button-info" >
        <FcApprove size={25} />&nbsp;
        <p>{contact.contactname}</p>&nbsp;&nbsp;
        {`${contact.contact}`}
      </div>
      <div className="button-container-actions">
        <button className="edit" onClick={()=>setShowModal(true)}>EDIT</button>
        <button className="delete"  onClick={deleteItem}>DELETE</button>
      </div>
      {showModal && <Modal mode='edit' setShowModal={setShowModal} getData={getData} contact={contact}/>}
    </li>
  );
};

export default ListItem;
