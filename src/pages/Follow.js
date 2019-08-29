import React from 'react';
import './Follow.css'
import Cell from "../components/cell/Cell";

import asyncAction from "../store/asyncAction";
import * as types from "../store/types";
import connect from "react-redux/es/connect/connect";

class Follow extends React.Component{
  componentDidMount(){
    this.props.getFollow()
  };
  // follow是通过传linkApi布尔值来决定通过cell点击事件实现内部编程式跳转  
  render(){
    let {follow}=this.props;
    return (
      <div className="Follow">
        {
          follow.map(item=>(
            <Cell key={item.id} linkApi item={item} history={this.props.history} dataName="follow" />
          ))
          
        }
      </div>
    )
  }
}

const initMapStateToProps=state=>({
  follow:state.follow,
});

const initMapDispatchToProps=dispatch=>({
  getFollow:()=>dispatch(asyncAction({
    apiname:'follow',
    params:{_page:1,_limit:8},
    typeName:types.UPDATE_FOLLOW
  }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Follow)