import React from 'react';
import error from './Error.module.css'
export default class Error extends React.Component{
  render(){
    return(
      <div className={error.Error}>
        <h3>Error</h3>
        <h3>Error</h3>
        <h3>Error</h3>
        <h3>Error</h3>
        <h3>Error</h3>
        <h3>Error</h3>
        <h3 onClick={()=>window.history.go(-1)}>返回</h3>
      </div>
    )
  }
}