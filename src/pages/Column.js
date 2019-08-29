import React from 'react';
import './Column.css'
import { Link } from 'react-router-dom'
import Cell from "../components/cell/Cell";

import asyncAction from "../store/asyncAction";
import * as types from "../store/types";
import connect from "react-redux/es/connect/connect";

class Column extends React.Component{
  componentWillMount(){
    this.props.getColumn()
  }
  // Link是从column跳转的跟里面的cell没关系
  render(){
    let {column} = this.props;
    return (
      <div className="Column">
        {
          column.map(item=>(
            <Link  key={item.id} to={`/detail/${item.id}?dataName=column`}>
              <Cell noindex item={item}/>
            </Link>
          ))  
        }
      </div>
    )
  }
}


const initMapStateToProps=state=>({
  column:state.column
});

const initMapDispatchToProps=dispatch=>({
  getColumn:()=>dispatch(asyncAction({
    apiname:'column',
    params:{_page:1,_limit:8},
    typeName:types.UPDATE_COLUMN
  }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Column)