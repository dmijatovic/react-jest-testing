//React
import React, { Component } from 'react';
//Redux
import {connect} from 'react-redux';
import { fetchComments } from 'store/actions';
//App local
import logo from 'img/logo.svg';
import 'App.scss';
import AddComment from 'comment/AddComment';
import ViewComments from 'comment/ViewComments';

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
          <button className="btn btn-sm btn-nav"
            id="fetch-comments"
            onClick={this.fetchComments}>Fetch comments
          </button>
        </section>
        
        <section className="app-content">
          <AddComment className="app-add-comment"/>
          <ViewComments className="app-view-comments"/>          
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
