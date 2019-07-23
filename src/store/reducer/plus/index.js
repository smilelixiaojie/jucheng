import plusInt from "../../state/plus";
export default function(state=plusInt,{type,payload}){
    // console.log(payload.categorylist)
    state=JSON.parse(JSON.stringify(state));
     if(type==="BASIC_INFO"){
        state.plusCardList = payload.plusCardList;
     }
     if(type==="VIP_INFO"){
        state.plusVipList = payload.plusVipList;
     }
    return state;
}