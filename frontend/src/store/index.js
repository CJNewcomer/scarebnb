import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//import reducer from session into file w/root reducer
import sessionReducer from './session';
import hauntingsReducer from './hauntings';
import userHauntingsReducer from './userHauntings';

const rootReducer = combineReducers({
  // Set key of session to session reducer
  session: sessionReducer,
  hauntings: hauntingsReducer,
  userHauntings: userHauntingsReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
}



export default configureStore;