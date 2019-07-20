import {combineReducers} from "redux";
import homeInit from "./home";
import show from "./show";
import userInit from "./login";
import tourInit from "./tour";
import mineInit from "./mine";
export default combineReducers({
    homeInit,
    show,
    userInit,
    tourInit,
    mineInit,
   
})