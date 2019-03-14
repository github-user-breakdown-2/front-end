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


// ADD USER CARD

export const FETCH_SUMMARY_START = "FETCH_SUMMARY_START";
export const FETCH_SUMMARY_SUCCESS = "FETCH_SUMMARY_SUCCESS";
export const FETCH_SUMMARY_FAIL = "FETCH_SUMMARY_FAIL";

export const getSummaryData = user => dispatch => {
  dispatch({ type: FETCH_SUMMARY_START });
  axios.get(`https://github-user-breakdown-app.herokuapp.com/api/app/githubusers/summary/${user}`)
    .then(res => {
        dispatch({ type: FETCH_SUMMARY_SUCCESS, payload: res.data })
      })
    .catch(err => console.log(err.response));
};


// DELETE USER CARD

export const DELETE_USER = "DELETE_USER";

export const deleteUser = user => ({
  type: DELETE_USER,
  payload: user
})


// USER DETAILED STATS
export const FETCH_DETAILED_START = "FETCH_DETAILED_START";
export const FETCH_DETAILED_SUCCESS = "FETCH_DETAILED_SUCCESS";
export const FETCH_DETAILED_FAIL = "FETCH_DETAILED_FAIL";

export const getDetailedData = user => dispatch => {
  dispatch({ type: FETCH_DETAILED_START });
  axios.get(`https://github-user-breakdown-app.herokuapp.com/api/app/githubusers/detailed/${user}`)
    .then(res => {
        dispatch({ type: FETCH_DETAILED_SUCCESS, payload: res.data })
      })
    .catch(err => console.log(err.response));
};


