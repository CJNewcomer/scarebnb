import { fetch } from './csrf';

const CREATE_USERHAUNTINGS = 'userHauntings/CREATE_USERHAUNTINGS';
const SET_USERHAUNTINGS = 'userHauntings/SET_USERHAUNTINGS';

export const createUserHauntings = (haunting) => ({
    type: CREATE_USERHAUNTINGS,
    payload: haunting,
});

export const setUserHauntings = (hauntings) => ({
    type: SET_USERHAUNTINGS,
    hauntings,
});

export const userHauntingCreate = (haunting) => async (dispatch) => {
    const {sessionUser, bookingStartDate, bookingEndDate} = haunting;
    const today = new Date();
    today.setTime(0,0)
    const response = await fetch('/api/userhauntings', {
        method: 'POST',
        body: JSON.stringify({
            userId: sessionUser.id,
            bookingStartDate,
            bookingEndDate, 
            active: (((bookingStartDate <= today) && (bookingEndDate >= today)) || (!bookingStartDate && !bookingEndDate))             
        }),
    });
    dispatch(createUserHauntings(response.data.haunting));
    return response;
}

export const getUserHauntings = (id) => async (dispatch) => {
    const res = await fetch(`/api/userhauntings/${id}`);
    if (res.ok) {
        dispatch(setUserHauntings(res.data.userHaunting))
        return res;
    }
}

const initialState = {};

const userHauntingsReducer = (state = initialState, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case CREATE_USERHAUNTINGS:
            newState[action.payload.id] = action.payload;
            return newState;
        case SET_USERHAUNTINGS:
            newState[action.payload] = action.payload;
            return newState;
        default:
            return state;
    }
}

export default userHauntingsReducer;