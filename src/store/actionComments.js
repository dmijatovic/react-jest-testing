import axios from 'axios';
import * as actionType from 'store/actionTypes';

/**
 * Action creator addComment
 * dispatch action to add comment 
 * @param comment:string 
 */
export const addComment = (comment) =>{
  //console.log("addComment...", comment);
  return {
    type: actionType.ADD_COMMENT,
    payload: comment 
  }
}
/**
 * delete Comment action (creator)
 * @param id:number, comment position in the arrray
 */
export const deleteComment = (id) =>{
  //console.log("deleteComment...", id);
  return {
    type: actionType.DELETE_COMMENT,
    payload: id
  }
}

/**
 * Async action using axios
 */
export const fetchComments = () =>{
  const url = 'http://jsonplaceholder.typicode.com/comments';
  const resp = axios.get(url);

  return {
    type: actionType.FETCH_COMMENTS,
    payload: response
  }
}