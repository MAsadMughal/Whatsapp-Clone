import axios from "axios";
import { ALL_USERS_FAIL, ALL_USERS_REQUEST, ALL_USERS_SUCCESS, CLEAR_ERRORS, FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, REGISTRATION_FAIL, REGISTRATION_REQUEST, REGISTRATION_SUCCESS, RESET_PASSWORD_FAIL, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, USER_LOAD_FAIL, USER_LOAD_REQUEST, USER_LOAD_SUCCESS } from "../constants/userConstants";

//REGISTRATION OF NEW USER
export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_USERS_REQUEST })
        const { data } = await axios.get(`/allUsers`);
        dispatch({
            type: ALL_USERS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_USERS_FAIL,
            payload: error.response.data.message
        })
    }
}





//REGISTRATION OF NEW USER
export const registerUser = (name, email, password) => async (dispatch) => {
    try {
        dispatch({ type: REGISTRATION_REQUEST })

        const config = { Headers: { "Content-Type": "application/json" } }
        const { data } = await axios.post(`/signup`, { name, email, password }, config);
        dispatch({
            type: REGISTRATION_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: REGISTRATION_FAIL,
            payload: error.response.data.message
        })
    }
}


//Google User
export const googleUserLogin = (name, email, imageUrl) => async (dispatch) => {
    try {
        dispatch({ type: REGISTRATION_REQUEST })

        const config = { Headers: { "Content-Type": "application/json" } }
        const { data } = await axios.post(`/googleUser`, { name, email, imageUrl }, config);
        dispatch({
            type: REGISTRATION_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: REGISTRATION_FAIL,
            payload: error.response.data.message
        })
    }
}





//LOGIN FUNCTION
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })

        const config = { Headers: { "Content-Type": "application/json" } }
        const { data } = await axios.post(`/login`, { email, password }, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

//CHECK BY LOADING USER
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: USER_LOAD_REQUEST })

        const { data } = await axios.get(`/Gme`);
        dispatch({
            type: USER_LOAD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_LOAD_FAIL,
            payload: error.response.data.message
        })
    }
}

//LOGOUT FUNCTION
export const logout = () => async (dispatch) => {
    try {
        await axios.get(`/logout`);
        dispatch({ type: LOGOUT_SUCCESS })
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}

//UPDATE PASSWORD WHILE LOGGED IN
export const updateYourPassword = (oldPassword, newPassword, confirmPassword) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_PASSWORD_REQUEST })
        const config = { Headers: { "Content-Type": "application/json" } }

        const { data } = await axios.put(`/password/update`, { oldPassword, newPassword, confirmPassword }, config);
        dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: error.response.data.message
        })

    }
}






//FORGOT_PASSWORD REQUESTING EMAIL
export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: FORGOT_PASSWORD_REQUEST })

        const config = { Headers: { "Content-Type": "application/json" } }
        const { data } = await axios.put(`/password/forgot`, { email }, config);
        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}

export const resetPassword = (password, confirmPassword, token) => async (dispatch) => {
    try {
        dispatch({ type: RESET_PASSWORD_REQUEST })

        const config = { Headers: { "Content-Type": "application/json" } }
        const { data } = await axios.put(`/password/reset/${token}`, { password, confirmPassword }, config);
        dispatch({
            type: RESET_PASSWORD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: RESET_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}




//CLEAR_ERRORS
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS, })
}





