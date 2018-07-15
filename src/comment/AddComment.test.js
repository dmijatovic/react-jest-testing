import React from 'react';
import Adapter from 'setupEnzyme';
import { mount, shallow, render } from 'enzyme';

import AddComment from 'comment/AddComment';

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
  component = mount(<AddComment/>);
})

it('has 1 textarea element',()=>{
  //console.log(component);
  expect(component.find('textarea').length).toEqual(1);
});

it('has 1 button element',()=>{
  //console.log(component);
  expect(component.find('button').length).toEqual(1);
});

afterEach(()=>{
  component.unmount();
});