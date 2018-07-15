import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import AddComment from './comment/AddComment';


let div;
beforeEach(()=>{
  div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders without crashing', () => { 
  expect(div).toBeTruthy();
});

it('has add comment box', () => { 
  expect(div.innerHTML).toContain(AddComment({className:"app-add-comment"}));
});

it('has view comments box', () => { 
  expect(div.innerHTML).toContain("View comments");
});

afterEach(()=>{
  ReactDOM.unmountComponentAtNode(div);
});



