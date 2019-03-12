import axios from 'axios';

const apiDomain = 'https://github-user-breakdown-app.herokuapp.com/api'

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

// Register
export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START })
    axios
        .post(`${apiDomain}/register`, creds)
        .then(res => console.log(res))
}

// Login
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    axios
        .post(`${apiDomain}/login`, creds)
        .then(res => console.log(res))
}

// Fetch user data
export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_USER_START });
    axios
      .get(`${apiDomain}/home`, {
        headers: { Authorization: localStorage.getItem('token') }
      })
      .then(res => dispatch({ type: FETCH_USER_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: FETCH_USER_FAIL, payload: err }))
  };
  

