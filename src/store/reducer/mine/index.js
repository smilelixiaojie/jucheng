import mineState from "../../state/mine"
export default  (state=mineState,{type,actions})=>{
    state=JSON.parse(JSON.stringify(state));
    if (type === "LOGIN_SUCCESS") {
        state.firstdata.push(actions.firstdata);
    }
    if (type === "LOGIN_SUCCESS_ICON") {
        state.icondata.push(actions.icondata);
    }
    return state
}
