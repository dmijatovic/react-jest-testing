//CONSTANTS

import * as actionType from './actionTypes';


// COMMENTS REDUCER function
export default (state=[], action) => {
  //logger ("commentsReducer...", state, action);
  //debugger
  switch(action.type){
    case actionType.ADD_COMMENT:
      return [
        ...state,
        //add
        action.payload
      ]
    case actionType.DELETE_COMMENT:
      //debugger
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ]

    case actionType.FETCH_COMMENTS:
      //debugger 
      //redux-promise middleware we return data prop 
      //in the payload. What about errors?
      let data = action.payload.data.map((d)=>{
        return d.name
      });
      return [
        ...state,
        ...data 
      ]
    case actionType.CLEAR_COMMENTS:
      //clear all comments
      return [];
    default:
      return state;
  }
}

/*
const logger = (reducer, state, action) =>{
  console.group(reducer);
  console.log("state...", state);
  console.log("action...", action);
  console.groupEnd();
}*/