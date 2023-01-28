import React, { useEffect, useState } from "react";
import "../../ChatPage.css";
import ChatIcon from "@mui/icons-material/Chat";
import PopupMenu from "./PopupMenu";
import { useDispatch, useSelector } from "react-redux";

const Topbar = ({ setProfile }) => {
    const { user, isAuthenticated } = useSelector(state => state.user);
    const [currentUser, setCurrentUser] = useState({})
    const dispatch = useDispatch();
    useEffect(() => {
        setCurrentUser(user && user);
    }, [currentUser, setCurrentUser, user, dispatch])


    return (
        <div id="listSideTopBar">
            <span id="profileImageTopBar">
                <img
                    id="profileImgTop"
                    onClick={() => setProfile(true)}
                    src={isAuthenticated ? currentUser?.imageUrl : "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"}
                    alt="Profile-img"
                />
            </span>
            <span id="messageIconTopBar">
                <ChatIcon />
            </span>
            <span id="moreIconTopBar">
                <PopupMenu setProfile={setProfile} />
            </span>
        </div>
    );
};

export default Topbar;
