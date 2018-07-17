

import * as actionType from './actionTypes';

export default (state=false, action)=>{
  switch(action.type){
    case actionType.AUTH_LOGIN:
      return action.payload;
    case actionType.AUTH_LOGOUT:
      return action.payload;
    default:
      return state;
  }
}