import React from 'react';

import {connect} from 'react-redux';
import { authLogin, authLogout } from "store/actionAuth";
class AuthPage extends React.Component{
  render(){
    return(
      <h1>Login page</h1>
    )
  }
}

const mapStateToProps = state =>{
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