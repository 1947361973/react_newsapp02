import React from 'react';
import foot from './Footer.module.css'
import {NavLink} from 'react-router-dom'

export default class Footer extends React.Component{
  render(){
    return (
      <div className={foot.foot_btn}>
        <ul>
          <li><NavLink className={foot.home}  to="/home"></NavLink></li>
          <li><NavLink className={foot.write}  to="/error"></NavLink></li>
          <li><NavLink className={foot.my}  to="/user"></NavLink></li>
        </ul>
      </div>
    )
  }
}