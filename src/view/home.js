import React,{Component} from "react";

export default class Home extends Component{
    render(){
        return(
            <div className="Home">
                首页
            </div>
        )
    }
    componentDidMount(){
        document.title = this.props.title
    }
}