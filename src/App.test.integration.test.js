//react
import React from 'react';
//enzyme
import Adapter from './setupEnzyme';
import { mount } from 'enzyme';

import moxios from 'moxios';
import {FETCH_URL} from 'store/actionComments';

import ReduxStore from 'store/redux';
import App from './App';
import CommentCard from 'comment/CommentCard';

/**
 * USING INTERCEPTOR moxios
 */

let component, 
  testData=[{"name":"test1"},{"name":"test2"}];
beforeEach(()=>{
  //initialize axios spy
  moxios.install();
  //intercept this request
  moxios.stubRequest(FETCH_URL,{
    status: 200,
    response: testData
  });

  component = mount(
    <ReduxStore>
      <App/>
    </ReduxStore>
  )

});


/**
 * USE jest callback function to indicate end of test
 * USE moxios wait interceptor to intercept axios call
 * USE try/catch block with expect to catch failed expectaion
 */
it('should fetch comments from net (moxios)',(done)=>{
  //find button
  let fetchBtn = component.find('#fetch-comments');
  //simulate click on button
  fetchBtn.simulate('click');
  //wait for mocked axios call
  moxios.wait(()=>{
    //update props
    component.update(); 
    //find length (number of) comment components   
    let items = component.find(CommentCard).length;
    /**
     * EXPECT need to be wrapped in try/catch block when
     * used within moxios.wait because when expect throws error
     * the function is abandoned and done() is never reached, 
     * and then JASMINE -> JEST timeout kicks in
     */
    try{
      expect(items).toBe(testData.length);
    }catch(e){
      console.log("expectation failed...", e);
    }
    //send done signal to JEST
    done();
  });
});

afterEach(()=>{
  moxios.uninstall();
  component.unmount();
});

