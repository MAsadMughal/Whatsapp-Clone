import { CURR_CONVO_FAIL, CURR_CONVO_SUCCESS, CURR_CONVO_REQUEST, CLEAR_ERRORS } from "../constants/ConversationsConstants";
export const currConvoReducer = (state = { currentConvo: {} }, action) => {
    switch (action.type) {
        case CURR_CONVO_REQUEST:
            return {
                currentConvo: state,
                error: null,
                loading: true
            }
        case CURR_CONVO_SUCCESS:
            return {
                currentConvo: action.payload,
                loading: false,
                success: true
            }

        case CURR_CONVO_FAIL:
            return {
                loading: false,
                error: action.payload,
                success: false
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }

};

