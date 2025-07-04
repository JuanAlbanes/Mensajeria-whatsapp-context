import React, { useContext, useEffect } from 'react'
import Chat from '../../Components/Chat/Chat'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import { Link, useParams } from 'react-router'
import { MessagesContext } from '../../Context/MessagesContext'
import LoaderSpinner from '../../Components/LoaderSpinner/LoaderSpinner'
import './HomeScreen.css'
import mook_data from '../../data/contact-mook'


export default function HomeScreen({name, id , last_time_connected, img, last_message, unread_messages}) {

    const {contact_id} = useParams()
    const {loadMessages, isMessagesLoading} = useContext(MessagesContext)
    useEffect(
        () => {
            loadMessages(contact_id)
        }
        ,
        [contact_id]
    )
    if(isMessagesLoading){
        return (
        <LoaderSpinner/>
        )
    }
    return (
        <div>
            <Link to={`/contacts/${contact_id}/detail`}>
                <header className='chat-header'>
                    <div className='container-contact-information'>
                        <img src="" alt="" />
                            <div className='container-contact-connection'>
                                <h3 className='contact-name'>{name}</h3>
                                <span></span>
                            </div>
                    </div>
                </header>
            </Link>
            <Chat/>
			<NewMessageForm/>
        </div>
    )
}
