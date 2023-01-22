import { Search } from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react';
import "../../ChatPage.css";
import PopupMenu from './PopupMenu';

const TopBar = ({ setOpen }) => {
    return (
        <div id="chatBoxSideTopBar">
            <span id="profileImageTopBar">
                <img
                    id="profileImgTop"
                    onClick={() => setOpen(true)}
                    src="https://1fid.com/wp-content/uploads/2022/02/boy-dp-image-75-1024x1003.jpg"
                    alt="Profile-img"
                />
            </span>
            <div id='chatListComponentNameAndStatus'>
                <Typography id="chatSideComponentName" fontSize={"larger"}>Asad Ullah</Typography>
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