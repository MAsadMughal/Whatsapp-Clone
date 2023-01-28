import { GET_MESSAGES_FAIL, GET_MESSAGES_SUCCESS, GET_MESSAGES_REQUEST, SEND_MESSAGES_FAIL, SEND_MESSAGES_SUCCESS, SEND_MESSAGES_REQUEST, CLEAR_ERRORS } from "../constants/MessageConstants";

export const sendMessageReducer = (state = { newMessage: {} }, action) => {
    switch (action.type) {
        case SEND_MESSAGES_REQUEST:
            return {
                error: null,
                loading: true
            }
        case SEND_MESSAGES_SUCCESS:
            return {
                loading: false,
                newMessage: action.payload,
                success: true
            }

        case SEND_MESSAGES_FAIL:
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



export const getMessagesReducer = (state = { messages: [] }, action) => {
    switch (action.type) {
        case GET_MESSAGES_REQUEST:
            return {
                messages: [],
                error: null,
                loading: true
            }
        case GET_MESSAGES_SUCCESS:
            return {
                loading: false,
                messages: action.payload,
                success: true
            }

        case GET_MESSAGES_FAIL:
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