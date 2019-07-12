import showList from "../state/showList";
export default (state=showList,action)=>{
    state = JSON.parse(JSON.stringify(state));
    return state
}