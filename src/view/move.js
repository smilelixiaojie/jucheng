import React,{Component} from "react";
import "../assets/style/move.css"

export default class Move extends Component{
    render(){
        return(
            <div className="Move">
                <p className="header">
                    剧院
                </p>
            </div>
        )
    }
    componentDidMount(){
        document.title = this.props.title
    }
}