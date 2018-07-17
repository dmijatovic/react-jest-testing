import React from 'react';
import { Provider }from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

//create store with reducers and initial 
//value 
let myStore = createStore(reducers, {});

export default (props)=>{
  return(
    <Provider store={myStore}>
      { props.children }
    </Provider>
  )
}