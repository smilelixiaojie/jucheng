import homeState from "../../state/home";
export default (state = homeState, { type, actions }) => {
    state = JSON.parse(JSON.stringify(state));
    if (type === "UP_SLIDELIST") {
        state.slideList = state.slideList.concat(actions.slideList);
    }
    if (type === "UP_CLASSIFYLIST") {
        state.classifyList = state.classifyList.concat(actions.classifyList);
    }
    if(type === "UP_OPERATION"){
        state.operationList = state.operationList.concat(actions.operationList);
    }
    return state;
}