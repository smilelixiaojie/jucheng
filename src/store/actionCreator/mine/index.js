import axios from "axios"
export default{
    getMenuItem(){
        return (dispatch)=>{
            axios.get("/ele/assets/json/data.json")
            .then(data=>{
                console.log(data)
            })
        }
    }
}