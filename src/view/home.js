import React, { Component } from "react";
import "../assets/style/home.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import homeAction from "../store/actionCreator/home";

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
                    {
                        this.props.slideList.map((v, i) => {
                            return (
                                <div key={i}>
                                    <img src={v.touch_image_url} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="classify_list" >
                    {
                        this.props.classifyList.map((v, i) => {
                            return (
                                <div key={i} className="classify_list_item">
                                    <img src={v.pic} alt="" />
                                    <span>{v.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="banner">
                    <img src="https://image.juooo.com//group1/M00/03/7A/rAoKNV0jflaAL5_EAAD3QE0LKFo824.png" alt=""/>
                </div>
                <div className="operation_list">
                    {
                        this.props.operationList.map((v,i)=>{
                            return(
                                <div key={i}>
                                    <h3>{v.name}</h3>
                                    <p>{v.describe}</p>
                                    <img src={v.pic} alt=""/>
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
    }
    componentWillMount() {
        this.props.getSlideList();
        this.props.getClassifyList();
    }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        slideList: state.homeInit.slideList,
        classifyList: state.homeInit.classifyList,
        operationList: state.homeInit.operationList
    }
}
export default connect(mapStateToProps, dispatch => bindActionCreators(homeAction, dispatch))(Home)