import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import taskReducer from "./reducers/task";

const store = createStore(taskReducer, applyMiddleware(thunk));

export default store;
