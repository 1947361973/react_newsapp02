import * as types from './types';

export default (state,{type,payload}) => {
  switch (type) {
    case types.VIEW_NAV:
      return {...state, bNav:payload};
    case types.VIEW_FOOT:
      return {...state, bFoot:payload};
    case types.VIEW_LOADING:
      return {...state, bLoading:payload};
    case types.UPDATE_HOME:
      return {...state, home:payload.data};
    case types.UPDATE_FOLLOW:
      return {...state, follow:payload.data};
    case types.UPDATE_COLUMN:
      return {...state, column:payload.data};
    case types.UPDATE_BANNER:
      return {...state, banner:payload.data};
    case types.UPDATE_DETAIL:
      return {...state, detail:payload.data};
    case types.UPDATE_USER:
      //同步localstorage，先存localStore，再存仓库，然后再store的index中要取出来
      window.localStorage.setItem('news_user',JSON.stringify(payload))
      return {...state, user:payload};
    case types.UPDATE_LOGOUT:
        window.localStorage.removeItem('news_user')
        console.log(payload.err)
      return {...state, user:payload.err};
    default:
      return state;
  }
}