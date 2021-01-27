import { fetch } from './csrf';

const SET_HAUNTINGS_PROFILE = 'hauntings/SET_HAUNTINGS_PROFILE';

export const setHauntingsProfile = (payload) => ({
    type: SET_HAUNTINGS_PROFILE,
    payload,
});

export const getHauntingsProfile = () => async (dispatch) => {
    const res = await fetch('/api/hauntings');
    if (res.ok) {
        dispatch(setHauntingsProfile(res.data.hauntings))
        return res;
    }
}

const initialState = {};

const hauntingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HAUNTINGS_PROFILE:
            return {...state};
        default:
            return state;
    }
}

export default hauntingsReducer;