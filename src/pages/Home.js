import React from 'react';
import './Home.css'
import Cell from "../components/cell/Cell";

import { Carousel } from 'antd-mobile';

import {connect} from 'react-redux'
import asyncAction from "../store/asyncAction";

import * as types from '../store/types'

class Home extends React.Component{
  state={
    imgHeight:200
  };
  componentDidMount(){
    this.props.getHome();
    this.props.getBanner();
  };
  clickHandler=(id,dataName,ev)=>{
    this.props.history.push({
      pathname:'/detail/'+id,
      search:'?dataName='+dataName
    })
  };
  // home是声名式跳转
  render(){
    let {home,banner}=this.props;
    return (
      <div className="Home">
        <Carousel
          autoplay={true}
          infinite
        >
          {banner.map(item => (
            <a
              href="##"
              key={item.id}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              onClick={this.clickHandler.bind(null,item.id, 'banner')}
            >
              <img
                src={item.banner}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
              <div className="home-swiper__item__title">
                <div>{item.title}</div>
                <div>{item.sub_title}</div>
              </div>
            </a>
          ))}
        </Carousel>

        {
          home.map(item=><Cell item={item} key={item.id} dataName="home" link/>)
        }

      </div>
    )
  }
}

const initMapStateToProps=state=>({
  home:state.home,
  banner:state.banner
});

const initMapDispatchToProps=dispatch=>({
  getHome:()=>dispatch(asyncAction({
    apiname:'home',
    params:{_page:1,_limit:10},
    typeName:types.UPDATE_HOME
  })),
  getBanner:()=>dispatch(asyncAction({
    apiname:'banner',
    params:{_page:1,_limit:3},
    typeName:types.UPDATE_BANNER
  }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Home)