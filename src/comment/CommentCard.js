import React from 'react';

export default (props)=>{
  return(
    <section className="comment-card">
      <header className="comment-card-header">
        <h4>
          id: {props.id}
        </h4>
        <button 
          className="btn"
          onClick={props.deleteComment}>X</button>
      </header>
      <article className="comment-card-body">
        <p>{props.comment}</p>
      </article>
    </section>
  )
}