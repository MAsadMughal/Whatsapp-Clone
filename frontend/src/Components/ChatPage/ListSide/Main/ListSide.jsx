import { Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import "../../ChatPage.css";
import ChatListComponent from "../List/ChatListComponent";
import SearchInput from "../List/SearchInput";
import Topbar from "../List/Topbar";
import Profilepage from "../ProfileDetails/Profilepage";


const ListSide = ({ setCon, allUsers }) => {
    const [profile, setProfile] = useState(false);
    const [list, setlist] = useState([]);
    const [input, setInput] = useState("");


    useEffect(() => {
        setlist(allUsers.filter(user => user.name.toLowerCase().includes(input.toLowerCase())));
    }, [input])


    return (
        <>
            {profile ? (
                <div id="chatListSide">
                    <Profilepage setProfile={setProfile} />
                </div>
            ) : (
                <div id="chatListSide">
                    <Topbar setProfile={setProfile} />
                    <SearchInput input={input} setInput={setInput} />
                    {
                        list && list.map((item, ind) => {
                            return (<div key={ind}>
                                <Divider />
                                <ChatListComponent setCon={setCon} user={item} />
                            </div>)
                        })
                    }
                </div>
            )}
        </>
    );
};

export default ListSide;
