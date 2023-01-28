import { ArrowBack } from "@mui/icons-material";
import React from "react";
import "../../ChatPage.css";
import EditIcon from '@mui/icons-material/Edit';
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";

const Profilepage = ({ setProfile }) => {
    const { user } = useSelector(state => state.user);

    return (
        <div>
            <div id="ProfileTopBar">
                <ArrowBack onClick={() => { setProfile(false) }} style={{}} />
                <b style={{ paddingLeft: "5%", fontSize: "20px", fontFamily: "sans-serif", letterSpacing: "4px" }}>Profile</b>
            </div>
            <div id="ProfilePageWrapperImage"><img id="ProfilePageImage" src={user?.imageUrl} alt="" /></div>
            <Divider />
            <div id="profilePageName">
                <div>Your Name</div>
                <div id="NameProfilePage">
                    <p id="paragraph-profile">{user?.name}</p>
                    <p id="paragraph-profile"><EditIcon style={{ cursor: "pointer" }} /></p>
                </div>
            </div>
            <Divider />
            <div id="WhatsappWrapup">You can go through our Privacy Policy by clicking on privacy policy option in tab.</div>
            <Divider />
            <div id="profilePageName">
                <div>About</div>
                <div id="NameProfilePage">
                    <p id="paragraph-profile">Eat, Sleep, Repeat!!</p>
                    <p id="paragraph-profile"><EditIcon style={{ cursor: "pointer" }} /></p>
                </div>
            </div>
            <Divider />
        </div>
    );
};

export default Profilepage;
