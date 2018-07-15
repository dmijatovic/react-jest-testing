import React from 'react';
import Adapter from 'setupEnzyme';
import { shallow } from 'enzyme';

import App from 'App';
import AddComment from 'comment/AddComment';
import ViewComments from 'comment/ViewComments';

let wrapper;
beforeEach(()=>{
  wrapper =  shallow(<App />);
  //div = document.createElement('div');
  //ReactDOM.render(<App />, div);
});

it('renders without crashing', () => { 
  expect(wrapper.instance()).toBeTruthy();
});

it('has 1 AddComment component', () => { 
  expect(wrapper.find(AddComment).length).toEqual(1);
});

it('has 1 ViewComments component', () => { 
  expect(wrapper.find(ViewComments).length).toEqual(1);
});


afterEach(()=>{
  wrapper = null;
});



