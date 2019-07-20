import  React from "react";
import Swiper from 'swiper/dist/js/swiper.js'

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
        this.props.getShowList(this.props.match.params.a,this.props.match.params.b);      
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
                <div  className="swiper-slide" 
                            onClick={
                                this.props.getShowList.bind(this,this.props.match.params.a,0)
                                
                            }
                            >全部</div>
               {
                   this.props.categorylist.map((v,i)=>{
        
                        return (
                            <div key={i} style={{color:this.props.match.params.b == v.category_id?"red":""}} className="swiper-slide" 
                            onClick={
                                this.props.getShowList.bind(this,this.props.match.params.a,v.category_id)
                                
                            }
                            >{v.name}</div>
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
                              <div className="lxjci">
                                    <h4>{v.show_time_top}</h4>
                                    <h3>{v.name}</h3>
                                    <p>{v.venue_name}</p>
                                    <div className="lxjprice">
                                    <span className="lxjpr">￥{v.min_price}</span>
                                    <span className="lxjq">起</span>
                                    </div>
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
        getShowList(a,b){
           
                    
            axios.get("https://m.juooo.com/Search/getShowList?category="+b+"&city_id="+a+"&page=1&keywords=&version=6.0.1&referer=2&timestamp=1563280296")
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
