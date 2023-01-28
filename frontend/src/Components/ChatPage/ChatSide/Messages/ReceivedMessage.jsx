import React from 'react'
import "./Messages.css";

const ReceivedMessage = ({image,text,time}) => {
    return (
        <div id='receivedDiv'>
            <img id="receiverImage" src={image} />
            <div id="receivedTextWrapped">
                <p id='sentText'>{text}</p>
                <p id='sendingTime'>{time}</p>
            </div>
        </div>
    )
}

export default ReceivedMessage
