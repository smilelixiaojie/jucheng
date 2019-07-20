import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store";
import "./font/iconfont.css"
import {Provider} from "react-redux";
import "./App.css"

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

