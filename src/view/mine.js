import React,{Component} from "react";

export default class Mine extends Component{
    componentWillMount(){
        
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