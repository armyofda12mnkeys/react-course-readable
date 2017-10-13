import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Post from './Post';

//:category/:post_id
class ViewPostPage extends React.Component {
  
  
  render() {
    let post = this.props.post;
    
    return (
      <div className="single-post-view">
      {
        //not sure why this needed here for the ViewPostPage, can someone elaborate
        post
        ?
        <Post key={post.id} post={post} view="full" />
        : 
        ''
      }
      </div>
    );
  }
}

//export default ViewPostPage;
function mapStateToProps({posts, comments}, ownProps) {  
  let category = ownProps.match.params.category || '';
  let post_id = ownProps.match.params.post_id; 
  
  let post = posts.items.find(function(post) {
    console.log(post.id +'==='+ post_id)
    return post.id===post_id;
  });
  
  return {post, category};
}


export default withRouter(connect(mapStateToProps, null)(ViewPostPage));

/*
postId={post.id} showTeaser="true" 
<!-- or do i pass the whole post in? .... hmm  for now just get access to main state and pull from store.posts -->          
*/