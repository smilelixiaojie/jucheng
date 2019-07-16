import homeState from "../../state/home";
export default (state = homeState, { type, actions }) => {
    state = JSON.parse(JSON.stringify(state));
    if (type === "UP_SLIDELIST") {
        state.slideList = actions.slideList;
    }
    if (type === "UP_CLASSIFYLIST") {
        state.classifyList = actions.classifyList;
    }
    if(type === "UP_OPERATION"){
        state.operationList = actions.operationList;
    }
    return state;
}