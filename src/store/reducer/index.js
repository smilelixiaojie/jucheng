import {combineReducers} from "redux";
import homeInit from "./home";
import userInit from "./login";
import mineInit from "./mine";
export default combineReducers({
    homeInit,
    userInit,
    mineInit
})