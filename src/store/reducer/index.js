import {combineReducers} from "redux";
import homeInit from "./home";
import movieInit from "./movie"
import ticketInit from "./ticket"
export default combineReducers({
    homeInit,
    movieInit,
    ticketInit
})