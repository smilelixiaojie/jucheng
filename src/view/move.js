import React, { Component } from "react";
import "../assets/style/move.css"
import {
    connect
} from "react-redux"
import axios from "axios";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import {withRouter} from "react-router-dom"
class Movie extends Component {
    render() {
        console.log(this.props.movieList)
        return (
            <div className="Move">
                <p className="header">
                    剧院
                </p>
                <div id="lalala" className="wrap">
                    {
                        this.props.movieList.map((v, i) => {
                            return (
                                <div className='theater-info-shows' key={i}>
                                    <img src={v.pic} alt="" />
                                    <div>
                                        <h4 >{v.name}</h4>
                                        <p>{v.count}场演出在售</p>
                                    </div>
                                    <div id={"swiper-container"+i} className="swiper-container">
                                        <div className="swiper-wrapper">
                                            {
                                               
                                                v.show_list.map((v, i) => {
                                                    return (
                                                        <div key={i} className="swiper-slide">
                                                            <p>{v.show_time}</p>
                                                            <img className="img" src={v.pic} alt="" onClick={()=>{
                                                                this.props.history.push("/ticket/"+v.id+"/"+v.show_id)
                                                            }}/>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>
                                        <div id={"swiper-pagination"+i} className="swiper-pagination"></div>
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
        document.title = this.props.title
        this.props.getMovieList()
        console.log(this.props)

     
    }

}
function mapStateToProps(state) {
    return {
        movieList: state.movieInit.movieList

    }

}
function mapDispatchToProps(dispatch) {
    return {
        getMovieList() {
            axios.get("https://m.juooo.com/RestTheatre/getTheatreList?page=1&version=6.0.1&referer=2&timestamp=1563248350")
                .then(({ data }) => {
                    const movieList = data.data.theatre_list
                    dispatch({
                        type: "GET_MOVIELIST",
                        payload: {
                            movieList
                        }

                    })
                    setTimeout(()=>{
                        movieList.forEach((v,i) => {
                            new Swiper('#swiper-container'+i, {
                                pagination: '#swiper-pagination'+i,
                                slidesPerView:3,
                                centeredSlides: false,
                                paginationClickable: true,
                            });
                        });
                       
                    },2000)
                    
                })
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie)) 