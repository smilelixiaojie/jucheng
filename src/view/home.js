import React, { Component } from "react";
import "../assets/style/home.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import homeAction from "../store/actionCreator/home";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import { withRouter } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="header">
                    <div className="site">
                        <span>全国</span>
                    </div>

                    <input type="text" placeholder="搜索热门演出" className="search" />
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
                <div className="classify_list">
                    {
                        this.props.classifyList.map((v, i) => {
                            return (
                                <div key={i} className="classify_list_item" onClick={() => {
                                    this.props.history.push("/show");
                                }}>
                                    <img src={v.pic} alt="" />
                                    <span>{v.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="banner">
                    <img src="https://image.juooo.com//group1/M00/03/7A/rAoKNV0jflaAL5_EAAD3QE0LKFo824.png" alt="" />
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
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {
                                    this.props.hotShowList.map((v, i) => {
                                        return (
                                            <div className="swiper-slide" key={i}>
                                                <img src={v.pic} alt="" />
                                                <p>{v.show_name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
                <div className="floor_show">
                    {
                        this.props.floorShowList.map((v, i) => {
                            return (
                                <div key={i} className="floor_show_item">
                                    <h3>{v.title}</h3>
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            {
                                                v.list.map((v, i) => {
                                                    return (
                                                        <div className="swiper-slide" key={i}>
                                                            <img src={v.pic} alt="" />
                                                            <p>{v.show_name}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="swiper-pagination"></div>
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
    }
    componentWillMount() {
        this.props.getSlideList();
        this.props.getClassifyList();
        this.props.getHotShowList();
        this.props.getFloorShow();
    }
}
function mapStateToProps(state) {
    return {
        slideList: state.homeInit.slideList,
        classifyList: state.homeInit.classifyList,
        operationList: state.homeInit.operationList,
        hotShowList: state.homeInit.hotShowList,
        floorShowList: state.homeInit.floorShowList,
    }
}
export default withRouter(connect(mapStateToProps, dispatch => bindActionCreators(homeAction, dispatch))(Home));