import axios from 'axios';


// LOGIN

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

const loginUrl = ''

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post(loginUrl, creds)
    .then(res => console.log(res));
};

// REGISTER 

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'

const registerUrl = ''

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  axios
    .post(registerUrl, creds)
    .then(res => console.log(res));
};

