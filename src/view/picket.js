import React,{Component} from "react";

export default class Picket extends Component{
    render(){
        return(
            <div className="Picket">
                票夹
            </div>
        )
    }
    componentDidMount(){
        document.title = this.props.title
    }
}