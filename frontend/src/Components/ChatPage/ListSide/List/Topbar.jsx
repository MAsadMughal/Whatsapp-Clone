import React from "react";
import "../../ChatPage.css";
import ChatIcon from "@mui/icons-material/Chat";
import PopupMenu from "./PopupMenu";
import { useSelector } from "react-redux";

const Topbar = ({ setProfile }) => {
    const { user } = useSelector(state => state.user);


    return (
        <div id="listSideTopBar">
            <span id="profileImageTopBar">

                <img
                    id="profileImgTop"
                    onClick={() => setProfile(true)}
                    src={user?.loggedInUser?.imageUrl}
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
