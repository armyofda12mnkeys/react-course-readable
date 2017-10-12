import React from 'react';
import Post from './Post';


class PostList extends React.Component {
  
  
  render() {
    let filteredPosts = this.props.posts;
    
    
    return (
      <div className="post-list">
        Post Count:{filteredPosts.items.length}
        {filteredPosts && filteredPosts.items.map((post) => (
            <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;

/*
postId={post.id} showTeaser="true" 
<!-- or do i pass the whole post in? .... hmm  for now just get access to main state and pull from store.posts -->          
*/