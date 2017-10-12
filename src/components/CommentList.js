import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {

  render() {
    let comments = this.props.comments && [];
    
    return (
      <div className="comment-list">
        {{ 
          comments.map( (comment)=>{
            <Comment commentId={comment.id} />
          })
        }}  
      </div>
    );
  }
}

export default CommentList;