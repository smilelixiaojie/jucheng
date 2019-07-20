import React, { Component } from "react";
import "../assets/style/ticket.css"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import Swiper from 'swiper/dist/js/swiper.js'
// import 'swiper/dist/css/swiper.min.css'
import axios from "axios"
class Ticket extends Component {

    render() {
        console.log(this.props.showList)
        // console.log(888,this.props.ticketList.static_data.venue.venue_id)
        return (
            <div className="Ticket">
                <div className="detail__brief">
                    <div className="brief__primary">
                        <div className="brief__primary__fg__title">
                            <h2 onClick={() => {
                                this.props.history.go(-1)
                            }}>&lt;</h2>
                            <h3>演出详情</h3>
                            <i></i>
                        </div>
                        <div className="primary">

                            <img alt="" src={this.props.ticketList.share_data.share_pic} />
                            <div className="title">
                                <h3>{this.props.ticketList.share_data.share_title}</h3>
                                <p>￥{this.props.ticketList.static_data.price_range}

                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="brief__secondary">
                        <div className='brief__secondary__info-time__date'>


                            {


                                this.props.ticketList.item_list.map((v, i) => {
                                    console.log(2222, this.props.ticketList.static_data.city.city_name)


                                    return (
                                        <div key={i}>
                                            <span key={i} className="brief__secondary__info__date-time__date">
                                                {i < 1 ? v.project_time : ""}
                                            </span>
                                            <h3 className="brief__secondary__info__place">
                                                {this.props.ticketList.static_data.city.city_name} | {this.props.ticketList.static_data.venue.venue_name}
                                            </h3>
                                        </div>


                                    )

                                })

                            }


                            <span className="brief__secondary__info__date-time__time">

                            </span>


                        </div>
                        <div className="brief__secondary__pointer"></div>
                    </div>
                </div>
                <div className="detail__plus-tips">
                    <div className="card-plus-tips">
                        <div className="orange-plus-tips__name">橙PLUS卡</div>
                        <div className="orange-plus-tips__desc">开通送￥100</div>
                        <div className="orange-plus-tips__guide">立即开卡 &gt;</div>
                    </div>
                </div>
                <div className="show-benefit_detail__schedule-discount">
                    <div className="outer">
                        <div className="show-benefit-item_plus">
                            <span className="show-benefit-item__name">VIP+</span>
                            <span className="show-benefit-item__colon">:</span>
                            <span className="show-benefit-item__content">
                                <div className="plus__desc">

                                    V+会员享
                            </div>

                                国内免邮 + 双倍积分
                            </span>
                            <span className="more">&gt;</span>

                        </div>
                    </div>
                    <div className="outer2">
                        <div className="show-benefit-item">
                            <span className="show-benefit-item__name">入场</span>
                            <span className="show-benefit-item__colon">:</span>
                            <span className="show-benefit-item__content">
                                <div className="plus__desc">

                                    一人一票，儿童凭票入场
                                </div>


                            </span>


                        </div>

                    </div>
                    <div className="outer3">
                        <div className="show-benefit-item support">
                            <span className="show-benefit-item__name">支持</span>
                            <span className="show-benefit-item__colon">:</span>
                            <span className="show-benefit-item__content">
                                <span className="support__list">
                                    <span className="support__list__item">在线选座 |</span>
                                    <span className="support__list__item"> 电子票 |</span>
                                    <span className="support__list__item"> 同城满200免邮</span>
                                </span>


                            </span>


                        </div>

                    </div>
                </div>
                <div className="tour-cities_detail__tour-cities">
                    <div className="tour-cities__desc">
                        <span className="tour-cities__desc__title">巡演城市</span>
                        <span className="tour-cities__desc__count">
                            <div className="tour-cities__list__content">
                                {this.props.tourCityList.show_total}
                                场 &gt;
                            </div>
                        </span>

                    </div>
                    <div className="tour-cities__list">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {
                                    this.props.tourCityList.tour_list.map((v, i) => {
                                        return (

                                            <div key={i} className="tour-cities__list__content__item" style={{ float: "left" }}>
                                                <div className="city">{v.city_name}</div>
                                                <div className="date">{v.show_time}</div>

                                            </div>
                                        )

                                    })
                                }
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
                <div className="intro_detail__intro">
                    <div className="intro__title">演出介绍</div>
                    <div className="intro__content">
                        <div dangerouslySetInnerHTML={{ __html: this.props.ticketList.static_data.show_desc.desc }}></div>
                    </div>
                </div>
                <div className="tips detail__tips">
                    <div className="tips__title">
                        <span className="tips__title__text">温馨提醒</span>
                        <span className="tips__title__arrow">&gt;</span>
                    </div>
                    <div className="tips__list">
                        <span className="tips__list__item">
                            <span className="dot"></span>快递说明</span>
                        <span className="tips__list__item"><span className="dot"></span>订票说明</span>
                        <span className="tips__list__item"><span className="dot"></span>确认订单</span>
                        <span className="tips__list__item"><span className="dot"></span>购票提醒</span>

                    </div>
                </div>
                <div className="recommend_detail__recommend">
                    <div className="recommend__title">相关推荐</div>
                    {
                        this.props.showList.map((v,i)=>{
                              return(
                                <div key={i} className="recommend__list">
                                <div className="item">
                                    <div className="cover__item__cover">
                                        <img alt="" src={v.pic}/>
                                    </div>
                                    <div className="item__info">
                                        <div className="item__info__date-week">
                                            <span className="item__info__date-week__date">{v.show_time_top}</span>
                                            <span className="item__info__date-week__week">{v.show_time_bottom}</span>
                                        </div>
                                        <div className="item__info__name">
                                            <div>{v.name}</div>
                                        </div>
                                        <div className="item__info__place">{v.city_name} | {v.venue_name}</div>
                                        <div className="item__info__price" style={{color:"orange",fontSize:"16px",fontWeight:"900"}}>￥{v.min_price}<span style={{fontSize:"12px",color:"#999"}}>起</span></div>
                                    </div>
                                </div>
                            </div>
                              )
                    
                        })
                    }
                   

                </div>
                <div className="bottom-bar_detail__bottom-bar">
                    <div className="bottom-bar__client-service">
                        <img alt="" src="../image/kefu.png"/>
                        <span>客服</span>
                    </div>
                    <div className="bottom-bar__btn"><h3>选座购买</h3></div>

                </div>
            </div>

        )
    }

    componentDidMount() {
        document.title = this.props.title;
        this.props.getTicketInfo();
        this.props.getTourCity();
        this.props.getShowList()
       
    }
}
function mapStateToProps(state) {
    return {
        ticketList: state.ticketInit.ticketList,
        tourCityList: state.ticketInit.tourCityList,
        showList: state.ticketInit.showList
    }
}
function mapDispatchToProps(dispatch) {

    return {
        getTicketInfo() {
            axios.get("https://api.juooo.com/Schedule/Schedule/getScheduleInfo?schedular_id=" + Number(this.match.params.id) + "&version=6.0.1&referer=2&timestamp=1563332040")
                .then(({ data }) => {
                    const ticketList = data.data
                    dispatch({
                        type: "GET_TICKETINFO",
                        payload: {
                            ticketList
                        }
                    })

                })
        },
        getTourCity() {
            axios.get("https://api.juooo.com/Schedule/Schedule/getTour?show_id=" + Number(this.match.params.sid) + "&venue_id=" + this.ticketList.static_data.venue.venue_id + "&version=6.0.1&referer=2")
                .then(({ data }) => {
                    const tourCityList = data.data
                    console.log(data)

                    dispatch({
                        type: "GET_TOURCITY",
                        payload: {
                            tourCityList
                        }
                    })
                    new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                        slidesPerView: 3,
                        centeredSlides: false,
                        paginationClickable: true,
                    })
                })

        },
        getShowList(){
            axios.get("https://m.juooo.com/Search/getShowList?category=36&city_id=10001&version=6.0.1&referer=2")
            .then(({data})=>{
                console.log(data)
                const showList =data.data.list
                dispatch({
                    type:"GET_SHOWLIST",
                    payload:{
                        showList
                    }
                })
            })
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Ticket))