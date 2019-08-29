import React from 'react';
import './App.css'

import {Route,Switch,Redirect} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Home from "../pages/Home";
import Follow from "../pages/Follow";
import Column from "../pages/Column";
import User from "../pages/User";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Error from "../pages/Error";
import Loading from "../components/loading/Loading";

import PubSub from 'pubsub-js'
import Auth from "../guard/Auth";

import {connect} from 'react-redux';
import {VIEW_NAV,VIEW_FOOT,VIEW_LOADING} from '../store/types'


class App extends React.Component{
  // state={
  //   bNav:false,
  //   bFoot:false,
  //   bLoading:false
  // };
  // constructor(){
    // super();
    // 订阅在前,因为我构造了才有机会去渲染子组件，子组件去拿数据就已经发生了。
    // this.token = PubSub.subscribe('VIEW_LOADING',(msg,data)=>{
      //msg消息名称
      //data发布方传过来的数据
      // this.setState({bLoading:data})
    // });
  // };
  // componentWillUnmount(){
    //取消订阅
    // PubSub.unsubscribe(this.token)
  // }
  // this.props是老数据，nextprops是新数据，在页面实例化时候数据是新数据
  componentWillReceiveProps(nextProps){
    let path = nextProps.location.pathname
    this.checkPath(path)
    
  }
  // 在页面挂载完成后this.props就是老数据了
  componentDidMount(){
    let path = this.props.location.pathname
    this.checkPath(path)
    window.scrollTo(0,0);
  }
  checkPath=(path)=>{
    // 在上面页面实例化前和挂载后都会执行checkPath并传参对应的path在下面if进行正则判断
    // 正则判断后再执行绿色代码中的方法实例viewNav/viewFoot实现头部和底部的显示隐藏
    let {viewNav,viewFoot}=this.props;
    if (/home|follow|column|error/.test(path)){
      viewNav(true);viewFoot(true)
    }
    if (/login|reg|detail/.test(path)){
      viewNav(false);viewFoot(false)
    }
    if (/user/.test(path)){
      viewNav(false);viewFoot(true)
    }
  }
  render(){

    let {bNav,bFoot,bLoading} = this.props;
    return(
      <div className="App">
        {bLoading && <Loading/>}
        {bNav&&<Header/>}
        {/* {<Loading/>} */}
        {/* {<Header/>} */}
        
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/follow" component={Follow}/>
          <Route path="/column" component={Column}/>
          <Auth path="/user" component={User}/>
          <Route path="/reg" component={Reg}/>
          <Route path="/login" component={Login}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/error" component={Error}/>
          <Redirect exact from="/" to="home"/>
          <Route exact component={Error}/>
        </Switch>
        {bFoot?<Footer/>:null}
        {/* {<Footer/>} */}
        
      </div>
    )
  }
}



const initMapStateToProps=state=>({
  bNav:state.bNav,
  bFoot:state.bFoot,
  bLoading:state.bLoading
});
const initMapDispatchToProps=dispatch=>({
  viewNav:(bl)=>dispatch({type:VIEW_NAV,payload:bl}),
  viewFoot:(bl)=>dispatch({type:VIEW_FOOT,payload:bl})
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(App)