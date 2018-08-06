import { combineReducers } from 'redux';
import articles from './reducers/articles';
import authUser from './reducers/authUser';
import common from './reducers/common';
import { routerReducer } from 'react-router-redux';

// combineReducers function from redux used to combine our reducers into single reducer function
// With this combination of reducers into one reducer function, it will be used as an argument to 
// create our store using redux’s createStore function.
export default combineReducers({
  articles,
  authUser,
  common,
  router: routerReducer
});