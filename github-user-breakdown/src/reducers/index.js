import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    
    FETCH_SUMMARY_START,
    FETCH_SUMMARY_SUCCESS,
    FETCH_SUMMARY_FAIL,

    FETCH_DETAILED_START,
    FETCH_DETAILED_SUCCESS,
    FETCH_DETAILED_FAIL,

    DELETE_USER,
  } from "../actions";
  
  export const initialState = {
    users: [],
    userDetailed: [],
    userSummary: [],
    fetching: false,
    registering: false,
    loggingIn: false,
    token: localStorage.getItem('token'),
    error: null
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      
      // REGISTER 

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
          registering: false
        };
      case REGISTER_FAIL:
        return {
          ...state,
          error: action.payload,
          registering: false
        };


      // LOGIN

      case LOGIN_START:
        return {
          ...state,
          error: null,
          loggingIn: true
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


      // FETCH SUMMARY DATA

      case FETCH_SUMMARY_START:
        return {
          ...state,
          error: null,
          fetching: true
        }
      case FETCH_SUMMARY_SUCCESS:
        return {
          ...state,
          error: null,
          fetching: false,
          users: [...state.users, action.payload]
        }
      case FETCH_SUMMARY_FAIL:
        return {
          ...state,
          fetching: false,
          error: action.payload
        }


      // DELETE

      case DELETE_USER:
        return {
          ...state,
          users: state.users.filter(user => user.user !== action.payload)
        };


      // FETCH DETAILED DATA  

      case FETCH_DETAILED_START:
        return {
          ...state,
          error: null,
          fetching: true
        }
      case FETCH_DETAILED_SUCCESS:
        return {
          ...state,
          error: null,
          fetching: false,
          userDetailed: action.payload
        }
      case FETCH_DETAILED_FAIL:
        return {
          ...state,
          fetching: false,
          error: action.payload
        }

      default:
        return state;
    }
  };

  
  
  export default reducer;