import showInit from "../../state/show";
export default function(state=showInit,{type,payload}){
    // console.log(payload.categorylist)
    state=JSON.parse(JSON.stringify(state));
    if(type === "UP_TABDRAG"){
        state.categorylist = payload.categorylist;
    }
    if(type === "UP_SHOWLIST"){
        state.showlist = payload.showlist;
    }
    return state;
}