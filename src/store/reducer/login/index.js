import userState from "../../state/login";
export default (state = userState, { type, actions }) => {
    state = JSON.parse(JSON.stringify(state));
    if (type === "ADD_USER") {
        if(state.userList.includes(actions)){
            localStorage.userName=actions.userName
        }else{
            state.userList = state.userList.concat(actions.userList);
            localStorage.userName=actions.userName
        }      
    }
    return state;
}