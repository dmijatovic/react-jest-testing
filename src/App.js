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
import LoginPage from 'auth/LoginPage';
import LogoutPage from 'auth/LogoutPage';


export class App extends Component {
  getNavLinks(){
    let links = [
      <NavLink key="home" to="/home" className="btn btn-sm btn-nav">Home</NavLink>
    ];
    if (this.props.auth){
      links.push(
        <NavLink key="post" to="/post" className="btn btn-sm btn-nav">Add comment</NavLink>,
        <NavLink key="list" to="/list" className="btn btn-sm btn-nav">All comments</NavLink>,
        <NavLink key="logout" to="/logout" className="btn btn-sm btn-nav">Logout</NavLink>
      )
    }else {
      links.push(
        <NavLink key="login" to="/login" className="btn btn-sm btn-nav">Login</NavLink>
      )
    }
    //debugger
    return links;
  }
  render() {
    return (
      <div className="app-body">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React - Jest demo</h1>
        </header>
        <section className="app-navigation">
          {this.getNavLinks()}
        </section>      
        <section className="app-content">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/post" render={ props =>(
              <PageLoader>
                <AddComment {...props}/>
              </PageLoader>
            )}/>
            <Route path="/list" component={ViewComments} />
            <Route path="/login" component={LoginPage} />
            <Route path="/logout" component={LogoutPage} />
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

const mapStateToProps = state => {
  //debugger
  return {
    auth: state.auth.token!=null
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
  mapStateToProps, 
  mapActionsToProp
)(App);
