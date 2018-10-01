import { combineReducers } from "redux";
import links from "./linksReducer";
import nodes from "./nodesReducer";

const rootReducer = combineReducers({links, nodes});

export default rootReducer;