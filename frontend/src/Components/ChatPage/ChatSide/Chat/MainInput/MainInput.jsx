import { AttachFileOutlined, EmojiEmotionsOutlined, MicOutlined } from '@mui/icons-material';
import React from 'react';
import "../../../ChatPage.css";

const MainInput = () => {
    return (
        <div id='allInputsWrapChatSide'>
            <div id='EmojiInputChat'><EmojiEmotionsOutlined /></div>
            <div id='FileInputClipChat'><AttachFileOutlined /></div>
            <input id='InputTextChatBox' placeholder='Type a message' type="text" />
            <div id='MicInputChat'><MicOutlined /></div>
        </div>
    )
}

export default MainInput