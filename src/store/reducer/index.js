import {combineReducers} from "redux";
import homeInit from "./home";
import userInit from "./login";
import searchInit from "./search";
export default combineReducers({
    homeInit,
    userInit,
    searchInit
})