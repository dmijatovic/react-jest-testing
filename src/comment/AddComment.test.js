import React from 'react';
import Adapter from 'setupEnzyme';
import { mount, shallow, render } from 'enzyme';

import AddComment from 'comment/AddComment';
import ReduxStore from 'store/redux';

/**
 * Here we should use shallow, but let test 
 * full DOM (mount) rendering by Enzyme
 * NOTE! when using mount make sure you unmount
 * the component to avoid potential problems
 * due to component having states mutated in some other test
 * NOTE2! when using mount from Enzyme JSDOM needs to initalized
 * this happens by passing --env=jsdom param in package.json 
 */

let component;
beforeEach(()=>{
  component = mount(
    <ReduxStore>
      <AddComment/>
    </ReduxStore>
  );
})

it('has 1 textarea element',()=>{
  //console.log(component);
  expect(component.find('textarea').length).toEqual(1);
});

it('has 1 button element',()=>{
  //console.log(component);
  expect(component.find('button').length).toEqual(1);
});


describe('User interaction',()=>{
  let val = "Test comment", textArea, form; 
  beforeEach(()=>{
    textArea = component.find('textarea');
    //provide fake event
    //simulate 'change' event
    //we use real DOM event names 
    //not React event names change <- onChange
    textArea.simulate('change',{target:{value:val}});
    //force component to update using Enzyme 
    component.update();
  });
  /**
   * Simulating input into textarea
   */
  it('user can enter input into textarea',()=>{
    //get reference to element
    //let val = "Test comment",
    //assert that value is changed
    //get reference to element again
    textArea = component.find('textarea');
    expect(textArea.prop('value')).toEqual(val);
  });


  it('clears text area after submit',()=>{
    //get reference to form element
    form = component.find('form');
    //SUBMIT FORM 
    form.simulate('submit');
    //run update
    component.update();
    //verify empty textarea
    textArea = component.find('textarea');
    expect(textArea.prop('value')).toEqual("");
  });
});


afterEach(()=>{
  component.unmount();
});