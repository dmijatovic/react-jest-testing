import React from 'react';

import PageLoader from 'ui/PageLoader';

export const Home = (props) => (
  <PageLoader>
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
      <p className="page-paragraph">
        In addition to functional HOC authGuard there is also page loader 
        (auxillary) component that can be used to wrap a child (content) component. 
        PageLoader component is integrated with the redux store and has its own
        actions (show/hide loader and set loader type).
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

      <h3 className="page-subtitle">Authentication with JWT and Passport</h3>
      <p className="page-paragraph">
        In the auth branch there is a authorization demo using JWT. 
        This project holds react part of the authorization. 
        Another project <a href="https://github.com/dmijatovic/node-mongo-auth-api">
        node-mongo-auth-api</a> is used by this front-end to connect to 
        back-end api. Both projects are assumend to be running on same machine and on the localhost. 
        Backend api runs on port 3001 while front-end runs on port 3000. 
        See backend project on how you can set-up this part. 
        Note that backend consist of nodejs, express and mongodb and 
        that mongodb is setup using Docker.
      </p>
    </div>
  </PageLoader>
);

export default Home;