import React,{Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import mineAction from "../store/actionCreator/mine";
 class Mine extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.getMenuItem()
        console.log("22222")
    }
    
    render(){
        return(
            <div className="Mine">
                我的
            </div>
        )
    }
    componentDidMount(){
        document.title = this.props.title
    }
    
}
function mapStateToProps(state) {
    return {
        slideList: state.homeInit.slideList,
        classifyList: state.homeInit.classifyList
    }
}


export default connect(mapStateToProps, dispatch => bindActionCreators(mineAction, dispatch))(Mine);