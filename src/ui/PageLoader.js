import React from 'react';

import {connect} from 'react-redux';

import Loader from './Loader';
import { hideLoader } from 'store/actions';

export class PageLoader extends React.Component{

  componentDidMount(){
    /**
     * Set timeout on loader to 5sec,
     * if loader is still shown we will remove it
     */
    setTimeout(()=>{
      if (this.props.loader.show){
        console.log("PageLoader timeout expired...");
        this.props.onTimeoutExpired();
      }
    },5000);
  }

  getContent=()=>{
    if (this.props.loader.show){
      return <Loader type={this.props.loader.type}/>;
    }else{
      return this.props.children;
    }
  }

  render(){
    return(
      <React.Fragment>
        {this.getContent()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  //debugger 
  return {
    loader: state.loader 
  }
}

const mapActionToProps = dispatch =>{
  return {
    onTimeoutExpired: () => dispatch(hideLoader())
  }
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(PageLoader);