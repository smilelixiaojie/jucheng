export default {
    addUser(actions){
        return (dispatch)=>{
            dispatch({
                type:"ADD_USER",
                actions
            })
        }
    }
}