import React,{Component} from "react";

export default class Move extends Component{
    render(){
        return(
            <div className="Move">
                影院
            </div>
        )
    }
    componentDidMount(){
        document.title = this.props.title
    }
}