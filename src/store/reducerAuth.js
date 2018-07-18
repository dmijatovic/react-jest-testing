

import * as actionType from './actionTypes';

const initState={
  allow: true,
  loginPath: 'auth'
}

export default (state=initState, action)=>{
  switch(action.type){
    case actionType.AUTH_LOGIN:
      return {
        ...state,
        allow: action.payload 
      };
    case actionType.AUTH_LOGOUT:
      return {
        ...state,
        allow: action.payload 
      };
    default:
      return state;
  }
}