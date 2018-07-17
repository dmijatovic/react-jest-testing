import React from 'react';

import './AddComment.scss';

import {connect} from 'react-redux';
import { addComment } from 'store/actions';

/* sample functional component
export default (props) => {
  return (
    <div className={props.className}>
      <label>Type your comment here</label>
      <textarea className="add-comment-input" />
      <button className="btn add-comment-btn">Save</button> 
    </div>
  )
}*/ 

class AddComment extends React.Component{
  state={comment:""}

  componentDidMount(){
    this.shouldNavigateAway();
  }
  componentDidUpdate(){
    this.shouldNavigateAway();
  }

  shouldNavigateAway(){
    if (this.props.auth){
      console.log("Authorized");
    }else{
      console.log("Not authorized");
      //redirect to auth page
      this.props.history.push("auth");
    }
  }

  handleChange = event => {
    this.setState({comment: event.target.value });
  }

  handleSubmit = event =>{
    //prevent reloading page
    event.preventDefault();
    //console.log("handleSubmit...", this.state.comment);
    this.props.addComment(this.state.comment);
    //clean text component 
    this.setState({comment:''});
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} 
        className="app-add-comment">

        <label className="add-comment-label">Type your comment below</label>
        <textarea 
          className="add-comment-input"
          value = {this.state.comment}
          onChange = {this.handleChange} />
        <button className="btn btn-white add-comment-btn">Save</button> 
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  //debugger 
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  //debugger 
  return{
    addComment: (comment) => dispatch(addComment(comment))
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(AddComment);