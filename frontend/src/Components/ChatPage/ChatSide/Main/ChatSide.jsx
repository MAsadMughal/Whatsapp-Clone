import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "../../ChatPage.css";
import MainInput from '../Chat/MainInput/MainInput';
import TopBar from '../Chat/TopBar';

const ChatSide = () => {
    const [open, setOpen] = useState(false);
    const conversation = useSelector(state => state.currentConversation)
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        setSuccess(conversation?.success);
    }, [conversation])
    console.log(conversation);

    return (<>
        {success ?
            <div id='chatBoxSide'>
                <TopBar setOpen={setOpen} conversationUser={conversation?.currentConvo} />
                <MainInput />
            </div> : <div id='chatBoxSide'>
            </div>}
    </>
    )
}

export default ChatSide