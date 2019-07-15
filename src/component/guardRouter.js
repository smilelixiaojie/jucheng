import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "./nav"
class GuardRouter extends Component {
    componentWillMount() {
        if (this.props.isAuthorization) {
            if (!localStorage.userName) {
                this.props.history.push("/login");
            }
        }
        console.log(this.props.nameStr)
    }
    render() {
        return (
            <div>
                <this.props.component title={this.props.nameStr}/>
                {this.props.isShow ? <Nav className={"nav"} /> : ""}
                {/* <Nav className={"nav"} style={{display:this.props.isShow ?"block":"none"}}/> */}
            </div>
        )
    }
}
export default withRouter(GuardRouter);