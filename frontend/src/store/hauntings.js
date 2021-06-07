import { fetch } from './csrf';

const SET_HAUNTINGS_PROFILE = 'hauntings/SET_HAUNTINGS_PROFILE';
const DISPLAY_MULTIPLE_HAUNTINGS = 'hauntings/DISPLAY_MULTIPLE_HAUNTINGS';

export const setHauntingsProfile = (payload) => ({
    type: SET_HAUNTINGS_PROFILE,
    payload,
});

export const displayMultipleHauntings = (payload) => ({
    type: DISPLAY_MULTIPLE_HAUNTINGS,
    payload,
});

export const getHauntingsProfile = (id) => async (dispatch) => {
    const res = await fetch(`/api/hauntings/${id}`);
    if (res.ok) {
        dispatch(setHauntingsProfile(res.data.haunting))
        return res;
    }
}

export const getMultipleHauntings = () => async (dispatch) => {
    const res = await fetch(`/api/hauntings`);
    if (res.ok) {
        dispatch(displayMultipleHauntings(res.data.hauntings));
        return res;
    }
}

const initialState = {};

const hauntingsReducer = (state = initialState, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case SET_HAUNTINGS_PROFILE:
            newState[action.payload.id] = action.payload;
            return newState;
        case DISPLAY_MULTIPLE_HAUNTINGS:
            for (let haunting of action.payload) {
                newState[haunting.id] = haunting;
            }
            return newState;
        default:
            return state;
    }
}

export default hauntingsReducer;