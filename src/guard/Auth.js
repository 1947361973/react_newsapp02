import React from 'react';

import {Route, Redirect} from 'react-router-dom'

import {connect} from 'react-redux'
import asyncAction from "../store/asyncAction";

import * as types from '../store/types'

const Auth = ({component:Component,user,...rest})=>(
  <Route {...rest} render={(rest)=>(
    user.err===0 ?
      <Component {...rest} data={user.data} /> :
      <Redirect to="/login"  />
  )}/>
)

const initMapStateToProps=state=>({
  user:state.user
})

export default connect(
  initMapStateToProps,
  null
)(Auth)