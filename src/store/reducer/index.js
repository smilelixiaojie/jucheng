import {combineReducers} from "redux";
import homeInit from "./home";
import movieInit from "./movie"
import ticketInit from "./ticket"
import show from "./show";
import userInit from "./login";
import mineInit from "./mine";
export default combineReducers({
    homeInit,
    userInit,
    mineInit,
    show,
    movieInit,
    ticketInit
})