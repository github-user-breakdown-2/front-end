import axios from 'axios';

export const REGISTER_START = 'LOGIN_START';
export const REGISTER_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_FAIL = 'LOGIN_FAIL';

const apiRegisterUrl = '';

// Register
export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START })
    axios
        .post(apiRegisterUrl, creds)
        .then(res => console.log(res))
}


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

const apiLoginUrl = '';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    axios
        .post(apiLoginUrl, creds)
        .then(res => console.log(res))
}
