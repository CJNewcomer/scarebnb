import { fetch } from './csrf';

const CREATE_USERHAUNTINGS = 'userHauntings/createUserHauntings';
const SET_USERHAUNTINGS = 'userHauntings/setUserHauntings';

export const createUserHauntings = (userHaunting) => {
    return {
        type: CREATE_USERHAUNTINGS,
        payload: userHaunting,
    }
}

export const setUserHauntings = (hauntings) => ({
    type: SET_USERHAUNTINGS,
    hauntings,
});

export const getUserHauntings = () => async (dispatch) => {
    const res = await fetch(`/api/userhauntings`);
    if (res.ok) {
        dispatch(setUserHauntings(res.data.userHaunting))
        return res;
    }
}

export const userHauntingCreate = (userHaunting) => async (dispatch) => {
    const { sessionUser, bookingStartDate, bookingEndDate } = userHaunting;
    const today = new Date()
    today.setTime(0,0)
    const response = await fetch('/api/userHauntings', {
        method: 'POST',
        body: JSON.stringify({
            ownerId: sessionUser.id,
            bookingStartDate,
            bookingEndDate,
            active: (((bookingStartDate <= today) && (bookingEndDate >= today)) || (!bookingStartDate && !bookingEndDate))
        }),
    });
    dispatch(createUserHauntings(response.data.userHaunting))
    return response
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