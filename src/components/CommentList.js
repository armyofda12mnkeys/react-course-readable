class CommentList extends React.Component {
  render() {
    return (
      <div className="comment-list">
      {{ 
        filteredPosts.map( (post)=>{
          <Post postId={post.id} showTeaser="true" />
          <!-- or do i pass the whole post in? .... hmm  for now just get access to main state and pull from store.posts -->
        })
      }}      
      </div>
    );
  }
}