import axios from "axios";
export default {
    getSlideList() {
        return (dispatch) => {
            axios.get("https://m.juooo.com/home/getSildeList?abbreviation=&limit=&version=6.0.1&referer=2")
                .then(({ data }) => {
                    // console.log(data.data.silde_list);
                    const slideList = data.data.silde_list;
                    dispatch({
                        type: "UP_SLIDELIST",
                        actions: {
                            slideList
                        }
                    })
                })
        }
    },
    getClassifyList() {
        return (dispatch) => {
            axios.get("https://m.juooo.com/home/getClassifyItem?city_id=0&operation_limit=5&version=6.0.1&referer=2")
                .then(({ data }) => {
                    const classifyList = data.data.classify_list;
                    const operationList = data.data.operation_list
                    dispatch({
                        type: "UP_CLASSIFYLIST",
                        actions: {
                            classifyList,
                        }
                    })
                    dispatch({
                        type:"UP_OPERATION",
                        actions:{
                            operationList
                        }
                    })
                })
        }
    }
}