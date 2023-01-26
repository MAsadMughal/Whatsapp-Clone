import { Search } from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react';
import "../../ChatPage.css";
import PopupMenu from './PopupMenu';

const TopBar = ({ setOpen, conversationUser }) => {


    return (
        <div id="chatBoxSideTopBar">
            <span id="profileImageTopBar">
                <img
                    id="profileImgTop"
                    onClick={() => setOpen(true)}
                    src={conversationUser.imageUrl}
                    alt="Profile-img"
                />
            </span>
            <div id='chatListComponentNameAndStatus'>
                <Typography id="chatSideComponentName" fontSize={"larger"}>{conversationUser.name}</Typography>
                <Typography id="chatSideComponentStatus" fontSize={"small"}>Online</Typography>
            </div>
            <span id="messageIconTopBar">
                <Search />
            </span>
            <span id="moreIconTopBar">
                <PopupMenu setProfile={setOpen} />
            </span>
        </div>
    )
}

export default TopBar