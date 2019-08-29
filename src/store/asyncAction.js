import {VIEW_LOADING} from './types';
import axios from 'axios'
export default ({apiname,params,typeName})=>(dispatch,getState)=>{
  // dispatch({type:VIEW_LOADING,payload:true});
  // console.log('asyncactions','/mock/'+apiname);
  // 异步读取数据，接收各个组件传来的对象，里面包含了3个参数，在then里面直接返回到reduser里面再返回到组件
  return axios({
    url:'/mock/'+apiname,
    params:params||null
  }).then(
    res=>{
      dispatch({type:typeName,payload:res.data});
      // dispatch({type:VIEW_LOADING,payload:false});
      return {err:res.data.err,msg:res.data.msg};
    }
  );
}