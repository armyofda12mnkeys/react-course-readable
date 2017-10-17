import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {

  render() {
    let comments = this.props.comments || [];
    
    return (
      <div className="comment-list">
        {comments && comments.map((comment) => (
          <Comment comment={comment} editComment={this.props.editComment} deleteComment={this.props.deleteComment}/>
        ))}
      </div>
    );
  }
}

export default CommentList;