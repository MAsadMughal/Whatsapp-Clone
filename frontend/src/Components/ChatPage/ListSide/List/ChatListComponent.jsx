import React from 'react'
import "../../ChatPage.css";
import emptyImage from "../../../../Images/emptyImage.png";
import { Typography } from '@mui/material';
import { getCurrentConversation } from '../../../../actions/ConversationActions';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../../../../actions/MessageActions';


const ChatListComponent = ({ user }) => {
    const dispatch = useDispatch();
    const conversation = useSelector(state => state.currentConversation)
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


    const getConversation = () => {
        if (conversation?.currentConvo?.email !== user?.email) {
            dispatch(getCurrentConversation(user));
        }
    }
    return (
        <div id='chatListComponent' style={(conversation?.currentConvo?.email === user?.email) ? { backgroundColor: "#34b7f1" } : null} onClick={getConversation}>
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