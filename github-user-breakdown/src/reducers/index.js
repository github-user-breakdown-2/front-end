import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  DELETE_USER,
  FETCH_SUMMARY_START,
  FETCH_SUMMARY_SUCCESS,
  FETCH_SUMMARY_FAIL,
  FETCH_DETAILS_START,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAIL
} from "../actions";

export const initialState = {
  users: [],
  userSummary: [],
  userDetailed: [],
  fetching: false,
  registering: false,
  registerSuccess: false,
  loggingIn: false,
  token: localStorage.getItem("token"),
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        error: null,
        registering: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: null,
        token: action.payload,
        registering: false,
        registerSuccess: true
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload,
        registering: false
      };
    case LOGIN_START:
      return {
        ...state,
        error: null,
        loggingIn: true,
        registerSuccess: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case FETCH_USER_START:
      return {
        ...state,
        error: null,
        fetching: true
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        error: null,
        fetching: false,
        users: [...state.users, action.payload]
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
      case FETCH_SUMMARY_START:
      return {
        ...state,
        userSummary: [],
        fetching: true,
        error: null
      };
      case FETCH_SUMMARY_SUCCESS:
      return {
        ...state,
        fetching: false,
        userSummary: action.payload,
        error: null
      };
      case FETCH_SUMMARY_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
      case FETCH_DETAILS_START:
      return {
        ...state,
        fetching: true,
        error: null
      };
      case FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        fetching: false,
        userDetailed: action.payload,
        error: null
      };
      case FETCH_DETAILS_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case DELETE_USER:
      return {
        ...state,
        //users: state.users.filter(user => user.id !== action.payload)
        //users: state.users.map(array => array.filter(user => user.id !== action.payload))
        users: state.users.filter(user => user.user !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;

