import { AttachFileOutlined, EmojiEmotionsOutlined, MicOutlined, SendOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import "../../../ChatPage.css";

const MainInput = () => {
    const [input, setInput] = useState("")
    const sendMessage = () => {

    }

    return (
        <div id='allInputsWrapChatSide'>
            <div id='EmojiInputChat'><EmojiEmotionsOutlined /></div>
            <div id='FileInputClipChat'><AttachFileOutlined /></div>
            <input id='InputTextChatBox' onChange={(e) => { setInput(e.target.value) }} value={input} placeholder='Type a message' type="text" />
            <div id='MicInputChat'>{!input ? <MicOutlined /> : <SendOutlined onClick={sendMessage} />}</div>
        </div>
    )
}

export default MainInput