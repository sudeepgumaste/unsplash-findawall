import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import imagesReducer from '../reducers/imagesReducer';

export default () => {
  const store = createStore(
    combineReducers({
        imagesReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};