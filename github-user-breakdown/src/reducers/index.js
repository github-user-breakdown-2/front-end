// Imported action creators
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,

    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAIL,

} from '../actions'


// Initial State
const initialState = {
    users: ['test'],
    registering: false,
    loggingIn: false,
    fetching: false,
    error: null,
    token: localStorage.getItem('token'),
}


const reducer = (state = initialState, action) => {
    switch(action.type) {

        // Register
        case REGISTER_START:
        return {
            ...state,
            error: null,
            registering: true
        }
        case REGISTER_SUCCESS:
        return {
            ...state,
            registering: false,
            token: action.payload
        }
        case REGISTER_FAIL:
        return {
            ...state,
            registering: false,
            error: action.payload
        }

        // Login
        case LOGIN_START:
        return {
            ...state,
            error: null,
            loggingIn: true
        }
        case LOGIN_SUCCESS:
        return {
            ...state,
            loggingIn: false,
            token: action.payload
        }
        case LOGIN_FAIL:
        return {
            ...state,
            loggingIn: false,
            error: action.payload
        }

        // Fetch data
        case FETCH_USER_START:
        return {
            ...state,
            error: null,
            fetching: true
        }
        case FETCH_USER_SUCCESS:
        return {
            ...state,
            error: null,
            fetching: false,
            users: action.payload
        }
        case FETCH_USER_FAIL:
        return {
            ...state,
            fetching: false,
            error: action.payload
        }

        // Default
        default:
            return state;
    }
};

export default reducer;