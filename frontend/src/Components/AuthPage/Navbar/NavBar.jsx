import React from 'react'
import { AppBar, Toolbar, styled, Box } from '@mui/material'
const NavBar = () => {
    const Navbar = styled(AppBar)`
    background-color:#00bfa5;
    box-shadow:none;
    height:250px
    `;
    const Main = styled(Box)`background-color:#DCDCDC;height:100vh;padding:0px;`

    return (
        <Main>
            <Navbar>
                <Toolbar></Toolbar>
            </Navbar>
        </Main>
    )
}

export default NavBar
