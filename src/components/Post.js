import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import VoteCount from './VoteCount';
//import UpDownVoter from './UpDownVoter';
import UpDownVoterPostContainer from './UpDownVoterPostContainer';
import CommentListContainer from './CommentListContainer';
//import {Link, NavLink} from 'react-router-dom';
import {fetchDeletePost } from '../actions/actions';
import Timestamp from 'react-timestamp';
//import Modal from 'react-modal';
//import { LinkedComponent } from 'valuelink';
//import { Input } from 'valuelink/tags';
//import {default as UUID} from "uuid";
//const uuidv4 = require('uuid/v4');


class Post extends React.Component {  
  
  render() {
    let post = this.props.post;
    let post_comments = this.props.post_comments;
    //console.log('post...',post);
    //console.log('props',this.props.post.body);
    let boundDeletePost = this.props.boundDeletePost;
    
    
    return (
      <div className="post">
        { this.props.view==='full' 
        ?
        <h1>Viewing Post id: <span>{post.id}</span></h1>
        :
        <div className="post-id">
          <strong>Post id:</strong> {post.id}
        </div>
        }

        <div className="post-date-created">
          <strong>Post created:</strong> <Timestamp time={post.timestamp/1000} format='ago' includeDay />
        </div>
        <div className="post-title">
          <strong>Post title:</strong> {post.title}
        </div>
        <div className="post-body">
          <strong>Post body:</strong> {post.body}
        </div>
        <div className="post-author">
          <strong>Post author:</strong> {post.author}
        </div>
        <div className="post-category">
          <strong>Post category:</strong> {post.category}
        </div>
        <div className="post-vote-score">
          <strong>Post vote score:</strong> {post.voteScore}
        </div>
        <UpDownVoterPostContainer id={post.id} type="post" />
        <div className="post-comments-count">
          <strong># of comments:</strong> {post.commentCount}
        </div>

        { this.props.view==='teaser' 
          ?          
          <button onClick={()=>{ window.location.href = '/'+post.category+'/'+post.id; }}>View Post</button>
          :
          ''
        }        
        <button onClick={()=>{ window.location.href = '/'+post.category+'/'+post.id+'/edit'; }}>Edit Post</button>
        <button onClick={()=>{ boundDeletePost(post.id); }}>Delete Post</button>

        {/*or <Link to={post.category+'/'+post.id}>View</Link>*/}
                
        { this.props.view==='full' 
          ?
          <CommentListContainer comments={post_comments} post_id={post.id} />
          :
          ''
        }
        
      </div>
    );
  }
}


const filterCommentsForThisPost = (comments, id)  => {
   //console.log('comments',comments);
   //console.log('id',id);
   let filteredComments = comments.filter((comment)=> (comment.parentId===id) );
   //console.log('filteredComments',filteredComments);
   return filteredComments;
}

const mapStateToProps = (state,ownProps) => {
  //console.log('comments-post',state.comments.items);
  //console.log('comments-post',ownProps.post.id);
  return {
    post_comments: filterCommentsForThisPost(state.comments.items, ownProps.post.id)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    boundDeletePost: (post_id) => {
      //console.log('deleting post:', post_id);
      dispatch(fetchDeletePost({post_id, view: ownProps.view}));
       /*if(ownProps.view==='full') {
        ownProps.history.push('/');
       }*/
      //dispatch(test('id-101'));
    },
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