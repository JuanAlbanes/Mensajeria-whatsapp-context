import React from "react"
import { Link } from "react-router"
import './ContactItem.css'
import { PiChecks } from "react-icons/pi";


const ContactItem = ({name, id , last_time_connected, img, last_message, unread_messages}) =>{
    return (
        <div className="container-contacts">
        <Link to={`/contacts/${id}/messages`}>
            <div className="container-contact-item">
                <div className="container-contact-name-message">
                    <img className = 'img-contact-item' src={img} alt={`${name} image profile`}/>
                    <div className="container-name-message">
                        <h3>{name}</h3>
                        <span className="container-last-message"><PiChecks /> {last_message.text}</span>
                        <span className="container-last-message-text-alternative"><PiChecks />{last_message.alternative_text}</span>
                    </div>
                </div>
                <div className="container-unread-messages-last-time-connected">
                    <span>
                        {last_time_connected}
                    </span>
                    <span className="unread-messages">
                        {unread_messages}
                    </span>
                </div>
            </div>
        </Link>
        </div>
    )
}
export default ContactItem