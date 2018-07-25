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
    labelOFF: 'Sign up',
    errMsg:''
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
    console.log("onSubmit...", formProps);
    //reset error message on new attempt
    if (this.state.errMsg){
      this.setState({
        errMsg: null
      });
    }
    if (this.state.signType===this.state.labelON){
      this.props.signIn(formProps);
    }else{
      //validate pasword
      //debugger
      let msg = validatePassword(formProps); 
      if (msg){
        this.setState({
          errMsg: msg 
        });
      }else{
        this.props.signUp(formProps);
      }
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

  getInputFields(){
    
    //SIGN IN
    let fields=[
      <fieldset className="login-fieldset"
        key="email">
        {/*<label className="login-label">Email</label>*/}
        <Field
          className = "login-input"
          name="email"
          type="email" 
          component="input"
          autoComplete="none"
          placeholder="Your e-mail address"
        />
      </fieldset>,
      <fieldset className="login-fieldset"
        key="password">
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
    ]
    //debugger
    //IIF SIGNUP add field
    if (this.state.signType===this.state.labelOFF){
      fields.push(
        <fieldset className="login-fieldset"
          key="confirmPassword">
          {/*<label className="login-label">Password</label>*/}
          <Field 
            className = "login-input"
            name="confirmPassword"
            type="password"
            component="input"
            autoComplete="none"
            placeholder="Confirm password"
            min="8"
          />
        </fieldset>
      )
    }
    //return all fields to display
    return fields;
  }
  render(){
    //take ref to handleSubmit function 
    //provided by Redux form
    //and pass it to onSubmit form
    const { handleSubmit, pristine, submitting } = this.props;
    //console.log("Login..render..props", this.props);
    return(
      <section className="login-page">

        <div className="login-message">
          <p>
            {this.props.errorMsg}
            {this.state.errMsg}
          </p>
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

          {this.getInputFields()}
          
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
 * Custom form validation funcion as middleware with redux-form
 * This function returns errors object with the same (all) props
 * we receive passed in formProps
 * NOTE! This function is not implemented completelly
 * see: https://redux-form.com/7.4.2/examples/syncvalidation/
 */
const formValidation = (formProps) =>{
  const errors={};
  let msg;

  console.log("Validate...", formProps);
  //debugger 
  //valida email
  if (formProps.email){
    msg = validateEmail(formProps.email)
    if (msg){
      errors['email'] = msg;
    }
  }

  if (formProps.password){
    msg = validatePassword(formProps)
    if (msg){
      errors['password'] = msg;
    }
  }

  return errors;
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
  reduxForm({
    form:'login',
    //pass validation function
    //validate: formValidation
  })
)(LoginPage);



/**
 * Some basic email validation 
 * @param {*} email: string, valid email 
 */
function validateEmail(email){
  if (email.indexOf("@")===-1){
    return 'Provide valid email: missing @';
  }

  if (email.length < 7){
    return 'Provide valid email: length < 7';
  }

  return null;
}

/**
 * Basic password validation
 * @param {*} form 
 */
function validatePassword(form){
  //debugger 
  if (form.password.length < 8){
    return 'Provide valid password: length < 8';
  }
  if (form.password && form.confirmPassword && 
    (form.password !== form.confirmPassword)){
      return 'Confirmed password does not match provided password';
  }
  return null;
}
