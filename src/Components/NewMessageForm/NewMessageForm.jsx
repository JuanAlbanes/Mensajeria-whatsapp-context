import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import './NewMessageForm.css'
import { IoSend } from "react-icons/io5";

export default function NewMessageForm() {
    const {addNewMessage} = useContext(MessagesContext)
    
    const handleSubmitNewMessage = (e) => {
        e.preventDefault()
        let new_text = e.target.text.value
        addNewMessage(new_text)
        e.target.reset() 
    }
    return (
        <form onSubmit={handleSubmitNewMessage} className='container-form'>
            <div className='container-form-text'>
                <label htmlFor="text"></label>
                <input 
                id='text' 
                name='text' 
                required 
                className='textarea-container' 
                placeholder="Escribe un mensaje"
                />
            </div>
            <div className='container-btn-form'>
                <button type='submit' className='btn'><IoSend /></button>
            </div> 
        </form>
    )
}
