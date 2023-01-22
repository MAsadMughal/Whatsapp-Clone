import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { useDispatch } from "react-redux";
import { logout } from "../../../../actions/userActions";


export default function PopupMenu({ setProfile }) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const handleMenu = (e) => {
        setOpen(e.currentTarget);
    }

    const handleClose = () => {
        setOpen(null);
    }
    const profileFunction = () => {
        setOpen(null);
        setProfile(true);
    }
    const logoutFunction = () => {
        dispatch(logout());
    }

    return (<>
        <MoreVertIcon onClick={handleMenu} />
        <Menu
            id="fade-menu"
            keepMounted
            anchorEl={open}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
        >
            <MenuItem onClick={profileFunction}>Profile</MenuItem>
            <MenuItem onClick={profileFunction}>My account</MenuItem>
            <MenuItem onClick={logoutFunction}>Logout</MenuItem>
        </Menu>
    </>);
}