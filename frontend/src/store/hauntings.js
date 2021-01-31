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
    // console.log('Thunk running')
    const res = await fetch(`/api/hauntings/${id}`);
    if (res.ok) {
        dispatch(setHauntingsProfile(res.data.haunting))
        return res;
    }
}

// export const grabHauntings = (query) => async (dispatch) => {
//     const response = await fetch(`/api/hauntings/${query}`, 
//     {
//         method: 'POST',
//         body: JSON.stringify({ response.data.hauntings }),
//     });
//     dispatch(getHauntingsProfile());
// };

export const getMultipleHauntings = () => async (dispatch) => {
    console.log('Thunk running')
    const res = await fetch(`/api/hauntings`);
    if (res.ok) {
        dispatch(displayMultipleHauntings(res.data.hauntings));
        return res;
    }
}



// hold everything that you want to display on the page at the time
// multiple hauntings - store multiple in slice of state
// onLoad - dispatch Thunk - grabs multiple hauntings
// update hautnings slice of state to add multiple

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