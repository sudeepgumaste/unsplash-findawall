import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import imagesReducer from '../reducers/imagesReducer';
import appReducer from '../reducers/appReducer';

export default () => {
  const store = createStore(
    combineReducers({
        imagesReducer,
        appReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};