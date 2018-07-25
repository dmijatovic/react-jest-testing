

import * as actionType from './actionTypes';

const initState={
  //allow: false,
  loginPath: 'login',
  sessionKey:'app-token',
  token:getTokenFromSession('app-token'),
  err:''
}

export default (state=initState, action)=>{
  switch(action.type){
    case actionType.SIGN_IN_OK:
    case actionType.SIGN_UP_OK:
    case actionType.AUTH_LOGIN:
      //store token
      storeToken({
        key: state.sessionKey,
        token: action.payload
      });
      //debugger 
      return {
        ...state,
        //allow: action.payload!==null,
        token: action.payload
      };
    case actionType.SIGN_IN_ERR:
    case actionType.SIGN_UP_ERR:
      return {
        ...state,
        //allow: false,
        token: null,
        err: action.payload
      };
    case actionType.AUTH_LOGOUT:
      //debugger
      //remove token from session
      removeToken("app-token");
      //return empty
      return {
        ...state,
        //allow: action.payload,
        token: null
      };
    default:
      return state;
  }
}

export function storeToken({key, token}){
  //debugger 
  if (sessionStorage){
    sessionStorage.setItem('app-token', token)
  }else{
    console.error("SessinStorage not supported... user token cannot be stored");
  }
}

export function getTokenFromSession(key){
  //debugger
  if (sessionStorage){
    let token = sessionStorage.getItem(key);
    return token;
  } else {
    return "";
  }
}

export function removeToken(key){
  //debugger 
  if (sessionStorage){
    sessionStorage.removeItem(key);
  }
}
