import axios from "axios";

// API ROOT DOMAIN

const apiDomain = 'https://github-user-breakdown-app.herokuapp.com/api';

// REGISTER

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  console.log(creds);
  axios
    .post('https://github-user-breakdown-app.herokuapp.com/api/register', creds)
    .then(res => console.log(res))
    .catch(err => dispatch({ type: REGISTER_FAIL, payload: err.response.message }));
};

// dispatch({ type: REGISTER_SUCCESS, payload: res.data })


// LOGIN

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post('https://github-user-breakdown-app.herokuapp.com/api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(err => console.log(err.response));
};


// GET DATA

export const FETCH_USER_START = "FETCH_START";
export const FETCH_USER_SUCCESS = "FETCH_SUCCESS";
export const FETCH_USER_FAIL = "FETCH_FAIL";

export const getUserData = () => dispatch => {
  dispatch({ type: FETCH_USER_START });
  axios
    .get("http://localhost:5000/api/friends", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: FETCH_USER_FAIL, payload: err.response });
    });
};