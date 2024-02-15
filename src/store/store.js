import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import userReducer from "./users/userReducer"

const store = createStore(
  combineReducers({
    users: userReducer
  }),
  applyMiddleware(thunk));
export default store;
