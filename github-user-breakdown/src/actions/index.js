import axios from "axios";

// LOGIN

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

const apiDomain = "https://github-user-breakdown-app.herokuapp.com";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  console.log(creds);
  axios
    .post("https://github-user-breakdown-app.herokuapp.com/api/login", creds)
    .then(res => console.log(res))
    .catch(err => console.log(err.response));
};

// {localStorage.setItem("token", res.data); dispatch({ type: LOGIN_SUCCESS, payload: res.data }
// dispatch({ type: LOGIN_FAIL, payload: err.response.data })

// REGISTER

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  axios
    .post(`${apiDomain}/api/register`, creds)
    .then(res => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: REGISTER_FAIL, payload: err.response.message }));
};

//
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
      console.log("call failed: ", err.response);
      dispatch({ type: FETCH_USER_FAIL, payload: err.response });
    });
};
