import React from 'react';
import './Detail.css'
import zan from '../assets/img/zan.png'
import xing from '../assets/img/xing.png'
import fx from '../assets/img/fx.png'
import querystring from 'query-string'

import asyncAction from "../store/asyncAction";
import * as types from "../store/types";
import connect from "react-redux/es/connect/connect";

class Detail extends React.Component{
  componentDidMount(){
    let id = this.props.match.params.id-0;
    let dataName = querystring.parse(this.props.location.search).dataName
    this.props.getDetail(dataName,id)
  }
  render(){
    let {title,time,detail}=this.props.data;
    return (
      <div className="Detail">
        <div className="nav">
          <ul>
            <li className="l-btn" onClick={()=>window.history.go(-1)}></li>
          </ul>
        </div>
          {
            detail && (
              <div className="content">
                <div className="header clear"><h2><img src={detail.auth_icon} alt=""/></h2><p>{detail.auth}</p></div>
                <div className="cont">
                  <h3>{title}</h3>
                  <div className="time"><p>{time}<span><img src={zan} alt=""/></span></p>
                  </div>
                  <div className="text-box" dangerouslySetInnerHTML={{__html:detail.content}}></div>
                </div>
              </div>
            )
          }
        <div className="foot-btn">
          <ul>
            <li className="say"><a href="">
              <i></i><span>0</span>
            </a></li>
            <li className="zan"><a href="">
              <i></i><span>0</span>
            </a></li>
            <li className="xing"><a href="">
              <i><img src={xing} alt=""/></i>
            </a></li>
            <li className="fx"><a href="">
              <i><img src={fx} alt=""/></i>
            </a></li>
          </ul>
        </div>
      </div>
    )
  }
}


const initMapStateToProps=state=>({
  data:state.detail,
});

const initMapDispatchToProps=dispatch=>({
  getDetail:(dataName,id)=>dispatch(asyncAction({
    apiname:`${dataName}/${id}`,
    typeName:types.UPDATE_DETAIL
  }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Detail)