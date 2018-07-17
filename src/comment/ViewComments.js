import React from 'react';

import {connect} from 'react-redux';
import {deleteComment} from 'store/actions';

import CommentCard from 'comment/CommentCard';
import './ViewComments.scss';
/*
export default (props) => {
  return <div className={props.className}>View comments component</div>
}*/

export class ViewComments extends React.Component{
  loadComments = () =>{
    return(
      this.props.comments.map((item, index)=>{
        return (<CommentCard 
          id={index}
          comment={item}
          key={index}
          deleteComment={this.deleteComment} />)
      }) 
    )
  }
  deleteComment=(id)=>{
    console.log("deleteComment...", id);
  }
  render(){
    return(
      <div className={this.props.className}>
        <h3 className="app-view-comments-title">Comments</h3>
        <div className="app-view-comments-container">
         
          {this.loadComments()}
         
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    comments: state.comments
  }
}

const mapActionToProps = dispatch =>{
  return {
    deleteComment: (id) => dispatch(deleteComment(id))
  }
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(ViewComments)