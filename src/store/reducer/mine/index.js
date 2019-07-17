import mineState from "../../state/mine"
export default  (state=mineState,{type,actions})=>{
    state=JSON.parse(JSON.stringify(state));
    return state
}
