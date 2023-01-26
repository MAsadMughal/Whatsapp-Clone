import { CURR_CONVO_FAIL, CURR_CONVO_REQUEST, CURR_CONVO_SUCCESS } from "../constants/ConversationsConstants";

export const getCurrentConversation = (user) => async (dispatch) => {
    try {
        dispatch({ type: CURR_CONVO_REQUEST })
        // const { data } = await axios.get(`/allUsers`);
        dispatch({
            type: CURR_CONVO_SUCCESS,
            payload: user
        })
    } catch (error) {
        dispatch({
            type: CURR_CONVO_FAIL,
            payload: error.response.data.message
        })
    }
}

