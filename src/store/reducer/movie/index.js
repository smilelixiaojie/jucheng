import movieInit from "../../state/movie"
console.log(movieInit)
export default function(state=movieInit,{type,payload}){
    state=JSON.parse(JSON.stringify(state))
    if(type==="GET_MOVIELIST"){
        state.movieList = payload.movieList
        console.log(state)
    }
    return state
}