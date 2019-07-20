import React, { Component } from "react";
import "../../assets/style/search/search.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import searchAction from "../../store/actionCreator/search";
import { withRouter } from "react-router-dom";
class Search extends Component {
    render() {
        return (
            <div className="search">
                <div className="search_header">
                    <div className="search_ipt">
                        <span className="search_icon"><i></i></span>
                        <input type="text" placeholder="搜索热门演出" className="input_text" />
                        <span className="cancel_icon"><i></i></span>
                    </div>
                    <span className="cancel_span" onClick={()=>{
                        this.props.history.goBack();
                    }}>取消</span>
                </div>
                <div className="default_wrap">
                    <p className="title_clearfix">
                        热门搜索
                    </p>
                    <ul className="ul_list">
                        {
                            this.props.hotWordList.map((v, i) => {
                                return (
                                    <li key={i}>{v}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getHotWord();
    }
}
function mapStateToProps(state) {
    return {
        hotWordList: state.searchInit.hotWordList
    }
}
export default withRouter(connect(mapStateToProps, dispatch => bindActionCreators(searchAction, dispatch))(Search));