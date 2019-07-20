import {combineReducers} from "redux";
import homeInit from "./home";
import userInit from "./login";
import searchInit from "./search";
import show from "./show";
import tourInit from "./tour";
import mineInit from "./mine";
export default combineReducers({
    homeInit,
    userInit,
    searchInit,
    show,
    tourInit,
    mineInit,
   
})