import {combineReducers} from "redux";
import homeInit from "./home";
import show from "./show";
import userInit from "./login";
export default combineReducers({
    homeInit,
    show,
    userInit
})