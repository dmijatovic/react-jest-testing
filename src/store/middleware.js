/**
 * REDUX custom middleware
 */


 /**
  * AsyncMiddleware handles async calls that use promises, 
  * it resolves the promise and passes the outcome. 
  * Redux middleware is currying function, 
  * top level passes store and dispatch action 
  *  
  */
export function asyncMiddleware(params){
  let { dispatch } = params;
  console.log ("asyncMiddleware")
  //passes next middleware in the chain
  return next => {
    
    //passes action 
    //it needs to return next(action)
    return action => {

    }
  }
}