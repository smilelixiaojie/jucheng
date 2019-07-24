import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import rootRoute from "./route/"
import GuardRouter from "./component/guardRouter";
import {connect} from "react-redux";
// import 'swiper/dist/css/swiper.min.css'
class App extends Component {
  constructor(props){
    super(props);
    this.state =   {

    }
  }
  render() {
    return (
      <div className="App">
        <Router>
          {
            rootRoute.map((v, i) => {
              return (
                <Route key={i} path={v.path} exact={v.exact} render={() => <GuardRouter {...v}></GuardRouter>} />
              )
            })
          }
        </Router>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    showList:state.showList,
    state
  }
}
function mapDispatchToProps(dispatch){
  return{
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
