//react
import React from 'react';
//enzyme / jest
import Adapter from 'setupEnzyme';
import { shallow, mount } from 'enzyme';

//local components
import ReduxStore from 'store/redux';
import ViewCommentsRedux from 'comment/ViewComments'; 
import { ViewComments } from 'comment/ViewComments';
import CommentCard from 'comment/CommentCard';

let component; 
/**
 * SHALLOW component test / ISOLATED test
 * we only test component class without integration with redux
 * Note1: class component need to be exported as plain class 
 * Note2: class component need to be imported here as plain class
 * Note3: props to test need to be passed during shallow class cration 
 */
it ('should create component',()=>{
  let data=[];
  component = shallow (<ViewComments comments={data}/>);
  expect(component).toBeTruthy();
})

/**
 * Deep / render method 
 * incl. testing integration with redux store mapStateToProps function
 */
describe ('CommentCard component creation',()=>{
  let data = ['test 1', 'test 2'];
  beforeEach(()=>{
    let state={
      comments: data 
    };
    component = mount (
      <ReduxStore initialState={state}>
        <ViewCommentsRedux />
      </ReduxStore>);
  })
  
  it ('should create 2 comment cards',()=>{
    //finding the classes used on component;
    //expect(component.find('.comment-card').length).toBe(2);
    //more stabile: chechking for rendering 2 components
    //note class reference instead of jsx tag
    expect(component.find(CommentCard).length).toBe(2);
    //unmount 
  });

  it ('should contain comment text',()=>{
    //render component and pick rendered text
    let cheerioWrapper = component.render().text();
    //console.log(cheerioWrapper);
    expect(cheerioWrapper).toContain(data[0]);
    expect(cheerioWrapper).toContain(data[1]);
  });

  afterEach(()=>{
    component.unmount();
  });
});
