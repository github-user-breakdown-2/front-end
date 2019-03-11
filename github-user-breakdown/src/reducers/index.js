import { LOGIN_START } from "../actions";


export const initialState = {
  data: 'ITS WORKING',
  fetching: false,
  loggingIn: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
    return {
      ...state,
      loggingIn: true
    }
    default:
      return state;
  }
};

export default reducer;
