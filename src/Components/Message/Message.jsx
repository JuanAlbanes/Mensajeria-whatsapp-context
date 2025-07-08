import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import './Message.css'
import { MdOutlineDelete } from "react-icons/md";
import { PiChecks } from "react-icons/pi";

export default function Message({ emisor, hora, id, texto, status}) {
    const {handleEliminarMensaje} = useContext(MessagesContext)

    const classNames = {
        message: 'chat-dialog',
        statusCheck: 'status-check' + (emisor === 'YO' && status === 'visto' ? ' status-seen' : '')
    }
    if(emisor === 'YO'){
        classNames.message = classNames.message + ' chat-dialog__my-message'
    }
    return (
        <div className={classNames.message} >
            <span className='text-messages-chat'> {texto} </span>
            <div className='container-time-status'>
                <span>{hora}</span>
                {emisor === 'YO' && (
                    <span className={classNames.statusCheck}><PiChecks /></span>
                )}
                <button onClick={() => {handleEliminarMensaje(id)}} className='delete-message-btn' ><MdOutlineDelete /></button>
            </div>
        </div>
    )
} 



