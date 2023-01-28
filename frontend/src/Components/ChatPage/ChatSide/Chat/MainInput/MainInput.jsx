import { AttachFileOutlined, EmojiEmotionsOutlined, MicOutlined, SendOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages, sendNewMessage } from '../../../../../actions/MessageActions';
import "../../../ChatPage.css";

const MainInput = ({ toUser }) => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);

    const sendMessage = () => {
        dispatch(sendNewMessage(user._id, toUser._id, input));
        dispatch(getMessages(toUser._id));
        setInput("");
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