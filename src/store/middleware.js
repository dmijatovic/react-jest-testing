/**
 * REDUX custom middleware
 */


/**
  * Redux middleware is 'currying' function, 
  * top level passes getStore and dispatch functions of redux store 
  * mid level function passes call to the next middleware in the chain,
  * the last function passed is the dispatch function.
  * bottom level function passes the current action that needs to 
  * be included as parameter of next function (in order to pass action to next middleware)
  * main portion of the middleware code need to be placed in the body of the 'bottom level function' 
  * after middleware is applyed the next or dispatch function should be called
  * depending of the middleware (function) logic. 
*/

/**
 * This middleware does not do anything!
 * it just logs the top level params received from redux
 * and calls next middleware passing received action 
 * from redus or preceding middleware
 */
export function emptyMiddleware(params){
  //let { dispatch } = params;
  console.log ("asyncMiddleware...", params);
  //passes next middleware in the chain
  return next => {
    //passes action 
    //it needs to return next(action)
    return action => {
      //just pass it further
      next(action);
    }
  }
}
/**
 * Promise resolver handles async calls that use promises
 * note! short hand ES6 notication with single param
 * we still have 3 functions called (currying)
 * @param {*} param0 
 */
export const promiseResolver = ({dispatch}) => next => action =>{
  console.log ("promiseResolver...action...", action);
  if (action.payload && action.payload.then){
    //promise based payload we want to resolve
    action.payload.then((res)=>{
      //we dispatch new action
      dispatch({
        ...action,
        payload: res 
      });
    });

  }else{
    //not a promise based payload
    //pass it further
    next(action);
  }
}