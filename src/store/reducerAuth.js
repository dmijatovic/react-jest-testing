

import * as actionType from './actionTypes';

const initState={
  allow: false,
  loginPath: 'login',
  token:getTokenFromSession(),
  err:''
}

export default (state=initState, action)=>{
  switch(action.type){
    case actionType.SIGN_IN_OK:
    case actionType.SIGN_UP_OK:
    case actionType.AUTH_LOGIN:
      //store token
      storeToken(action.payload);
      //debugger 
      return {
        ...state,
        allow: action.payload!=="",
        token: action.payload
      };
    case actionType.SIGN_IN_ERR:
    case actionType.SIGN_UP_ERR:
      return {
        ...state,
        allow: false,
        token: "",
        err: action.payload
      };
    case actionType.AUTH_LOGOUT:
      //remove token from session
      storeToken("");
      //return empty
      return {
        ...state,
        allow: action.payload,
        token: ""
      };
    default:
      return state;
  }
}

export function storeToken(token){
  debugger 
  if (sessionStorage){
    sessionStorage.setItem('app-token', token)
  }else{
    console.error("SessinStorage not supported... user token cannot be stored");
  }
}

export function getTokenFromSession(){
  debugger
  if (sessionStorage){
    let token = sessionStorage.getItem('app-token');
    return token;
  } else {
    return "";
  }
}