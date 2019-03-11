// Imported action creators
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,

    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

} from '../actions'


// Initial State
const initialState = {
    data: ['test'],
    registering: false,
    loggingIn: false,
    fetching: false,
    error: null,
    token: localStorage.getItem('token'),
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

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


        default:
            return state;
    }
};

export default reducer;