import React from 'react';

import {connect} from 'react-redux';
import {
  fetchComments, clearComments,
  deleteComment} from 'store/actions';

import AuthGuard from 'auth/authGuard';
import CommentCard from 'comment/CommentCard';
import './ViewComments.scss';

export class ViewComments extends React.Component{
  loadComments = () =>{
    if (this.props.comments.length==0){
      return (<h1>No comments to show, try Fetch or ADD COMMENT.</h1>);
    }else {
      return(
        this.props.comments.map((item, index)=>{
          return (<CommentCard 
            id={index}
            comment={item}
            key={index}
            onDeleteComment={() => this.props.onDeleteComment(index)} />)
        }) 
      )
    }
  }
  /* passed on directly into child as prop
  deleteComment=(id)=>{
   // console.log("deleteComment...", id);
   this.props.onDeleteComment(id);
  }*/
  render(){
    return(
      <section className="page-wrapper">
        <div className="page-header">
          <h1>
            Comments ({this.props.comments.length})
          </h1>
          <div className="page-nav">
            <button className="btn btn-sm btn-white r-m-1"
              id="fetch-comments"
              onClick={this.props.onFetchComments}>Fetch comments
            </button>
            <button className="btn btn-sm btn-scondary"
              id="fetch-comments"
              onClick={this.props.onClearComments}>Clear All
            </button>
          </div>
        </div>
        <div className="app-view-comments-container">
          {this.loadComments()}
        </div>
      </section>
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
    onFetchComments: () => dispatch(fetchComments()),
    onDeleteComment: (id) => dispatch(deleteComment(id)),
    onClearComments: () => dispatch(clearComments()),
  }
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(AuthGuard(ViewComments))