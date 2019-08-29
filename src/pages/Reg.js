import React from 'react';
import {Link} from 'react-router-dom'
import './Reg.css'
export default class Login extends React.Component{
  render(){
    return (
      <div className="content">
        <p className="fhbtn"><a href="##" onClick={()=>window.history.go(-1)}></a></p>
        <h1></h1>
        <div className="login-box">
          <p className="lsolid"></p>
          <div className="login">
            <Link  to="/login">登录</Link>
            <span></span>
            <Link  to="/reg">注册</Link>
          </div>
          <p className="rsolid"></p>
        </div>
        <ul>
          <li className="lifirst">
            <input type="text" defaultValue=""/>
            <span>帐号</span>
          </li>
          <li>
            <input type="text" defaultValue=""/>
            <span>密码</span>
          </li>
        </ul>
        <div className="footbox">
          <input type="button" value="注 册" className="login-btn"/>
          <a href="" className="tishi">忘记密码？</a>
        </div>
      </div>
    )
  }
}