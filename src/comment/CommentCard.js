import React from 'react';

import 'comment/CommentCard.scss';

export default (props)=>{
  return(
    <section className="comment-card">
      <header className="comment-card-header">
        <h4>
          id: {props.id}
        </h4>
        <button 
          className="btn comment-card-btn"
          onClick={props.onDeleteComment}>X</button>
      </header>
      <article className="comment-card-body">
        <p>{props.comment}</p>
      </article>
    </section>
  )
}