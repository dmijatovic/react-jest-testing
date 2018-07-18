import React from 'react';

export default (props) => (
  <div className="home-page">
    <h1 className="page-title">Home Page</h1>
    <p className="page-paragraph">
     Welcome to react-redux demo. This demo contains testing of 
     initial components and the connection to redux store. Further,
     it contains HOC authGurad and custom redux middleware. 
     Each demo/test has its own branch, but it represents a 
     continuation of previous branch (test). 
    </p>
    <h3 className="page-subtitle">Testing react and redux with JEST & Enzyme</h3>
    <p className="page-paragraph">
      Tests are avaliable in all branches because this was first
      feature we started demoing (testing).
    </p>
    <h3 className="page-subtitle">HOC - authGuard</h3>
    <p className="page-paragraph">
      Higher Order Component (Composition) is avaliable in hoc branch. 
      This HOC will allow access to child component based on auth 
      state received from redux store. If user is not authenticated it 
      will be redirected to login page. On the login page (path=auth) 
      you can change auth state to be logged in or logged out by clicking
      on the specific button. The purpose of this demo is testing HOC 
      component and redux store integration.  
    </p>
  </div>
);