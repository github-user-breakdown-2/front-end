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
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(err => dispatch({ type: LOGIN_FAIL, payload: err.response.data }));
};

// REGISTER FOR LOGIN

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  axios
    .post(`${apiDomain}/api/register`, creds)
    .then(res => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({ type: REGISTER_FAIL, payload: err.response.message })
    );
};

// GET SIMPLE USER DATA

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAIL = "FETCH_USER_FAIL";

export const getUserData = user => dispatch => {
  dispatch({ type: FETCH_USER_START });
  console.log(user);
  axios
    .get(`https://api.github.com/search/users?q=${user}`)
    .then(res =>
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: res.data.items.filter(u => u.login === user)
      })
    )
    .catch(err => dispatch({ type: FETCH_USER_FAIL, payload: err.response }));
};

//GET USER SUMMARY DATA
export const FETCH_SUMMARY_START = "FETCH_SUMMARY_START";
export const FETCH_SUMMARY_SUCCESS = "FETCH_SUMMARY_SUCCESS";
export const FETCH_SUMMARY_FAIL = "FETCH_SUMMARY_FAIL";

export const getUserSummary = user => dispatch => {
  dispatch({ type: FETCH_SUMMARY_START });
  console.log(user);
  axios
    .get(`${apiDomain}/api/app/githubusers/summary/${user}`)
    .then(res => console.log(res))
    .catch(err => dispatch({ type: FETCH_SUMMARY_FAIL, payload: err.response }));
};

//GET DETAILED DATA
export const FETCH_DETAILS_START = "FETCH_DETAILS_START";
export const FETCH_DETAILS_SUCCESS = "FETCH_DETAILS_SUCCESS";
export const FETCH_DETAILS_FAIL = "FETCH_DETAILS_FAIL";

export const getUserDetailed = user => dispatch => {
  dispatch({ type: FETCH_DETAILS_START });
  console.log(user);
  axios
    .get(`${apiDomain}/api/app/githubusers/detailed`)
    .then(res => console.log(res))
    .catch(err => console.log(err.response));
};

//DELETE USER CARD

export const DELETE_USER = "DELETE_USER";

export const deleteUser = id => {
  return {
    type: DELETE_USER,
    payload: id
  };
};

//SAVED CODE SNIPPETS

//console.log(res.data.items[0])
//dispatch({ type: FETCH_USER_SUCCESS, payload: res.data.items[0]})

//{dispatch({ type: FETCH_USER_SUCCESS, payload: res.data }})
//{dispatch({ type: FETCH_USER_FAIL, payload: err.response });}

// const users = await axios.get(
//   `https://api.github.com/search/users?q=${username}`
// );
// const usersCompressed = users.data.items.map(
//   user => (user = { login: user.login, html_url: user.html_url })
// );

// const users = await axios.get(`https://api.github.com/search/users?q=${user}`);
// const usersCompressed = users.data.items.map(user => (user = user.login));
