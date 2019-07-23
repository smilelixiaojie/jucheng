import React,{Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import mineAction from "../store/actionCreator/mine";
import {withRouter} from "react-router-dom"
import "../assets/style/mine/mine.css"
import "../assets/style/mine/swiper.min.css"
import "../assets/style/mine/font_1221632_dzxh7zu5uik.css"
import "../assets/style/mine/font_1220936_w14jsxzpz9.css"
import "../assets/style/mine/app.e1af133cbb8abba4d20c311bb9ca2e51.css"
 class Mine extends Component{
    // constructor(props){
    //     super(props)
    // }
    componentWillMount(){
        this.props.getMenuItem();
    }
    changeRouter(){
        this.props.history.push("/puls/index")
    }
    render(){
        return(
            <div className="Mine">
            <div data-v-6db6250d="" class="mine">
            <div data-v-6db6250d="" class="mine__body">
                <div data-v-6db6250d="" class="mine-info mine-info">
                    <a data-v-6db6250d="" href="">
                        <i data-v-6db6250d="" class="iconfont ju-icon-setting1"></i>
                    </a>
                    <div data-v-6db6250d="" class="mine-info__main">
                        <div data-v-6db6250d="" class="mine-info__main__head">
                            <div data-v-6db6250d="" class="mine-info__main__head__pic">
                                <img data-v-6db6250d="" alt="" src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png"/>
                            </div>
                            <span data-v-6db6250d="" class="mine-info__main__head__name">橙子</span>
                            <span data-v-6db6250d="" class="mine-info__main__head__uid">ID: 6755177</span>
                        </div>
                        <div data-v-6db6250d="" class="mine-info__main__label">
                            <p data-v-6db6250d="" class="mine-info__main__label__name">普通会员</p>
                        </div>
                        <div data-v-6db6250d="" class="mine-info__main__cnt">
                            <a data-v-6db6250d="" href="" class="mine-info__main__cnt__item">
                                <p data-v-6db6250d="" class="mine-info__main__cnt__item__num">0</p>
                                <p data-v-6db6250d="" class="mine-info__main__cnt__item__name">账户余额</p>
                                <div data-v-6db6250d="" class="separator"></div>
                            </a>
                            <a data-v-6db6250d="" href="" class="mine-info__main__cnt__item">
                                <p data-v-6db6250d="" class="mine-info__main__cnt__item__num">8</p>
                                <p data-v-6db6250d="" class="mine-info__main__cnt__item__name">积分</p>
                                <div data-v-6db6250d="" class="separator"></div>
                            </a>
                            <a data-v-6db6250d="" href="" class="mine-info__main__cnt__item">
                                <p data-v-6db6250d="" class="mine-info__main__cnt__item__num">0</p>
                                <p data-v-6db6250d="" class="mine-info__main__cnt__item__name">优惠券</p>
                                <div data-v-6db6250d="" class="separator"></div>
                            </a>
                            <a data-v-6db6250d="" href="" class="mine-info__main__cnt__item mine-info__main__cnt__plus">
                                <p data-v-6db6250d="" class="mine-info__main__cnt__item__num mine-info__main__cnt__item__num--no">立即开通</p>
                                <p data-v-6db6250d="" onClick={this.changeRouter.bind(this)} class="mine-info__main__cnt__item__name">橙PLUS卡</p>
                            </a>
                        </div>
                    </div>
                </div>
                <a data-v-6db6250d="" href="" class="mine-vip">
                    <img data-v-6db6250d="" src="https://m.juooo.com/static/img/ad.411f5e6.png" alt="" class="mine-vip__pic" />
                </a>
                <div data-v-6db6250d="" class="mine-setting">
                    <ul data-v-6db6250d="" class="mine-setting__list">
                        <li data-v-6db6250d="" class="mine-setting__list__item">
                            <a data-v-6db6250d="" href="" class="mine-setting__list__item--link">
                                <i data-v-6db6250d="" class="icon icon-order"></i>
                                <p data-v-6db6250d="" class="mine-setting__list__item__name">我的订单</p>
                            </a>
                        </li>
                        <li data-v-6db6250d="" class="mine-setting__list__item">
                            <a data-v-6db6250d="" href="" class="mine-setting__list__item--link">
                                <i data-v-6db6250d="" class="icon icon-ticketholder"></i>
                                <p data-v-6db6250d="" class="mine-setting__list__item__name">我的票夹</p>
                            </a>
                        </li>
                        <li data-v-6db6250d="" class="mine-setting__list__item">
                            <a data-v-6db6250d="" href="" class="mine-setting__list__item--link">
                                <i data-v-6db6250d="" class="icon icon-cardpackage"></i>
                                <p data-v-6db6250d="" class="mine-setting__list__item__name">我的卡包</p>
                            </a>
                        </li>
                        <li data-v-6db6250d="" class="mine-setting__list__item"></li>
                    </ul>
                    <ul data-v-6db6250d="" class="mine-setting__list">
                        <li data-v-6db6250d="" class="mine-setting__list__item">
                            <a data-v-6db6250d="" href="" class="mine-setting__list__item--link">
                                <i data-v-6db6250d="" class="icon icon-people"></i>
                                <p data-v-6db6250d="" class="mine-setting__list__item__name">实名购票人</p>
                            </a>
                        </li>
                        <li data-v-6db6250d="" class="mine-setting__list__item">
                            <a data-v-6db6250d="" href="" class="mine-setting__list__item--link">
                                <i data-v-6db6250d=""  class="icon icon-address"></i>
                                <p data-v-6db6250d="" class="mine-setting__list__item__name">收货地址</p>
                            </a>
                        </li>
                        <li data-v-6db6250d="" class="mine-setting__list__item">
                            <a data-v-6db6250d="" href="" class="mine-setting__list__item--link">
                                <i data-v-6db6250d="" class="icon icon-feedback"></i>
                                <p data-v-6db6250d="" class="mine-setting__list__item__name">意见反馈</p>
                            </a>
                        </li>
                        <li data-v-6db6250d="" class="mine-setting__list__item">
                            <a data-v-6db6250d="" href="javascript:;" class="mine-setting__list__item--link">
                                <i data-v-6db6250d="" class="icon icon-help"></i>
                                <p data-v-6db6250d="" class="mine-setting__list__item__name mine-setting__list__item__name--active">客服帮助</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
            </div>
        )
    }
    componentDidMount(){
        document.title = this.props.title
    }
    
}
function mapStateToProps(state) {
    return {
        firstdata: state.mineInit.firstdata,
        icondata: state.mineInit.icondata
    }
}


export default withRouter(connect(mapStateToProps, dispatch => bindActionCreators(mineAction, dispatch))(Mine));