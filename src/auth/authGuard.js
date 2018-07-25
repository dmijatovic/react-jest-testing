import React from 'react'

import {connect} from 'react-redux'

/**
 * HOC - Higher Order Component - Composition
 * NOTE! HOC needs to pass all parent props down to child
 * @param ChildComponent: class, child component that needs to be protected
 * 
 */
const AuthGuard = (ChildComponent) => {
  console.log("AuthGuard...init");
  class ComposedComponent extends React.Component{
    componentDidMount(){
      console.log("HOC...AuthGuard...props...", this.props);
      this.shouldNavigateAway();
    }
    componentDidUpdate(){
      this.shouldNavigateAway();
    }
    shouldNavigateAway(){
      //debugger
      if (this.props.auth){
        console.log("Authorized");
      }else{
        console.log("Not authorized");
        //redirect to auth page
        this.props.history.push(this.props.auth.loginPath);
      }
    }
    render(){
      return <ChildComponent {...this.props} />
    }
  }
  /**
   * Get auth property from redux store
   * and pass it as prop.auth into component
   * @param {*} state: object, redux store 
   */
  function mapStateToProps(state){
    return {
      auth: state.auth.token!=null
    }
  }
  /**
   * Return HOC which is connected to redux store
   * and has latest auth prop 
   * and which passes all props (incl auth to its child too)
   */
  return connect(
    mapStateToProps
  )(ComposedComponent);
}

export default AuthGuard;