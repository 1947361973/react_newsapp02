import React from 'react';
import './User.css'
import {NavLink} from 'react-router-dom'

import {connect} from 'react-redux'
import asyncAction from "../store/asyncAction";

import * as types from '../store/types'

class User extends React.Component{
  render(){
    let {data:{fans,follow,icon,nikename}}=this.props;
    return (
      <div className="user">
        <div className="user__header">
          <h2><img src={icon} alt=""/></h2>
          <div className="user-box">
          <a href="##">{nikename}</a><br/>
          <a href="##" onClick={
            ()=>this.props.logout({
              _this:this
            })
          }>注销</a>
          </div>
          <ul className="clear">
            <li>
              <span>{follow}</span>
              <p>关注</p>
            </li>
            <li>
              <span>{fans}</span>
              <p className="end">粉丝</p>
            </li>
          </ul>
        </div>
        <div className="docList">
          <ul>
            <li className="gk-text">
              <i></i>
              <p>公开博文</p>
              <b></b>
              <span>0</span>
            </li>
            <li className="mm-text">
              <i></i>
              <p>秘密博文</p>
              <b></b>
              <span>0</span>
            </li>
            <li className="cg-text">
              <i></i>
              <p>草稿箱</p>
              <b></b>
              <span>0</span>
            </li>
            <li className="sc-text">
              <i></i>
              <p>收藏夹</p>
              <b></b>
              <span>0</span>
            </li>
            <li className="my_cz">
              <i></i>
              <p>收藏夹</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const initMapStateToProps=state=>({
  user:state.user
});

const initMapDispatchToProps=(dispatch,ownProps)=>({
  logout:(_this)=>dispatch(asyncAction({
    apiname:'user',
    typeName:types.UPDATE_LOGOUT
  })).then(
    res=>{
      console.log(res)
    }
  )
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(User)