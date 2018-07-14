import React, { Component } from 'react';
import logo from './img/logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app-body">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React SCSS starter</h1>
        </header>
        <p className="app-intro">
          To get started, read README.md first to learn the possibilities.
          This project is based on ejected create-react-app setup. SCSS support is added to webpack.  
        </p>
        <p className="app-intro">
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
