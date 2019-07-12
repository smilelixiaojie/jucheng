import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <NavLink exact to="/">首页</NavLink>
                <NavLink to="/move">影院</NavLink>
                <NavLink to="/picket">票夹</NavLink>
                <NavLink to="/mine">我的</NavLink>
            </div>
        )
    }
}