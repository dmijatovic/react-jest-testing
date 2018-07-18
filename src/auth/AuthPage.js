import React from 'react';

import {connect} from 'react-redux';
import { authLogin, authLogout } from "store/actionAuth";
class AuthPage extends React.Component{
  isAuthenticated=()=>{
    if (this.props.auth.allow){
      return <span>YES</span>;
    }else{
      return <span>NO</span>;
    }
  }
  render(){
    return(
      <div className="auth-page-wrapper">
        <h1 className="page-title">Simple Login page</h1>
        <p className="page-paragraph">
          This page serves the purpose of changin redux login flag. 
          Use buttons to set authenticated state of user. Based on 
          that info HOC authGuard will allow use access to specific 
          page. If user is not authorized HOC will send user to this page.
        </p>
        <h4 className="page-subtitle">User authenticated: { this.isAuthenticated() }</h4>  
        <p className="page-paragraph">
          <button className="btn btn-sm btn-primary r-m-1"
            onClick={this.props.onLogin}>Login
          </button>

          <button className="btn btn-sm btn-white"
            onClick={this.props.onLogout}>Logout
          </button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  //debugger
  return {
    auth: state.auth 
  }
}

const mapActionToProps = dispatch =>{
  return {
    onLogin: () => dispatch(authLogin()),
    onLogout: () => dispatch(authLogout())
  }
}


export default connect(
  mapStateToProps,
  mapActionToProps 
)(AuthPage)