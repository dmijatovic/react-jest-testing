import React from 'react';
import { Provider }from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { emptyMiddleware, promiseResolver } from './middleware';
//import reduxPromise from 'redux-promise';
import reducers from './reducers';

/**
 * REDUX store integration incl. integration for testing purposes
 * Props on this components are destructured to enable passing
 * children component (App) and capturing initialState with default value.
 * In test initalState props is used to create desired test data in redux store
 * that is passed to the component by redux store
 */
export default ({ children, initialState={} }) => {
  const reduxStore = createStore(
    reducers, 
    initialState,
    applyMiddleware(
      emptyMiddleware,
      promiseResolver
    )
  )
  return(
    <Provider store={reduxStore}>
      { children }
    </Provider>
  )
}