import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import VoteCount from './VoteCount';
//import UpDownVoter from './UpDownVoter';
import UpDownVoterPostContainer from './UpDownVoterPostContainer';
import UpDownVoterCommentContainer from './UpDownVoterCommentContainer'; //see if can combine into 1 Container?
//import {Link, NavLink} from 'react-router-dom';
import {fetchDeletePost,fetchCreateComment, fetchEditComment, fetchDeleteComment } from '../actions/actions';
import Timestamp from 'react-timestamp';
import Modal from 'react-modal';
import { LinkedComponent } from 'valuelink';
import { Input } from 'valuelink/tags';
//import {default as UUID} from "uuid";
const uuidv4 = require('uuid/v4');


class Post extends LinkedComponent {  
  constructor(props) {
    super(props);
    this.state = {showCommentModal: false, id: '', body: '', author: ''};
    
    this.handleSubmitCommentModal = this.handleSubmitCommentModal.bind(this);    
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);    
    this.addComment = this.addComment.bind(this);    
    this.editComment = this.editComment.bind(this);    
    
  }
  openModal() {
    this.setState({showCommentModal: true});
  }  
  closeModal() {    
    this.setState({showCommentModal: false});
  }
  addComment(){    
    this.setState({id: '', body: '', author: ''});//i do at end of handleSubmitCommentModal, but doesn't hurt to do here too.
    this.openModal();
  }
  editComment(comment_id){
    this.setState({id: comment_id});
    let filteredComment = this.props.post_comments.filter((comment)=> (comment.id===comment_id) );    
    if(filteredComment && filteredComment.length > 0){
      filteredComment = filteredComment[0]; //get 1st comment from array
      this.setState({body: filteredComment.body, author: filteredComment.author});
      //pre-populate the body and author and set the state for id
      this.openModal();
    } //else not sure why the comment wasn't found, so don't open modal
  }
  handleSubmitCommentModal(event) {
    event.preventDefault();
    //let post_id = (this.props.post && this.props.post.id) || 0;
    let body = this.state.body;
    let author = this.state.author;
    
    if(this.state.id) { //editing a comment
      let comment_id = this.state.id;      
      this.props.boundEditComment(comment_id,           body, author);      
      this.setState({showCommentModal: false, id: '', body: '', author: ''});
      alert('comment edited!');
    } else {
      let comment_id = uuidv4(); //UUID.v4();
      //console.log('uuidv4',comment_id);
      let timestamp = Date.now();
      this.props.boundCreateComment(comment_id, timestamp, body, author);
      this.setState({showCommentModal: false, id: '', body: '', author: ''});
      alert('comment added!');
    }
  }
  
  
  
  render() {
    let post = this.props.post;
    //console.log('post...',post);
    //console.log('props',this.props.post.body);
    let post_comments = this.props.post_comments;
    let comment_count = post_comments && post_comments.length;
    //console.log('render', post_comments);
    let boundDeletePost = this.props.boundDeletePost;
    let boundDeleteComment = this.props.boundDeleteComment;
    
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
          <strong># of comments:</strong> {comment_count}
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
        <div className="post-comments">
          <strong>Comments:</strong>           
          {comment_count===0 ? 'None Yet' : ''}
          {post_comments && post_comments.map((comment) => (
            <div className="comment" key={comment.id}>
              <div className="comment-id">
                <strong>Comment id:</strong> {comment.id}
              </div>
              <div className="comment-date-created">
                <strong>Comment created:</strong> <Timestamp time={comment.timestamp/1000} format='ago' includeDay />
              </div>
              <div className="comment-body">
                <strong>Comment body:</strong> {comment.body}
              </div>
              <div className="comment-author">
                <strong>Comment author:</strong> {comment.author}
              </div>
              <div className="comment-score">
                <strong>Comment vote score:</strong> {comment.voteScore}
              </div>
              <UpDownVoterCommentContainer id={comment.id} type="comment" />
              
              <button onClick={()=> { this.editComment(comment.id) }}>Edit Comment</button>
              <button onClick={()=>{ boundDeleteComment(comment.id); }}>Delete Comment</button>
            </div>
          ))}
          <button onClick={this.addComment}>Add New Comment</button>
          
          <Modal
            isOpen={ this.state.showCommentModal }
            contentLabel="Add/Edit Comment"
            shouldCloseOnOverlayClick={true}
          >
            <h1>Add/Edit Comment</h1>
            <form onSubmit={this.handleSubmitCommentModal}>
            
              Make comment on post: {post.id}
              <div><strong>Comment Body:</strong> <Input valueLink={ this.linkAt('body') } /></div>
              <div><strong>Comment Author:</strong> <Input valueLink={ this.linkAt('author') } /></div>
                            
              <button onClick={this.closeModal}>Cancel and close modal</button>
              <button type="submit" name="submit_comment_btn" value="Save">Save</button>
              
            </form>
          </Modal>
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
    boundDeleteComment: (comment_id) => {
      //console.log('deleting comment:', comment_id);
      dispatch(fetchDeleteComment({comment_id}));
       /*if(ownProps.view==='full') {
        ownProps.history.push('/');
       }*/
    },
    boundCreateComment: (comment_id, timestamp, body, author, parentId) => {
      dispatch(fetchCreateComment({comment_id, timestamp, body, author, parentId: ownProps.post.id}));
    },
    boundEditComment: (comment_id,              body, author) => {
      dispatch(fetchEditComment({comment_id, body, author}));
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