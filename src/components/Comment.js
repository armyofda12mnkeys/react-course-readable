import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <div className="comment-body">
          this.props.body
        </div>
        <div className="comment-author">
          this.props.author
        </div>

        <VoteCount count={this.props.voteScore} />
        <UpDownVoter id={this.props.id} type="comment" />

        <button onClick="alert('Delete');">Delete</button>
        <button onClick="alert('Edit');">Edit</button>
      </div>
    );
  }
}

export default Comment;