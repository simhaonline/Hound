import React from 'react'
import Image from '../../images/user.png'
function Message({type = "",data ="",time}) {
    let timeposition = (type === "darker")? "left":"right";
    let position = (type === "darker")? "right":"left";
    const prettyDate = (time) => {
        var date = new Date(parseInt(time));
        var local = date.toLocaleTimeString();
        return local;
    } 
    return (
        <div className={`container-chat ${type}`}>
            <img src={Image} alt="Avatar" className={position}/>
            <p>{data}</p>
            <span className={`time-${timeposition}`}>{prettyDate(time)}</span>
        </div>
    )
}

export default Message
