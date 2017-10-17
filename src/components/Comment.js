import React from 'react';
import Timestamp from 'react-timestamp';
import UpDownVoterCommentContainer from './UpDownVoterCommentContainer';

class Comment extends React.Component {
  render() {
    let comment = this.props.comment;
    
    return (
      <div className="comment" key={comment.id}>
        <div className="comment-id">
          <strong>Comment id:</strong> {comment.id}
        </div>
        <div className="comment-date-created">
          <strong>Comment created:</strong> <Timestamp time={comment.timestamp/1000} format='ago' includeDay />
        </div>
        <div className="comment-body">
          <strong>Comment body:</strong> {comment.body}
        </div>
        <div className="comment-author">
          <strong>Comment author:</strong> {comment.author}
        </div>
        <div className="comment-score">
          <strong>Comment vote score:</strong> {comment.voteScore}
        </div>
        <UpDownVoterCommentContainer id={comment.id} type="comment" />
        
        <button onClick={()=> {this.props.editComment(comment.id) }}>Edit Comment</button>
        <button onClick={()=>{ this.props.deleteComment(comment.id); }}>Delete Comment</button>
      </div>
    );
  }
}

export default Comment;


/*
editComment={this.props.editComment} deleteComment={this.props.deleteComment}


this.editComment(comment.id)
boundDeleteComment(comment.id);




        <button onClick={()=> { this.editComment(comment.id) }}>Edit Comment</button>
        <button onClick={()=>{ boundDeleteComment(comment.id); }}>Delete Comment</button>
*/