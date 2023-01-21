import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../../actions/userActions";
import "../ChatPage.css";
import ChatListComponent from "./ChatListComponent";
import Profilepage from "./ProfileDetails/Profilepage";
import SearchInput from "./SearchInput";
import Topbar from "./Topbar";
import Loader from "../../Loader/Loader"
import { Divider } from "@mui/material";


const ListSide = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());
    }, [])


    const [profile, setProfile] = useState(false);
    const { allUsers, loading } = useSelector(state => state.allUsers);
    const { user } = useSelector(state => state.user);
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
                    {loading ? <Loader /> :
                        allUsers.length >= 1 && allUsers.map((item, ind) => {

                            return (<div key={ind}>
                                <Divider />
                                <ChatListComponent user={item} />
                            </div>)
                        })
                    }
                </div>
            )}
        </>
    );
};

export default ListSide;
