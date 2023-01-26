import { Box, Dialog, List, ListItem, styled, Typography } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from 'jwt-decode';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleUserLogin } from "../../../actions/userActions";

const Dialogue = () => {
  const dispatch = useDispatch();
  const FlexBoxR = styled(Box)`display:flex;flex-direction:row; align-items:top;justify-content:center;`
  const Title = styled(Typography)`font-size:20px; font-weight:300; margin-bottom:30px;`
  const Item = styled(List)`& > li{ font-size:20px; font-weight:300; margin-top:10px;}`

  const dialogStyle = {
    height: "96%",
    marginTop: "12%",
    width: "70%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden",
  }
  const { isAuthenticated } = useSelector(state => state.user);

  const googleError = (res) => {
    console.log('Login Failed: ', res);

  }
  const googleSuccess = (res) => {
    const cred = (jwtDecode(res.credential));
    console.log(cred);
    dispatch(googleUserLogin(cred.name, cred.email, cred.picture));
  }


  return (
    <div>
      <Dialog open={true}
        PaperProps={{ sx: dialogStyle }}>
        <FlexBoxR marginTop={"50px"}>
          <Box padding={'20px'}>
            <Title>To use Whatsapp on your computer:</Title>
            <Item>
              <ListItem>1. Open Whatsapp On Your Computer.</ListItem>
              <ListItem>2. Open Menu settings and select Whatsapp Web.</ListItem>
              <ListItem>3. Point Your Phone to this screen to capture the code. {isAuthenticated ? "asadHere" : ""}</ListItem>
            </Item>
          </Box>
          <Box position={'relative'}>
            <img height={"200px"} src="https://qrcg-free-editor.qr-code-generator.com/main/assets/images/websiteQRCode_noFrame.png" alt="" />
            <Box position={'absolute'} top={'20%'}>
              <GoogleLogin onSuccess={googleSuccess} onError={googleError} />
            </Box >
          </Box>
        </FlexBoxR>
      </Dialog>
    </div>
  );
};

export default Dialogue;
