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
 * at this stage we assign axios promise to be payload of the action
 */
export const FETCH_URL = 'http://jsonplaceholder.typicode.com/comments'; 
export const fetchComments = () =>{
  const httpGet = axios.get(FETCH_URL);
  //debugger
  return {
    type: actionType.FETCH_COMMENTS,
    payload: httpGet
  }
}