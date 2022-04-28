import { combineReducers } from "redux";
import posts from "./posts";
import authenticate from "./authenticate";

export const reducers = combineReducers({ posts, authenticate });
