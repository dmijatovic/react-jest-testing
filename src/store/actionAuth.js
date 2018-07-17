
import * as actionType from './actionTypes';

export const authLogin=()=>{
  return {
    type: actionType.AUTH_LOGIN,
    payload: true  
  }
}

export const authLogout=()=>{
  return {
    type: actionType.AUTH_LOGOUT,
    payload: false
  }
}