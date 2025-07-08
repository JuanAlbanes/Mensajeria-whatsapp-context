import React, { useContext, useEffect } from 'react'
import Chat from '../../Components/Chat/Chat'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import { Link, useParams } from 'react-router'
import { MessagesContext } from '../../Context/MessagesContext'
import LoaderSpinner from '../../Components/LoaderSpinner/LoaderSpinner'
import './HomeScreen.css'
import ChatHeader from '../../Components/ChatHeader/ChatHeader.jsx'



export default function HomeScreen() {

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
            <ChatHeader/>
            <Chat/>
			<NewMessageForm/>
        </div>
    )
}
