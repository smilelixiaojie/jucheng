import searchState from "../../state/search";
export default (state=searchState,{type,actions})=>{
    state = JSON.parse(JSON.stringify(state));
    if(type ==="UP_HOTWORDLIST"){
        state.hotWordList = actions.hotWordList;
    }
    return state
}