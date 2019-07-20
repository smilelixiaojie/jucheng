import React,{Component} from "react";
import  {withRouter} from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import tourAction from "../store/actionCreator/tour";
// import "../assets/style/tour/tour.css"
// import  "../assets/style/tour/base-second.scss";
// import  "../assets/style/tour/base.scss";
// import  "../assets/style/tour/detail.scss";
// import  "../assets/style/tour/variable.scss";
 class Tour extends Component{
    
     componentWillMount(){
        this.props.getTourPage(this.props.location.state.b)
     }
    render(){
      return (
        <div dangerouslySetInnerHTML={{__html: this.props.adlist}}></div>
      )
    }
    componentDidMount(){
        console.log(this.props.location.state.b);
        console.log(this.props)
    }
}
function mapStateToProps(state) {
    return {
        adlist:state.tourInit.adlist
    }
}
export default  withRouter(connect(mapStateToProps, dispatch => bindActionCreators(tourAction, dispatch))(Tour))