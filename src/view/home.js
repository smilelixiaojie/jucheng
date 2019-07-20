import React, { Component } from "react";
import "../assets/style/home.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import homeAction from "../store/actionCreator/home";
import Swiper from 'swiper/dist/js/swiper.js'

import { withRouter } from "react-router-dom";



class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="header_home">
                    <div className="site">
                        <span>全国</span>
                    </div>
                    <div className="search" onClick={() => {
                        this.props.history.push("./search");
                    }}>
                        <span className="search_span">
                            搜索热门演出
                        </span>
                    </div>
                    <img src="https://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png" alt=""/>
                </div>
                <div className="swiper">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                this.props.slideList.map((v, i) => {
                                    return (
                                        <div className="swiper-slide" key={i}>
                                            <img src={v.touch_image_url} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                <div className="classify_list" >
                    {
                        this.props.classifyList.map((v, i) => {
                            return (
                                <div key={i} className="classify_list_item" onClick={() => {
                                    let arr = v.url.split("?")[1].split("&")
                                    let obj = {};
                                    for (let i of arr) {
                                        obj[i.split("=")[0]] = i.split("=")[1];
                                    }
                                    this.props.history.push("/show/" + obj.cid + "/" + obj.caid);
                                }}>
                                    <img src={v.pic} alt="" />
                                    <span>{v.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="banner">
                   
                    <a href="https://m.juooo.com/tour/tourshowinfo?sid=35564">
                        <img src="https://image.juooo.com//group1/M00/03/7A/rAoKNV0jflaAL5_EAAD3QE0LKFo824.png" 
                        // onClick={
                        
                        // ()=>{
                        //     //let b= JSON.stringify(this.props.adlist).slice(JSON.stringify(this.props.adlist).indexOf("<body>"));
                        //     this.props.history.push({
                        //     pathname:"/tour/tourshowinfo?sid=35564",
                        //     state:{
                        //         b:this.props.adlist
                        //     }
                        // });
                        // }
                    // } 
                    alt="" /></a>
                </div>
                <div className="operation_list">
                    {
                        this.props.operationList.map((v, i) => {
                            return (
                                <div key={i} className="item">
                                    <h3>{v.name}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: v.describe }}></p>
                                    <img src={v.pic} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="hot_show">
                    <h3>热门演出</h3>
                    <div className="hot_show_pic">
                        <div className="drag-container">
                            <div className="swiper-wrapper">
                                {
                                    this.props.hotShowList.map((v, i) => {
                                        return (
                                            <div className="drag-slide" key={i}>
                                                <img src={v.pic} alt="" />
                                                <h3>{v.show_name}</h3>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="drag-container"></div>
                        </div>
                    </div>
                </div>
                <div className="floor_show">
                    {
                        
                        [...this.props.floorShowList].splice(0,3).map((v, i) => {
                            return (
                                <div key={i} className="floor_show_item">
                                    <h3>{v.title}</h3>
                                    {
                                        [...v.list].splice(0, 1).map((v, i) => {
                                            return (
                                                <div className="bg_c" key={i}>
                                                    <div className="left"><img src={v.pic} alt="" /></div>
                                                    <div className="right">
                                                        <p className="bg_data"><strong>{v.date}</strong>{v.week}</p>
                                                        <h2 className="bg_text">{v.schedular_name}</h2>
                                                        <p className="bg-single">{v.city_name} | {v.venue_name}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                    <div className="drag-container">
                                        <div className="swiper-wrapper">
                                            {
                                                [...v.list].splice(1, v.list.length - 1).map((v, i) => {
                                                    return (
                                                        <div className="drag-slide" key={i}>
                                                            <img src={v.pic} alt="" />
                                                            <h3>{v.schedular_name}</h3>
                                                            <p><strong>￥{v.low_price}</strong>起</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="drag-pagination"></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="recommend_show_list">
                    <h3>为你推荐</h3>              
                    {                     
                        this.props.recommendShow.map((v, i) => {
                            return (
                                <div className="recommend_show_list_item" key={i}>
                                    <div className="left"><img src={v.schePic} alt="" /></div>
                                    <div className="right">
                                        <p className="show_data"><strong>{v.show_time}</strong>{v.week}</p>
                                        <h2 className="title_text">{v.show_name}</h2>
                                        <p className="text-single">{v.c_name} | {v.v_name}</p>
                                        <p className="p_price"><strong>￥{v.high_price}</strong>起</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
    componentDidMount() {
        document.title = this.props.title;

        console.log(this.props)
        new Swiper('.swiper-container', {
            observer: true,
            loop: true,
            autoplay: {
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination'
            }
        })

        new Swiper('.drag-container', {
            pagination: '.drag-pagination',
            slidesPerView: 4,
            centeredSlides: false,
            paginationClickable: true,
        });
       

    }
    componentWillMount() {
        this.props.getSlideList();
        this.props.getClassifyList();
        this.props.getHotShowList();
        this.props.getFloorShow();
        this.props.getRecommendShow();
        this.props.getTourPage();
        console.log(this.props.adlist)
    }
}
function mapStateToProps(state) {
    return {
        slideList: state.homeInit.slideList,
        classifyList: state.homeInit.classifyList,
        operationList: state.homeInit.operationList,
        hotShowList: state.homeInit.hotShowList,
        floorShowList: state.homeInit.floorShowList,
        recommendShow: state.homeInit.recommendShow,
        adlist:state.homeInit.adlist
    }
}
export default withRouter(connect(mapStateToProps, dispatch => bindActionCreators(homeAction, dispatch))(Home));