import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../actions/userActions";
import Loader from "../../../Loader/Loader";
import "../../ChatPage.css";
import ListSide from './ListSide';

const ListSideWrapper = ({ setCon }) => {
    const [currentUserDetails, setUserDetails] = useState({})
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useSelector(state => state.user);
    const me = useSelector(state => state.user);
    const { allUsers, loading } = useSelector(state => state.allUsers);
    
    useEffect(() => {
        if (Object.keys(currentUserDetails).length <= 0) {
            dispatch(getAllUsers());
            setUserDetails(user && user);
        }
    }, [user, setUserDetails, me])



    const userLoading = me && me.loading;
    return (
        <>{(loading || userLoading) ? <Loader /> : (isAuthenticated && allUsers.length) ? <ListSide allUsers={allUsers}  setCon={setCon} /> : null}</>
    )
}

export default ListSideWrapper