import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Post from './Post';

//:category/:post_id
class EditPostPage extends React.Component {
  
  handleSubmit(event) {
    event.preventDefault();
    alert('submitted');
    //return false;
  }
  render() {
    let post = this.props.post;
    
    return (
      <div className="edit-single-post-view">
        <h2>Edit Post</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" />
          <input type="submit" name="submit_btn" />
        </form>
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


export default withRouter(connect(mapStateToProps, null)(EditPostPage));

/*
postId={post.id} showTeaser="true" 
<!-- or do i pass the whole post in? .... hmm  for now just get access to main state and pull from store.posts -->          
*/