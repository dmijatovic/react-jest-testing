
import * as actionType from './actionTypes';

export const authLogin=()=>{
  //debugger
  return {
    type: actionType.AUTH_LOGIN,
    payload: true  
  }
}

export const authLogout=()=>{
  //debugger
  return {
    type: actionType.AUTH_LOGOUT,
    payload: false
  }
}