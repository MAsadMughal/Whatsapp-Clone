import React, { useEffect } from 'react'
import "../../ChatPage.css";
import ChatListComponent from "../List/ChatListComponent";
import Profilepage from "../ProfileDetails/Profilepage";
import SearchInput from "../List/SearchInput";
import Topbar from "../List/Topbar";
import Loader from "../../../Loader/Loader"
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, loadUser } from "../../../../actions/userActions";
import ListSide from './ListSide';

const ListSideWrapper = ({ setCon }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());
    }, [])


    const { allUsers, loading } = useSelector(state => state.allUsers);
    const { user } = useSelector(state => state.user);
    const currentUser = user && user.loggedInUser;
    return (
        <>{loading ? <Loader /> : (Object.keys(currentUser).length && allUsers.length) ? <ListSide allUsers={allUsers} currentUser={currentUser} setCon={setCon} /> : null}</>
    )
}

export default ListSideWrapper