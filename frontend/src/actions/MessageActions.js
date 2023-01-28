import { GET_MESSAGES_FAIL, GET_MESSAGES_REQUEST, GET_MESSAGES_SUCCESS, SEND_MESSAGES_FAIL, SEND_MESSAGES_REQUEST, SEND_MESSAGES_SUCCESS } from "../constants/MessageConstants";
import axios from "axios";


export const sendNewMessage = (senderId, receiverId, text) => async (dispatch) => {
    try {
        dispatch({ type: SEND_MESSAGES_REQUEST })

        const { data } = await axios.get(`/getConversation/${receiverId}`);
        const conversationId = data.members[0]._id;
        const newmessage = await axios.post(`/newMessage`, { senderId, receiverId, conversationId, text });
        console.log(newmessage);
        dispatch({
            type: SEND_MESSAGES_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: SEND_MESSAGES_FAIL,
            payload: error.response.data.message
        })
    }
}



export const getMessages = (receiverId) => async (dispatch) => {
    try {
        dispatch({ type: GET_MESSAGES_REQUEST })

        const con = await axios.get(`/getConversation/${receiverId}`);
        const conversationId = con.data.members[0]._id;
        const { data } = await axios.get(`/getMessages/${conversationId}`);
        const messages = data.messages;

        dispatch({
            type: GET_MESSAGES_SUCCESS,
            payload: messages
        })
    } catch (error) {
        dispatch({
            type: GET_MESSAGES_FAIL,
            payload: error.response.data.message
        })
    }
}


