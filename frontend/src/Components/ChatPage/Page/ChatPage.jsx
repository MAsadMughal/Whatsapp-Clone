import React from 'react'
import NavBar from '../../AuthPage/Navbar/NavBar';
import "../ChatPage.css";
import ChatSide from '../ChatSide/ChatSide';
import ListSide from '../ListSide/ListSide';



const ChatPage = () => {
    return (
        <center>
            <div id='chatboxMain'>
                <ListSide />
                    <ChatSide />
            </div>
        </center>
    )
}

export default ChatPage