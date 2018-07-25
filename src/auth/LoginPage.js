import React from 'react';

//import { reduxForm } from 'redux-form/immutable';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import * as actions from 'store/actionAuth';

import './LoginPage.scss';

import ToggleSwitch from 'ui/ToggleSwitch';

class LoginPage extends React.Component{
  state={
    signType: 'Sign in',
    labelON: 'Sign in',
    labelOFF: 'Sign up'
  }
  /**
   * Check props after update 
   */
  componentDidUpdate(){
    //we check on component update
    //if user is logged in 
    //this info comes from redux
    //see mapStateToProps
    this.checkAuth();
  }
  /**
   * Check if user authenticated
   * note! this comes from redux 
   * 
   */
  checkAuth(){
    if (this.props.authenticated){
      console.log("User authenticated we send him to...home?");
      this.props.history.push("/home");
    }else{
      console.log("User not authenticated");
    }
  }

  onSubmit = (formProps) =>{
    //console.log("LoginPage.props...", this.props);
    //console.log("onSubmit...", formProps);
    if (this.state.signType===this.state.labelON){
      this.props.signIn(formProps);
    }else{
      this.props.signUp(formProps);
    }
  }

  toggleSignType = value =>{
    //debugger
    console.log("Toggle state...", value);
    this.setState({
      signType: value 
    });
  }
  sendToHome(){
    this.props.history.push('/home');
  }
  render(){
    //take ref to handleSubmit function 
    //provided by Redux form
    //and pass it to onSubmit form
    const { handleSubmit, pristine, submitting } = this.props;
    return(
      <section className="login-page">

        <div className="login-message">
          {this.props.errorMsg}
        </div>
        
        <ToggleSwitch
          className = "login-toggle"
          labelON = {this.state.labelON}
          labelOFF = {this.state.labelOFF}
          initVal = { this.state.signType }
          onToggleState = {this.toggleSignType} />

        <h1 className="login-title"> {this.state.signType} </h1>
     
        <form className="login-form" 
          onSubmit={ handleSubmit(this.onSubmit) }>
          
          <fieldset className="login-fieldset">
            {/*<label className="login-label">Email</label>*/}
            <Field
              className = "login-input"
              name="email"
              type="email" 
              component="input"
              autoComplete="none"
              placeholder="Your e-mail address"
            />
          </fieldset>
          <fieldset className="login-fieldset">
            {/*<label className="login-label">Password</label>*/}
            <Field 
              className = "login-input"
              name="password"
              type="password"
              component="input"
              autoComplete="none"
              placeholder="Your password"
              min="8"
            />
          </fieldset>

          <div className="login-nav">
            <button className="btn btn-sm btn-primary"
              disabled={pristine || submitting}>Submit</button> 
          </div>
        </form>
      </section>
    )
  }
}

const mapStateToProps = state =>{
  //debugger
  return {
    errorMsg: state.auth.err.responseText,
    authenticated: state.auth.token != null
  }
}

 /**
  * Using redux compose to combine HOC
  * redux connect & reduxForm
  * note! connect second parameter maps actions to 
  * component props, this can be done with helper functions
  * or like here by simply proving action creators which are 
  * directly mapped to props using same names 
  * (eg action signIn -> this.props.signIn) 
  * note! reduxForm prop that needs to be form
  * see combineReducers
  */
export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm(
    {form:'login'}  
  )
)(LoginPage);
