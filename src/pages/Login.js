import React from 'react';
import {Link} from 'react-router-dom'
import login from './Login.module.css'

import {connect} from 'react-redux'
import asyncAction from "../store/asyncAction";

import * as types from '../store/types'

class Login extends React.Component{
  constructor(){
    super();
    this.state={
      username:'',
      password:'',
      mess:''
    }
  };
  changeMess=(ev)=>{
    this.setState({
      [ev.target.name]:ev.target.value
    })
  };
  // send=()=>{
  //   Login.axios({
  //     url:'/mock/login/',
  //     params:{username:this.state.username,password:this.state.password}
  //   }).then(
  //     res=>{
  //       if(res.data.err==0){
  //         alert('登录成功，但是因为是mock，可能会弹回登录')
  //         this.props.history.push('/user')
  //       }else{
  //         this.setState({mess:res.data.msg})
  //       }
  //     }
  //   )
  // }
  render(){
    let {username,password} = this.state;
    return (
      <div className={login.content}>
        <p className={login.fhbtn}><a href="##" onClick={()=>window.history.go(-1)}></a></p>
        <h1></h1>
        <div className={login.login__box}>
          <p className={login.lsolid}></p>
          <div className={login.login}>
            <Link  to="/login">登录</Link>
            <span></span>
            <Link  to="/reg">注册</Link>
          </div>
          <p className={login.rsolid}></p>
        </div>
        <ul>
          <li className={login.lifirst}>
            <input type="text" name='username' value={username} onChange={this.changeMess}/>
            <span>帐号</span>
          </li>
          <li>
            <input type="text" name='password' value={password} onChange={this.changeMess}/>
            <span>密码</span>
          </li>
          <li>{this.state.mess}</li>
        </ul>
        <div className={login.footbox}>
          {/* 点击登录调用login，并传参进去, */}
          <input type="button" value="登 录" className={login.login__btn} onClick={
            ()=>this.props.login({
              username:this.state.username,
              password:this.state.password,
              _this:this
            })
          }/>
          <a href="" className={login.tishi}>忘记密码？</a>
        </div>
      </div>
    )
  }
}


const initMapDispatchToProps=(dispatch,ownProps)=>({
  // 点击登录后调用函数，传参，并处理业务,注意这里存在仓库中的只要页面刷新数据就会丢失，user会重新跳转login
  // 所以这里要做一个本地存储，这个事情就在reduser中做，或者在组件中做
  login:({username,password,_this})=>dispatch(asyncAction({
    apiname:'login',
    params:{username,password},
    typeName:types.UPDATE_USER
  })).then(
    res=>{
      if(res.err===0){
        ownProps.history.push('/user')
      }else{
        _this.setState({mess:res.msg})
      }
    }
  )
});

export default connect(
  null,
  initMapDispatchToProps
)(Login)