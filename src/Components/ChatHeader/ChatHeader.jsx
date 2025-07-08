import React, { useContext } from 'react'
import { Link, useParams } from 'react-router';
import { ContactContext } from '../../Context/ContactContext';
import './ChatHeader.css';
import { LuVideo } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { GiNuclearBomb } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from 'sweetalert2';

export default function ChatHeader() {
    const { contact_id } = useParams(); 
    const { contacts } = useContext(ContactContext);
    
    
    const currentContact = contacts.find(contact => contact.id === parseInt(contact_id));
    const handleAlertBomb = () => {
        Swal.fire({
            title: "Estás seguro de activar la autodestrucción?",
            icon: "warning",
            draggable: true,
            background: "#2d3748", 
            color: "#fff", 
            confirmButtonColor: "#e53e3e" 
        });
    };
    return (
        <div className='container-chat-header'>
            <header className='chat-header'>
                    <div className='container-btn-go-home'>
                        <Link to={'/'}><FaArrowLeftLong /></Link> 
                    </div>
                <Link to={`/contacts/${contact_id}/detail`}>
                <div className='container-contact-information'>
                    <img src={currentContact.img} alt={currentContact.name} className='img-contact-item-header' />
                        <div className='container-contact-connection'>
                            <h3 className='contact-name'>{currentContact.name}</h3>
                            <span>{` Ultima vez conectado ${currentContact.last_time_connected}`}</span>
                        </div>
                </div>
                </Link>
                <div className='container-multimedia-icon'>
                    <div className='container-call-video-icon'>
                        <LuVideo />
                    </div>
                    <div className='container-call-video-icon'>
                        <MdOutlinePhone />
                    </div>
                    <div className='container-bomb-icon'>
                        <GiNuclearBomb
                        onClick={handleAlertBomb}
                        />
                    </div>
                </div>
            </header>
        </div>
    )
}

