import React from "react"
import { Link } from "react-router"
import './ContactItem.css'

const ContactItem = ({name, id , last_time_connected, img, last_message, unread_messages}) =>{
    return (
        <Link to={`/contacts/${id}/messages`}>
            <div className="container-contact-item">
                <img className = 'img-contact-item' src={img} alt={`${name} image profile`}/>
            <h3>
                {name}
            </h3>
            <div>
                {last_message.text}
            </div>
            <span>
                {unread_messages}
            </span>
            <span>
                Ultima vez conectado:
                {last_time_connected}
            </span>
            </div>
        </Link>
    )
}
export default ContactItem