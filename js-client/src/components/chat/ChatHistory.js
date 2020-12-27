import React , {useState,Fragment}from 'react'
import {listenMsg} from '../../websocket-client/index'
import Message from './Message'
import Image from '../../images/user.png'
function ChatHistory() {
    const [messages,setMessages] = useState([])
    const [myID,setID] = useState(undefined)
    listenMsg(setMessages,setID,messages)
    const renderChatHistory = (messages,myID) => messages.map((msg) => {
        const type = (myID === msg.client)? "":"darker";
        return <Message type={type} data={msg.data} time={msg.time}/>
    })
    return (
    <Fragment>
        {messages.length > 0 && renderChatHistory(messages,myID)}
    </Fragment>
    )
}

export default ChatHistory
