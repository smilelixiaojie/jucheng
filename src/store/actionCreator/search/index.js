import axios from "axios";
export default{
    getHotWord(){
        return (dispatch)=>{
            axios.get("https://m.juooo.com/Search/getHotWord?version=6.0.1&referer=2")
            .then(({data})=>{
                const hotWordList = data.data;
                dispatch({
                    type:"UP_HOTWORDLIST",
                    actions: {
                        hotWordList
                    }
                })
            })
        }
    }
}