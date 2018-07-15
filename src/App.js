import React, { Component } from 'react';
import logo from 'img/logo.svg';
import 'App.scss';

import AddComment from 'comment/AddComment';
import ViewComments from 'comment/ViewComments';

class App extends Component {
  render() {
    return (
      <div className="app-body">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React - Jest demo</h1>
        </header>
        <section className="app-content">
          <AddComment className="app-add-comment"/>
          <ViewComments className="app-view-comments"/>
        </section>
      </div>
    );
  }
}

export default App;
