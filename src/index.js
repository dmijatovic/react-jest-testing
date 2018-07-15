import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider }from 'react-redux';
import { createStore } from 'redux';
import reducers from 'store/reducers';

//create store with reducers and initial 
//value 
let myStore = createStore(reducers, {});

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
