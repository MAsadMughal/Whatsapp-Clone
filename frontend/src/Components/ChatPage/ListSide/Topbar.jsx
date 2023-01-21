import React from "react";
import "../ChatPage.css";
import ChatIcon from "@mui/icons-material/Chat";
import PopupMenu from "./PopupMenu";
const Topbar = ({ setProfile }) => {
    return (
        <div id="listSideTopBar">
            <span id="profileImageTopBar">
                <img
                    id="profileImgTop"
                    onClick={() => setProfile(true)}
                    src="https://1fid.com/wp-content/uploads/2022/02/boy-dp-image-75-1024x1003.jpg"
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
