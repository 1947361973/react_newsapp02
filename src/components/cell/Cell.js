import React from 'react';
import './Cell.css'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'
import querystring from 'query-string'
export default class Cell extends React.Component{
  clickHandler=()=>{
    // cell是没有路由上下文的，所以在follow传了一个history，所以这里可以实现编程式跳转，想通过cell跳转都要带id
    
    // 点击cell时候，如果含有从follow传来的linkApi布尔值，那么就执行编程式跳转到/detail/id
    if(this.props.linkApi){
      // this.props.history.push('/detail/'+this.props.item.id)
      this.props.history.push({
        pathname:`/detail/${this.props.item.id}`,
        search:querystring.stringify({
          dataName:this.props.dataName
        })
      })
      console.log(this.props.item)
    }
  };
  // render是column的外部声名式跳转，和home传参link布尔值执行cell内部声名式跳转，通过传来的item来解构再渲染
  render(){
    let {item,dataName} = this.props;
    return (
      <div className="Cell">
        {
          this.props.link?
            <Link to={`/detail/${item.id}?dataName=${dataName}`}>
            {/* <Link to={{pathname:'/detail/'+item.id,search:querystring.stringify({dataName})}}></Link> */}
            {
              this.props.noindex?
                <h2>{item.title}</h2>:
                <h2>{item.id}.{item.title}</h2>
            }
            <p>{item.des}</p>
            </Link>:
            <div onClick={this.clickHandler}>
              {
                  //这里三目运算，从column穿过来的props值noindex人true/false来决定显示编号
                  this.props.noindex ?
                    <h2>{item.title}</h2> :
                    <h2>{item.id}.{item.title}</h2>
                }
                <p>{item.des}</p>
            </div>
        }
        
      </div>
    )
  }
}
//noindex是从column传过来的，因为column页面的cell需要渲染的是<h2>xx</h2>，所以就做一个三元判断
// linkApi是follow传过来的用于在这里判断是用组件自身跳转还是声名式挑战
Cell.defaultProps = {
  noindex: false,
  linkApi:false,
  link:false
};
// id是从follow传过来的，穿的是id:index,在这里做一个类型检查
// item是home穿过来的页面数据其中包含了id，所以是毕传参数
Cell.propTypes={
  link: propTypes.bool,
  linkApi: propTypes.bool,
  noindex:propTypes.bool,
  item:propTypes.object.isRequired,
  dataName: propTypes.string
};