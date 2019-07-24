import  React from "react";
import Swiper from 'swiper/dist/js/swiper.js';
import {withRouter} from "react-router-dom";
import axios from "axios";
import {
    connect
}from "react-redux";
import "../assets/style/show.css"
class  Show  extends React.Component{
constructor(props){
    super(props);
    this.state={
        b:this.props.match.params.b
    }
}
    componentWillMount(){
        this.props.getShowCategory();
        this.props.getShowList(this.props.match.params.a,this.props.match.params.b);      
    }
        render(){
            return(
                <div>
                <div className="lxjtitle">
                <img className="lxjleft" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MDY3MDgxRjU2ODAxMUU5QTZCRkE3NDU1NDVGRERENSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDY3MDgyMDU2ODAxMUU5QTZCRkE3NDU1NDVGRERENSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwNjcwODFENTY4MDExRTlBNkJGQTc0NTU0NUZEREQ1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYwNjcwODFFNTY4MDExRTlBNkJGQTc0NTU0NUZEREQ1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sosNbgAAAglJREFUeNrsmDlLA2EQhhOzEiUeCII/IPkNIih4VIooCAbEgIWiAQ1WKh5YiGgUg5VEY7AzKEIqsbCwEBSEWFrmF4iFeBuP9R2YhWXJoSy7O4UDD+wWCw/zfcPMjltVVZfkKHMJD7ff7zfz/SoIg6tsNttthaBi4tsoGAc1oMmqDCom5CZANXgCKUmCJBcBVeAVHOB4J6UUyZxBLg25MSlVPA1mdXLHYMjqKlb+ILfABfEMTsAAUCUIktwiF8Q7OLVL7jdHHDHInYF+u+RKZZAu/wrLvYFz0GunXLEMjoI1vnOaHHWKL7tbnVJALsZyH+DSKbl8GRw2yGVAp1NyxgxSZW6yXA5cg3bwKWHcCoI4qOVsZVguJ2EepEkkAepYjjLXIUFOE9zVyd1IktMEG/j5DjSDF6kj/7fTBVFI8Jaf67mVeaQJUr+9B+WgkYcBjyRBamMz4IElW3ic8ki6g0kwxZn0glYpkvoiSXImSbICtEmQNPZikpzn4/ayZJr+nyVtFrbBMnhkSRoWjpySLDQPxgySXeDQCcliI/8GS9Kd9IEeJyRL/ZOQ5DpvDypZcl+SoItH/5hOsg/sSRKkWAJbOskgj2iO/tXlW3tQaButQX4PS1l9aJJxziStQEKBQCAhSVCT3OEViI8lo5IEtXVISic5IuEOGiPM65AQuLBK0P2/5TcZPwIMAAVtfNEiP57MAAAAAElFTkSuQmCC"
                 onClick={()=>{this.props.history.go(-1)}}
                ></img>
                  
                   <p className="showbody">演出</p>
                   <i className="iconfont icon-more" ></i>
                </div>
                <div id="lxjwith">
                <div className="swiper-container">
                <div className="swiper-wrapper">
                <div  style={{color:this.state.b === 0?"#ff6743":"",borderBottom:this.state.b === 0? "1px solid  #ff6743":""}}  className="swiper-slide  lxjswiper-slide" 
                            onClick={
                                ()=>{
                                    this.props.getShowList.bind(this,this.props.match.params.a,0)();
                                    this.state.b=0;
                                    // this.setState({
                                    //     b:0    
                                    // })
                                }
                                
                                
                            }
                            >全部</div>
               {
                   this.props.categorylist.map((v,i)=>{
        
                        return (
                            <div key={i} style={{color:this.state.b === v.category_id?"red":"",borderBottom:this.state.b === v.category_id? "1px solid  #ff6743":""}} 
                            className="swiper-slide lxjswiper-slide" 
                            onClick={
                                ()=>{
                                    this.props.getShowList.bind(this,this.props.match.params.a,v.category_id)();
                                    this.state.b = v.category_id;
                                    // this.setState({
                                    //     b:v.category_id
                                    // },()=>{
                                    //     console.log(12);
                                       
                                    // })
                                }
                              
                                
                            }
                            >{v.name}</div>
                        )
                   })
               }
                </div>
       
               
            </div>
            </div>
            <div className="ding">
            {
                    this.props.showlist.map((v,i)=>{
                        return(
                            <div key={i} className="lxjbig">
                               <img src={v.pic}></img>
                              <div className="lxjci">
                                    <h3>{v.show_time_top}</h3>
                                    <h2>{v.name}</h2>
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
                console.log(categorylist)
               
               
                
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
