import {combineReducers} from "redux";
import homeInit from "./home";
import show from "./show";
import userInit from "./login";
import mineInit from "./mine";
export default combineReducers({
    homeInit,
    userInit,
    mineInit,
    show
})