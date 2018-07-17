//CONSTANTS

import * as actionType from './actionTypes';


// COMMENTS REDUCER function
export default (state=[], action) => {
  logger ("commentsReducer...", state, action);
  debugger
  switch(action.type){
    case actionType.ADD_COMMENT:
      return [
        ...state,
        //add
        action.payload
      ]
    case actionType.DELETE_COMMENT:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ]
    default:
      return state;
  }
}


const logger = (reducer, state, action) =>{
  console.group(reducer);
  console.log("state...", state);
  console.log("action...", action);
  console.groupEnd();
}