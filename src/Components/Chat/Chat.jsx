import React, { useContext } from 'react'
import Message from '../Message/Message'
import { MessagesContext } from '../../Context/MessagesContext'
import './Chat.css'
import mook_data from '../../data/contact-mook'

export default function Chat() {
    const {messages} = useContext(MessagesContext)
    if(messages.length === 0){
        return (
            <div className='container-no-messages'>
                {/* Agregar una alerta de sweetalert2 para indicar que no hay mensajes recientes */}
                <span>No tienes mensajes recientes</span>
            </div>
        )
    }
    return (
        <div className='container-messages'>
            {
                messages.map((message) => {
                    return (
                        <Message 
                            key={message.id} 
                            emisor={message.emisor}
                            id={message.id}
                            hora={message.hora}
                            texto={message.texto}
                            status={message.status}
                        />
                    )
                })
            }
        </div>
    )
}
