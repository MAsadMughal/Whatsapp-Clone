import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, loadUser } from "../../../../actions/userActions";
import "../../ChatPage.css";
import ChatListComponent from "../List/ChatListComponent";
import Profilepage from "../ProfileDetails/Profilepage";
import SearchInput from "../List/SearchInput";
import Topbar from "../List/Topbar";
import Loader from "../../../Loader/Loader"
import { Divider } from "@mui/material";


const ListSide = ({ setCon, allUsers, currentUser }) => {
    const [profile, setProfile] = useState(false);

    return (
        <>
            {profile ? (
                <div id="chatListSide">
                    <Profilepage setProfile={setProfile} />
                </div>
            ) : (

                <div id="chatListSide">
                    <Topbar setProfile={setProfile} />
                    <SearchInput />
                    {
                        allUsers.length >= 1 && allUsers.flatMap((item, ind) => {
                            console.log(item);
                            return item.email !== currentUser.email ? (<div key={ind}>
                                <Divider />
                                <ChatListComponent setCon={setCon} user={item} />
                            </div>) : null
                        })
                    }
                </div>
            )}
        </>
    );
};

export default ListSide;
