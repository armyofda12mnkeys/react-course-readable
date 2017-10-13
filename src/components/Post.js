import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import VoteCount from './VoteCount';
//import UpDownVoter from './UpDownVoter';
import UpDownVoterPostContainer from './UpDownVoterPostContainer';
import {fetchDeletePost} from '../actions/actions';


class Post extends React.Component {  
  

  render() {
    let post = this.props.post;
    let comment_count = this.props.post_comments && this.props.post_comments.length;
    //console.log('this.props.post_comments',this.props.post_comments);
    let boundDeletePost = this.props.boundDeletePost;
    
    return (
      <div className="post">
        <div className="post-id">
          <strong>id:</strong> {post.id}
        </div>
        <div className="post-title">
          <strong>title:</strong> {post.title}
        </div>
        <div className="post-body">
          <strong>body:</strong> {post.body}
        </div>
        <div className="post-author">
          <strong>author:</strong> {post.author}
        </div>
        <div className="post-category">
          <strong>category:</strong> {post.category}
        </div>
        <div className="post-vote-score">
          <strong>post vote score:</strong> {post.voteScore}
        </div>
        <UpDownVoterPostContainer id={post.id} type="post" />
        <div className="post-comments-count">
          <strong># of comments:</strong> {comment_count}
        </div>
        
        
        <button onClick={()=>{ alert('Edit'); }}>Edit</button>
        <button onClick={()=>{ boundDeletePost(post.id); }}>Delete</button>
        <button onClick={()=>{ alert('View'); }}>View</button>
        
      </div>
    );
  }
}
  const filterCommentsForThisPost = (comments, id)  => {
     //console.log('comments',comments);
     //console.log('id',id);
     let filteredComments = comments.filter((comment)=> (comment.parentId===id) );
     //console.log('filteredComments',filteredComments.length, filteredComments);
     return filteredComments;
  }
  
const mapStateToProps = (state,ownProps) => {
  return {
    post_comments: filterCommentsForThisPost(state.comments.items, ownProps.post.id)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    boundDeletePost: (post_id) => {
      console.log('deleting post:', post_id);
      dispatch(fetchDeletePost({post_id}));
      //dispatch(test('id-101'));
    }
  }
};

//export default Post;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
/*

<VoteCount count={post.voteScore} />
import CommentList from './CommentList';
<CommentList />
postId={this.props.uuid} comments={this.props.comments}
*/