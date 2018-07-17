import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/index.scss';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

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
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </ReduxStore>, 
  document.getElementById('root')
);

registerServiceWorker();
