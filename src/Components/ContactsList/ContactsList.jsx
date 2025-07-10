import React, { useContext, useState } from "react"
import ContactItem from "../ContactItem/ContactItem"
import { ContactContext } from "../../Context/ContactContext"
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner"
import './ContactsList.css';
const ContactsList = () => {
    const {contacts, isLoadingContacts} = useContext(ContactContext)

    const [searchContact, setSearchContact] = useState('');
    const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchContact.toLowerCase())
    )

    if(isLoadingContacts){
        return ( 
        <LoaderSpinner/>
    )}
    return (
        <div className="container-contact-list">
            <header className="whatsapp-header">
                    <h1 className="title-header">WhatsApp War</h1>
            </header>
            <form className="search-bar">
                <input
                    type="text"
                    placeholder="Buscar contacto..."
                    value={searchContact}
                    onChange={(e) => setSearchContact(e.target.value)}
                    className="input"
                />
            </form>

                {filteredContacts.map((contact) => (
                    <ContactItem
                    key={contact.id}
                    {...contact}
                    />
                ))}
        </div>
    )
} 
export default ContactsList