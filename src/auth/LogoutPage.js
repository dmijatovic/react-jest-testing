import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'store/actionAuth';

class LogoutPage extends React.Component{
  componentDidMount(){
    //console.log("Logoutpage...props...", this.props);
    //logout user - dispatch?
    this.props.authLogout();
  }
  logoutMsg(){
    if (this.props.auth){
      return(
        <p>You are still logged in!</p>
      )
    }else{
      return(
        <p>Log out succesful!</p>
      )
    }
  }
  render(){
    return(
      <div>
        <h1>Logout page</h1>
        {this.logoutMsg()}
      </div>
    )
  }
}

const mapStateToProps = state =>{
  //debugger
  return {
    auth: state.auth.token!=null
  }
}

export default connect(
  mapStateToProps, 
  actions 
)(LogoutPage);

