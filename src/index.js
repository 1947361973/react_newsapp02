import React from 'react';
import ReactDom from 'react-dom';
import App from "./layouts/App";

//引入公共样式
import './assets/css/base.css';
import './assets/js/font';

//引入路由相关组件
import { BrowserRouter,Route } from 'react-router-dom'

//配置 axios
import './plugins/axios'   

//状态管理
import store from './store';//引入store__index.js导出的那个store，再传到Provider，Provider套App
import {Provider} from 'react-redux'

// 取出本地存储的login信息,存储起来，这样进入user中就会自动登录，
let local = window.localStorage.getItem('news_user',)
if(local){
  store.dispatch({type:'UPDATE_USER',payload:JSON.parse(local)})
}

ReactDom.render(
  <Provider store={store}>
	  <BrowserRouter>
	    <Route component={App} />
	  </BrowserRouter>
	</Provider>
  ,
  document.getElementById('root')
);
