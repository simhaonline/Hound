import React, {useEffect,Fragment} from 'react'
import {connect, sendMsg} from '../websocket-client'
import Image from '../images/user.png'
import ChatHistory from '../components/chat/ChatHistory'
import '../CSS/chat.css'
function Chat() {
    useEffect(() => {
        connect();
    }, [])
    const send = (e) => {
        console.log("ekeycode:",e.keyCode)
        if(e.keyCode === 13) {
            sendMsg(e.target.value);
            e.target.value = "";
        }
        
    }

    return (<Fragment>
    <div className={"chat"}>
        <ChatHistory/>
    </div>
    <div className={"input-chat"}>
        <input onKeyDown={send}/>
    </div>
    </Fragment>
    )
}

export default Chat
