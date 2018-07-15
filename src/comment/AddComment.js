import React from 'react';

import './AddComment.scss';

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

  handleChange = event => {
    this.setState({comment: event.target.value });
  }

  handleSubmit = event =>{
    //prevent reloading page
    event.preventDefault();
    //console.log("handleSubmit...", this.state.comment);
    //clean text component 
    this.setState({comment:''});
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} 
        className={this.props.className}>

        <label className="add-comment-label">Type your comment below</label>
        <textarea 
          className="add-comment-input"
          value = { this.state.comment }
          onChange={this.handleChange} />
        <button className="btn btn-white add-comment-btn">Save</button> 
      </form>
    )
  }
}

export default AddComment;