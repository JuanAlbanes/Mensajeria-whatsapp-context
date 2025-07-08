import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import LoaderSpinner from '../../Components/LoaderSpinner/LoaderSpinner'
import './ContactDetailScreen.css'
import { MdOutlinePhone } from "react-icons/md";
import { LuVideo } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";


export default function ContactDetailScreen() {
    const {contact_id} = useParams()
    const {loadContact , contact_detail, isLoadingContactDetail} = useContext(ContactDetailContext)
    useEffect(
        () => {
            loadContact(contact_id)
        },
        [contact_id]
    )
    if(isLoadingContactDetail){
        return (
        <LoaderSpinner/>
        )
    }
    return (
        <div className='container-contact-detail'>
            <header className='header-contact-detail'>
                <Link to={`/contacts/${contact_id}/messages`}><FaArrowLeftLong /></Link>
                <h1>{contact_detail.name}</h1>
            </header>
            <img src={contact_detail.img} alt={`${contact_detail.name} image profile`} className='img-contact-profile' />
            <h3 className='name-contact'>
                {contact_detail.number_phone}
            </h3>
            <div className='container-multimedia-contact-profile'>
                <div className='container-multimedia'>
                    <MdOutlinePhone />
                    <span>
                        Llamar
                    </span>
                </div>
                <div className='container-multimedia'>
                    <LuVideo />
                    <span>
                        Video
                    </span>
                </div>
                <div className='container-multimedia'>
                    <IoSearchSharp />
                    <span>
                        Buscar
                    </span>
                </div>
            </div>
        </div>
    )
}
