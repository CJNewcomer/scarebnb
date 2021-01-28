import { fetch } from './csrf';

const SET_USERHAUNTINGS = 'userHauntings/SET_USERHAUNTINGS';

export const setUserHauntings = (payload) => ({
    type: SET_USERHAUNTINGS,
    payload,
});

export const getUserHauntings = () => async (dispatch) => {
    console.log('Booking Thunk running')
    const res = await fetch(`/api/userhauntings`);
    if (res.ok) {
        dispatch(setUserHauntings(res.data.userHaunting))
        return res;
    }
}

const initialState = {};

const userHauntingsReducer = (state = initialState, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case SET_USERHAUNTINGS:
            newState[action.payload] = action.payload;
            return newState;
        default:
            return state;
    }
}

export default userHauntingsReducer;