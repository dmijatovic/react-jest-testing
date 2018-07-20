//React
import React, { Component } from 'react';
import { Switch, Route, NavLink, Link } from 'react-router-dom';
//Redux
import {connect} from 'react-redux';
import { fetchComments } from 'store/actions';
//App local
import logo from 'img/logo.svg';
import 'App.scss';

import PageLoader from 'ui/PageLoader';
import Home from 'home/home';
import AddComment from 'comment/AddComment';
import ViewComments from 'comment/ViewComments';
import AuthPage from 'auth/AuthPage';

export class App extends Component {
  getNavLinks(){
    return (
      <section className="app-navigation">
        <NavLink to="/home" className="btn btn-sm btn-nav">Home</NavLink>
        <NavLink to="/post" className="btn btn-sm btn-nav">Add comment</NavLink>
        <NavLink to="/list" className="btn btn-sm btn-nav">All comments</NavLink>
        <NavLink to="/auth" className="btn btn-sm btn-nav">Login</NavLink>
      </section>
    )
  }
  render() {
    return (
      <div className="app-body">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React - Jest demo</h1>
        </header>
        
        {this.getNavLinks()}
                
        <section className="app-content">
          <Switch>
            <Route path="/post" render={ props =>(
              <PageLoader>
                <AddComment {...props}/>
              </PageLoader>
            )}/>
            <Route path="/list" component={ViewComments} />
            <Route path="/home" component={Home} />
            <Route path="/auth" component={AuthPage} />
            <Route path="/" exact component={Home} />
          </Switch>  
          {/*
          <AddComment className="app-add-comment"/>
          <ViewComments className="app-view-comments"/>  
          */}        
        </section>
        
      </div>
    );
  }
}
/**
 * Remeber to execute inner function in dispatch
 * @param {*} dispatch 
 */
const mapActionsToProp = dispatch =>{
  return {
    onFetchComment: () => dispatch(fetchComments())
  }
}

export default connect(
  null, mapActionsToProp
)(App);
