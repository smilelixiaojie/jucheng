import tourState from "../../state/tour";
export default (state = tourState, { type, actions }) => {
    state = JSON.parse(JSON.stringify(state));
    if (type === "TOUR_LIST_AD") {
    state.adlist = actions.adlist;
    }
    return state;
}