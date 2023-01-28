import React, { useState } from 'react'
import "../ChatPage.css";
import ChatSide from '../ChatSide/Main/ChatSide';
import ListSideWrapper from '../ListSide/Main/ListSideWrapper';



const ChatPage = () => {
    return (
        <center>
            <div id='chatboxMain'>
                <ListSideWrapper />
                <ChatSide  />
            </div>
        </center>
    )
}

export default ChatPage