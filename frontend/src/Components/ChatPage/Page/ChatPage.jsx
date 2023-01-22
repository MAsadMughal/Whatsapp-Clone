import React, { useState } from 'react'
import "../ChatPage.css";
import ChatSide from '../ChatSide/Main/ChatSide';
import ListSideWrapper from '../ListSide/Main/ListSideWrapper';



const ChatPage = () => {
    const [con, setCon] = useState(false);
    console.log(con);
    return (
        <center>
            <div id='chatboxMain'>
                <ListSideWrapper setCon={setCon} />
                <ChatSide con={con} />
            </div>
        </center>
    )
}

export default ChatPage