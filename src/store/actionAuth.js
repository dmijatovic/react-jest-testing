import axios from 'axios';
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

/**
 * SignIn action creator using redux-thunk middleware
 * to return function as action instead 
 * of the object. We then receive dispatch
 * method from store we can use to dispatch
 * multiple actions. 
 * @param {*} form.email: string 
 */
export const signIn=({email,password}) => dispatch => {
  //debugger
  makePostRequest('http://localhost:3001/signin',{
    email,
    password
  }).then((d)=>{
    //dispatch token
    dispatch({
      type: actionType.SIGN_IN_OK,
      payload: d.data.token
    });
  }).catch((e)=>{
    //dispatch error
    dispatch({
      type: actionType.SIGN_IN_ERR,
      payload: getAxiosErrPayload(e)
    });
  });
};

export const signUp=({email,password}) => dispatch => {
  makePostRequest('http://localhost:3001/signup',{
    email,
    password
  }).then((d)=>{
    console.log("d");
    //dispatch token
    dispatch({
      type: actionType.SIGN_UP_OK,
      payload: d.data.token
    });
  }).catch((e)=>{
    debugger
    //dispatch error
    dispatch({
      type: actionType.SIGN_UP_ERR,
      payload: getAxiosErrPayload(e)
    });
  });
};

function makePostRequest(url,payload){
  return axios.post(url,payload); 
}

function getAxiosErrPayload(err){
  debugger
  if (err.response) {
    if (err.response.status===401){
      //console.error("401 - username or password incorrect");
      return {
        status: 401,
        responseText: "Username or password incorect"
      }
    } else if (err.response.status===422){
      //console.error("422 - signup process failed ");
      return {
        status: err.response.data.status,
        responseText: err.response.data.msg
      }
    }else{
      console.error(err);
      return {
        status: err.response.status,
        responseText: err.response.statusText
      }
    }
  } else {
    return {
      status: 500,
      responseText: err.message
    }
  }
}