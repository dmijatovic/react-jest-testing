import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ReduxStore from './store/redux';
/*
import { Provider }from 'react-redux';
import { createStore } from 'redux';
import reducers from 'store/reducers';

//create store with reducers and initial 
//value 
let myStore = createStore(reducers, {});
*/

ReactDOM.render(
  <ReduxStore>
    <App />
  </ReduxStore>, 
  document.getElementById('root')
);

registerServiceWorker();
