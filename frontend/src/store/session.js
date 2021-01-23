import { fetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser'


const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    };
};

const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};


// Call API to login, then set session user from response
// Thunk action for POST/api/session
export const login = (user) => async (dispatch) => {
    const {credential, password } = user;
    // Use custom fetch function
    const response = await fetch('/api/session', {
        method: 'POST',
        // Route expects req.body to have key of credential-username/email & key of password
        body: JSON.stringify({
            credential,
            password,
        }),
    });
    // After response from AJAX call, dispatch action for setting session user to response's data
    dispatch(setUser(response.data.user));
    return response;
};

export const restore = () => async (dispatch) => {
    const response = await fetch('/api/session');
    dispatch(setUser(response.data.user));
    return response;
};

export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  dispatch(setUser(response.data.user));
  return response;
};

// By default, no session user in session slice of state
const initialState = {user: null};
// Reducer will hold current session user's information 
const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        // POJO Action Creator - set session user in session slice of state to AC's input parameter
        case SET_USER:
            newState = Object.assign({}, state);
            // if current session user, {user: {id, email, username, createdAt, updatedAt}}
            newState.user = action.payload;
            return newState;
        // POJO Action Creator - will remove session user
        case REMOVE_USER:
            newState = Object.assign({}, state);
            // if no session user, session slice of state {user:null}
            newState.user = null;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;