import React from 'react'
import "./Messages.css";

const SentMessage = ({ image, text, time }) => {
    return (
        <div id='sentDiv'>
            <div id="sentTextWrapped">
                <p id='sentText'>{text}</p>
                <p id='sendingTime'>{time}</p>
            </div>
            <img id="senderImage" src={image} />
        </div>
    )
}

export default SentMessage
