import React from 'react'
import "../ChatPage.css";
import emptyImage from "../../../Images/emptyImage.png";
import { Typography } from '@mui/material';
const ChatListComponent = ({ user }) => {
    const compressName = (name) => {
        let firstName = name.split(" ");
        if (firstName.length > 1) {
            firstName = firstName[1];
        } else {
            firstName = firstName[0];
        }
        if (firstName.length > 10) {
            return firstName.substring(0, 10) + "...";
        } else {
            return firstName;
        }
    }

    const compressMessage = (name) => {
        let firstName = name.split(" ");
        firstName = firstName[0] + " " + firstName[1];
        if (firstName.length <= 10) {
            return firstName;
        }
        if (window.innerWidth >= 900) {
            return firstName.substring(0, 15) + "...";
        } else if (window.innerWidth >= 600) {
            return firstName.substring(0, 10) + "...";
        } else {
            return firstName.substring(0, 5) + "...";
        }


    }

    return (
        <div id='chatListComponent'>
            <div id='chatListComponentImageWrap'>
                <img id='chatListComponentImage' alt="profile-img" src={user.imageUrl ? user.imageUrl : emptyImage} />
            </div>
            <div id='chatListComponentNameAndMsg'>
                <Typography id="chatListComponentName" fontSize={"larger"} >{user.name ? compressName(user.name) : "No Name"}</Typography>
                <Typography id="chatListComponentMsg" fontSize={"small"}>{user.name ? compressMessage(user.name) : "No Name"}</Typography>
            </div>
        </div>
    )
}

export default ChatListComponent