//React
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
//Redux
import {connect} from 'react-redux';
import { fetchComments } from 'store/actions';
//App local
import logo from 'img/logo.svg';
import 'App.scss';

import Home from 'home/home';
import AddComment from 'comment/AddComment';
import ViewComments from 'comment/ViewComments';
import AuthPage from 'auth/AuthPage';

export class App extends Component {
  fetchComments = () => {
    //console.log("fetch Comments"); 
    this.props.onFetchComment();
  }
  render() {
    return (
      <div className="app-body">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React - Jest demo</h1>
        </header>
        
        <section className="app-navigation">
          <Link to="home" className="btn btn-sm btn-nav" tag="button">Home</Link>
          <Link to="post" className="btn btn-sm btn-nav" >Add comment</Link>
          <Link to="list" className="btn btn-sm btn-nav" >All comments</Link>
          <Link to="auth" className="btn btn-sm btn-nav" >Login</Link>
          
          {/*
          <button className="btn btn-sm btn-nav"
            id="fetch-comments"
            onClick={this.fetchComments}>Fetch comments
          </button>
          */}
        </section>
        
        <section className="app-content">
          
          <Route path="/post" component={AddComment} />
          <Route path="/list" component={ViewComments} />
          <Route path="/home" component={Home} />
          <Route path="/auth" component={AuthPage} />
          <Route path="/" exact component={Home} />
          
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
