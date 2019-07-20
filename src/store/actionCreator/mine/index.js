// import axios from "axios"
import data from "../../../assets/json/data.json"
import data2 from "../../../assets/json/data2.json"
export default{
    getMenuItem(){
        return (dispatch)=>{ 
           const firstdata=data;
           const icondata=data2;
            dispatch({
                type:"LOGIN_SUCCESS",
                actions: {
                    firstdata
                }
            }) 
            dispatch({
                type:"LOGIN_SUCCESS_ICON",
                actions: {    
                    icondata
                }
            })    
            // axios.get("/ele/assets/json/data.json")
            // .then(data=>{
            //     console.log(data)
            // })
        }
    }
}