class CommentList extends React.Component {
  render() {
    return (
      <div className="comment-list">
      {{ 
        comments.map( (comment)=>{
          <Comment commentId={comment.id} />
          <!-- or do i pass the whole comment in? .... hmm  for now just get access to main state and pull from store.comments -->
        })
      }}      
      </div>
    );
  }
}