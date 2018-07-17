
import * as actionType from 'store/actionTypes';

/**
 * Action creator addComment
 * dispatch action to add comment 
 * @param comment:string 
 */
export const addComment = (comment) =>{
  console.log("addComment...", comment);
  return {
    type: actionType.ADD_COMMENT,
    payload: comment 
  }
}

export const deleteComment = (id) =>{
  console.log("deleteComment...", id);
  return {
    type: actionType.DELETE_COMMENT,
    payload: id
  }
}