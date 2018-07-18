import React from 'react';

import PageLoader from 'ui/PageLoader';

export const Home = (props) => (
  <PageLoader {...props}>
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
      <h3 className="page-subtitle">Custom Redux Middleware - promiseResolver</h3>
      <p className="page-paragraph">
        The branch middleware holds the code of custom Redux middleware.
        The middleware code is stored in the store/middleware.js file. 
        There are 2 middleware functions applyed (store/redux.js): 
        emptyMiddleware (does not do much) and promiseResolver middleware.
      </p><p className="page-paragraph">
        <b>promiseResolver:</b> this middleware inspects the payload for 'then' property/function.
        If payload has then function, it will resolve promise and dispatch new action, 
        with the same action.type (name) but with resolved payload. In this example we 
        use promiseResolver middleware to execute axios.get request to pull 500 comments 
        from an open api avaliable for testing purposes. After axios promise is resolved
        promiseResolver will dispatch new action (but with same type) and replace payload 
        with actual response returned from axios. Note that error response is also included
        as payload. 
      </p>
    </div>
  </PageLoader>
);

export default Home;