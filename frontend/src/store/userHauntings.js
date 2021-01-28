import { fetch } from './csrf';

const SET_USERHAUNTINGS = 'userHauntings/SET_USERHAUNTINGS';

export const setUserHauntings = (payload) => ({
    type: SET_USERHAUNTINGS,
    payload,
});

export const getUserHauntings = (id) => async (dispatch) => {
    console.log('Booking Thunk running')
    const res = await fetch(`/api/userhauntings/hauntings/${id}`);
    if (res.ok) {
        dispatch(setUserHauntings(res.data.userHaunting))
        return res;
    }
}

const initialState = {
    1: {
        id: 1,
        userId: 2,
        hauntingId: 7,
        statusId: 1,
        bookingStartDate: '2021-02-01',
        bookingEndDate: '2021-02-04',
        rating: 3,
    }
}

const userHauntingsReducer = (state = initialState, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case SET_USERHAUNTINGS:
            newState[action.payload.id] = action.payload;
            return newState;
        default:
            return state;
    }
}

export default userHauntingsReducer;