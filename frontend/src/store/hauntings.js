import { fetch } from './csrf';

const SET_HAUNTINGS_PROFILE = 'hauntings/SET_HAUNTINGS_PROFILE';

export const setHauntingsProfile = (payload) => ({
    type: SET_HAUNTINGS_PROFILE,
    payload,
});

export const getHauntingsProfile = (id) => async (dispatch) => {
    console.log('Thunk running')
    const res = await fetch(`/api/hauntings/${id}`);
    if (res.ok) {
        dispatch(setHauntingsProfile(res.data.haunting))
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
        default:
            return state;
    }
}

export default hauntingsReducer;