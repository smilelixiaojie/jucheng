import axios from "axios";
export  default  {
     getTourPage(ad){
        return((dispatch)=>{
            axios.get(ad)
            .then(data=>{
                const adlist = data.data;
                dispatch({
                    type:"TOUR_LIST_AD",
                    actions:{
                        adlist
                    }
                })
                console.log(data.data)
            })
        }

        )
    }
}  
