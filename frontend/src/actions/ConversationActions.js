import { CURR_CONVO_FAIL, CURR_CONVO_REQUEST, CURR_CONVO_SUCCESS } from "../constants/ConversationsConstants";
import axios from "axios";


export const getCurrentConversation = (chattingUser) => async (dispatch) => {
    try {
        dispatch({ type: CURR_CONVO_REQUEST })
        const createConv = await axios.post('/createConversation', { receiverId: chattingUser._id });
        const { data } = await axios.get(`/getConversation/${chattingUser._id}`);
        dispatch({
            type: CURR_CONVO_SUCCESS,
            payload: chattingUser
        })
    } catch (error) {
        dispatch({
            type: CURR_CONVO_FAIL,
            payload: error.response.data.message
        })
    }
}

