import React, { useState } from 'react';
import "../../ChatPage.css";
import MainInput from '../Chat/MainInput/MainInput';
import TopBar from '../Chat/TopBar';

const ChatSide = ({ con }) => {
    const [open, setOpen] = useState(false);

    return (<>
        {con ?
            <div id='chatBoxSide'>
                <TopBar setOpen={setOpen} />
                <MainInput />
            </div> : <div id='chatBoxSide'>
            </div>}
    </>
    )
}

export default ChatSide