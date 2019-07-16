import {combineReducers} from "redux";
import homeInit from "./home";
import userInit from "./login";
export default combineReducers({
    homeInit,
    userInit
})