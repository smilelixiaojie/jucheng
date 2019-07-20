import {combineReducers} from "redux";
import homeInit from "./home";
import movieInit from "./movie"
import ticketInit from "./ticket"
import userInit from "./login";
import searchInit from "./search";
import show from "./show";
import tourInit from "./tour";
import mineInit from "./mine";
import plusInit from "./plus";
export default combineReducers({
    homeInit,
    userInit,
    searchInit,
    show,
    tourInit,
    mineInit,
    show,
    movieInit,
    ticketInit,
    plusInit
   
})