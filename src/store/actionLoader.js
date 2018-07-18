
import * as actionType from './actionTypes';

export const showLoader=()=>{
  //debugger
  return {
    type: actionType.SHOW_LOADER,
    payload: true  
  }
}

export const hideLoader=()=>{
  //debugger
  return {
    type: actionType.HIDE_LOADER,
    payload: false
  }
}

export const setLoaderType=(type)=>{
  //debugger
  return {
    type: actionType.SET_LOADER_TYPE,
    payload: type
  }
}