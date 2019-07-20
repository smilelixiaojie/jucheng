import  React from "react";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import {withRouter} from "react-router-dom"
import axios from "axios";
import {
    connect
}from "react-redux";
import "../assets/style/show.css"
class  Show  extends React.Component{
constructor(props){
    super(props)
}
    componentWillMount(){
        this.props.getShowCategory();
        this.props.getShowList();
       
    }
        render(){
            return(
                <div>
                <div className="lxjtitle">
                   <button onClick={()=>{this.props.history.go(-1)}}>返回</button>
                   <p>演出</p>
                </div>
                <div className="swiper-container">
                <div className="swiper-wrapper">
               {
                   this.props.categorylist.map((v,i)=>{
                        return (
                            <div key={i}  className="swiper-slide">{v.name}</div>
                        )
                   })
               }
                </div>
       
               
            </div>

            <div>
            {
                    this.props.showlist.map((v,i)=>{
                        return(
                            <div key={i} className="lxjbig">
                               <img src={v.pic}></img>
                              <div>
                                    <h3>{v.show_time_top}</h3>
                                    <h2>{v.name}</h2>
                                    <p>{v.venue_name}</p>
                                    <span>￥{v.min_price}</span><span>起</span>
                              </div>
                            </div>

                        )
                    })
                }
            </div>
            </div>
            )
        }
    componentDidMount(){
        console.log(this.props)
        
    }
   
    
}
function mapStateToProps(state,props){
    return{
      categorylist:state.show.categorylist,
      showlist:state.show.showlist

    }
}
function mapDispatchToProps(dispatch) {
    return{
        getShowCategory() {
            
            axios.get("https://m.juooo.com/Search/getShowCategory?version=6.0.1&referer=2&timestamp=1563267632")
            .then(({data})=>{
                const categorylist=data.data.show_category_list;
                console.log(this)
               
               
                
                dispatch({
                    type:"UP_TABDRAG",
                    payload:{
                        categorylist
                    }
                })

                new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    slidesPerView: 3,
                    paginationClickable: true,
                    //spaceBetween: 20,
                    
                });
            })
        },
        getShowList(){
           
                    
            axios.get("https://m.juooo.com/Search/getShowList?category="+this.match.params.b+"&city_id="+this.match.params.a+"&page=1&keywords=&version=6.0.1&referer=2&timestamp=1563280296")
            .then(data=>{
                const showlist = data.data.data.list
                console.log(data.data)
                dispatch({
                    type:"UP_SHOWLIST",
                    payload:{
                        showlist
                    }
                })
            })
        }
       
    } 
    
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Show))