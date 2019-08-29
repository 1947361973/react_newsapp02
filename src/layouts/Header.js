import React from 'react';
import header from './Header.module.css'
import {NavLink} from 'react-router-dom'

export default class Header extends React.Component{
  render(){
    return(
      <div className={header.nav}>
        <ul>
          <li><NavLink activeClassName={header['active']} to="/home">首页</NavLink></li>
          <li><NavLink activeClassName={header['active']} to="/follow">关注</NavLink></li>
          <li><NavLink activeClassName={header['active']} to="/column">栏目</NavLink></li>
        </ul>
      </div>
    )
  }
}