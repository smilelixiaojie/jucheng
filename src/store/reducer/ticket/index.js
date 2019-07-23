
import ticketInit from "../../state/ticket"
export default function(state=ticketInit,{type,payload}){
    state=JSON.parse(JSON.stringify(state))
    if(type==="GET_TICKETINFO"){
        state.ticketList = payload.ticketList
    }
    if(type==="GET_TOURCITY"){
        state.tourCityList = payload.tourCityList
    }
    if(type==="GET_SHOWLIST"){
        state.showList = payload.showList
    }
    return state
    
}