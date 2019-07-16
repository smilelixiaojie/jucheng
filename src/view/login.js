import React,{Component} from "react";
import Router,{withRouter} from "react-router-dom"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import loginAction from "../store/actionCreator/login";
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            userName:"",
            password:""
        }
    }
    render(){
        return(
          
            <div className="Login">
                <div className="navbar">
                    <span style={{color:"red", height:"40px", width:"40px",backgroundColor:"blue"} } onClick={this.goback.bind(this)}>返回</span>
                </div>
                <h1>欢迎来到聚橙网</h1> 
                <form >
                  <p> 用户名：<input type="text" name="userName" onChange={this.onChang.bind(this)} defaultValue=""/></p>
                  <p>密码：<input type="password" name="password" onChange={this.onChang.bind(this)} defaultValue=""/></p> 
                    <button onClick={this.login.bind(this)}>登录</button>
                </form>            
            </div>
           
        )
    }
    onChang(e){
       
        this.setState({
            [e.target.name]:e.target.value
        },function(){

            console.log(this.state.userName,this.state.password)
        })
    }
    login(e){
        e.preventDefault();
        this.actions={
            userName:this.state.userName,
            password:this.state.password
        }
        this.props.addUser(this.actions)
        if(localStorage.userName){
            this.props.history.go(-1);
        }
    }
    componentDidMount(){
        document.title = this.props.title
    }
    goback(){
      
        this.props.history.go(-1);
    }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        userList: state.userInit.userList,
        
    }
}
export default   withRouter(connect(mapStateToProps, dispatch => bindActionCreators(loginAction, dispatch))(Login))

