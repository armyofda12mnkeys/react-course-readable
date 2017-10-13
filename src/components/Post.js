import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import VoteCount from './VoteCount';
//import UpDownVoter from './UpDownVoter';
import UpDownVoterPostContainer from './UpDownVoterPostContainer';
import UpDownVoterCommentContainer from './UpDownVoterCommentContainer'; //see if can combine into 1 Container?
import {Link, NavLink} from 'react-router-dom';
import {fetchDeletePost} from '../actions/actions';


class Post extends React.Component {  
  

  render() {
    let post = this.props.post;
    console.log('post...',post);
    //console.log('props',this.props.post.body);
    let post_comments = this.props.post_comments;
    let comment_count = post_comments && post_comments.length;
    console.log('render',post_comments);
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
        { this.props.view==='teaser' 
          ?          
          <button onClick={()=>{ window.location.href = post.category+'/'+post.id; }}>View</button>
          :
          ''
        }
        {/*or <Link to={post.category+'/'+post.id}>View</Link>*/}
                
        { this.props.view==='full' 
        ?
        <div className="post-comments">
          <strong>Comments:</strong> 
          {comment_count===0 ? 'None Yet' : ''}
          {post_comments && post_comments.map((comment) => (
            <div className="comment" key={comment.id}>
              <div className="comment-id">
                <strong>Comment id:</strong> {comment.id}
              </div>
              <div className="comment-author">
                <strong>Comment author:</strong> {comment.author}
              </div>
              <div className="comment-body">
                <strong>Comment body:</strong> {comment.body}
              </div>            
              <div className="comment-score">
                <strong>Comment vote score:</strong> {comment.voteScore}
              </div>
              <UpDownVoterCommentContainer id={comment.id} type="comment" />
              
            </div>
          ))}
        </div>
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
   console.log('filteredComments',filteredComments);
   return filteredComments;
}
  
const mapStateToProps = (state,ownProps) => {
  console.log('comments-post',state.comments.items);
  console.log('comments-post',ownProps.post.id);
  return {
    post_comments: filterCommentsForThisPost(state.comments.items, ownProps.post.id)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    boundDeletePost: (post_id) => {
      console.log('deleting post:', post_id);
      dispatch(fetchDeletePost({post_id, view: ownProps.view}));
       /*if(ownProps.view==='full') {
        ownProps.history.push('/');
       }*/
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