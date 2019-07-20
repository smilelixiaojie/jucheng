import axios from "axios";
import Swiper from 'swiper/dist/js/swiper.js';
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
                    
                    const operationList = data.data.operation_list;
                   
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
<<<<<<< HEAD
=======
                   
>>>>>>> 5927e751ec9014d94f0c6423a7ca72bc9f9bbaeb
                })
        }
    },
    getHotShowList(){
        return (dispatch)=>{
            axios.get("https://m.juooo.com/home/getHotsRecommendList?city_id=1&rows=50&version=6.0.1&referer=2&timestamp=1563263185")
                .then(({data})=>{
                    const hotShowList = data.data.hots_show_list;
                    dispatch({
                        type:"UP_HOTSHOWLIST",
                        actions: {
                            hotShowList,
                        }
                    })
                })
                
        }
    },
    getFloorShow(){
        return (dispatch)=>{
            axios.get("https://m.juooo.com/home/getFloorShow?city_abb=SZ&city_id=1&version=6.0.1&referer=2&timestamp=1563266607")
                .then(({data})=>{
                    const floorShowList = data.data;
<<<<<<< HEAD
=======
                    // console.log(floorShowList)
>>>>>>> 5927e751ec9014d94f0c6423a7ca72bc9f9bbaeb
                    dispatch({
                        type:"UP_FLOORSHOW",
                        actions: {
                            floorShowList,
                        }
                    })
                    new Swiper('.drag-container', {
                        pagination: '.drag-pagination',
                        slidesPerView: 4,
                        centeredSlides: false,
                        paginationClickable: true,
                    });
                })
        }
    },
    getRecommendShow() {
        return (dispatch) => {
            axios.get("https://m.juooo.com/home/getRecommendShow?cityAdd=SZ&page=1&version=6.0.1&referer=2&timestamp=1563334465")
                .then(({ data }) => {
                    const recommendShow = data.data.recommend_show_list;
                    dispatch({
                        type: "UP_RECOMMEND",
                        actions: {
                            recommendShow,
                        }
                    })
                })
        }
<<<<<<< HEAD
    }
=======
    },
    getTourPage(){
        return((dispatch)=>{
            axios.get("https://api.juooo.com/home/index/getClassifyHome?city_id=1&abbreviation=SZ&version=6.0.1&referer=2")
            .then(({data})=>{
                    const adlist=data.data.ad_list.advert1[0].url;
                    console.log(adlist)
                dispatch({
                    type:"TOUR_LIST",
                    actions:{
                        adlist
                    }
                })
               
            })
        }

        )
    }
   
>>>>>>> 5927e751ec9014d94f0c6423a7ca72bc9f9bbaeb
}