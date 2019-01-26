import initialState from './initialState';
import rootReducer from '../Reducer/rootReducer';
import { compose, createStore, applyMiddleware } from "redux";

const store = createStore(
    rootReducer,
    initialState
);

export default store