class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <div className="post-title">
          {this.props.title}
        </div>
        <div className="post-body">
          {this.props.body}
        </div>
        <div className="post-author">
          {this.props.author}
        </div>
        
        <VoteCount count={props.voteScore} />
        <UpDownVoter id={props.id} type="post" />
        
        <button onClick="alert('Delete');">Delete</button>
        <button onClick="alert('Edit');">Edit</button>
        
        <CommentsList postId={this.props.uuid} />
      </div>
    );
  }
}