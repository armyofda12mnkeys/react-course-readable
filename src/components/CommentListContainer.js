import React from 'react';
import CommentList from './CommentList';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCreateComment, fetchEditComment, fetchDeleteComment } from '../actions/actions';
import { LinkedComponent } from 'valuelink';
import { Input } from 'valuelink/tags';
const uuidv4 = require('uuid/v4');

//putting alot of my modal logic in this container here, not sure if thats good, but better than where it was before (in Post)
class CommentListSectionContainer extends LinkedComponent {
  constructor(props) {
    super(props);
    this.state = {showCommentModal: false, comment_modal_id: '', comment_modal_body: '', comment_modal_author: ''};
    
    this.handleSubmitCommentModal = this.handleSubmitCommentModal.bind(this);    
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);    
    this.createComment = this.createComment.bind(this);    
    this.editComment = this.editComment.bind(this);    
  }
  
  openModal() {
    this.setState({showCommentModal: true});
  }  
  closeModal() {    
    this.setState({showCommentModal: false});
  }
  createComment(){    
    this.setState({comment_modal_id: '', comment_modal_body: '', comment_modal_author: ''});//i do at end of handleSubmitCommentModal, but doesn't hurt to do here too.
    this.openModal();
  }
  editComment(comment_id){
    console.log(comment_id);
    this.setState({comment_modal_id: comment_id});
    let filteredComment = this.props.comments.filter((comment)=> (comment.id===comment_id) );    
    if(filteredComment && filteredComment.length > 0){
      filteredComment = filteredComment[0]; //get 1st comment from array
      this.setState({comment_modal_body: filteredComment.body, comment_modal_author: filteredComment.author});
      //pre-populate the body and author and set the state for id
      this.openModal();
    } //else not sure why the comment wasn't found, so don't open modal
  }
  handleSubmitCommentModal(event) {
    event.preventDefault();
    //let post_id = (this.props.post && this.props.post.id) || 0;
    let body = this.state.comment_modal_body;
    let author = this.state.comment_modal_author;
    
    if(this.state.comment_modal_id) { //editing a comment
      let comment_id = this.state.comment_modal_id;      
      this.props.boundEditComment(comment_id,           body, author);      
      this.setState({showCommentModal: false, comment_modal_id: '', comment_modal_body: '', comment_modal_author: ''});
      alert('comment edited!');
    } else {
      let comment_id = uuidv4(); //UUID.v4();
      //console.log('uuidv4',comment_id);
      let timestamp = Date.now();
      this.props.boundCreateComment(comment_id, timestamp, body, author);
      this.setState({showCommentModal: false, comment_modal_id: '', comment_modal_body: '', comment_modal_author: ''});
      alert('comment added!');
    }
  }

  render() {
    let comments = this.props.comments || [];
    let comment_count = comments.length;
    
    return (
        <div className="post-comments-list">
          <button onClick={this.createComment}>Add New Comment</button>
          
          <strong>Comments:</strong>           
          {comment_count===0 ? 'None Yet' : comment_count}

          <CommentList comments={comments} editComment={this.editComment} deleteComment={this.props.boundDeleteComment} />
          
          <Modal
            isOpen={ this.state.showCommentModal }
            contentLabel="Add/Edit Comment"
            shouldCloseOnOverlayClick={true}
          >
            <h1>Add/Edit Comment</h1>
            <form onSubmit={this.handleSubmitCommentModal}>
            
              Make comment on post: {this.props.post_id}
              <div><strong>Comment Body:</strong> <Input valueLink={ this.linkAt('comment_modal_body') } /></div>
              <div><strong>Comment Author:</strong> <Input valueLink={ this.linkAt('comment_modal_author') } /></div>
                            
              <button onClick={this.closeModal}>Cancel and close modal</button>
              <button type="submit" name="submit_comment_btn" value="Save">Save</button>
              
            </form>
          </Modal>
          
        </div>
    );
  }
}


const mapStateToProps = (state,ownProps) => {
  //console.log('comments-post',state.comments.items);
  //console.log('comments-post',ownProps.post.id);
  return {    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    boundCreateComment: (comment_id, timestamp, body, author, parentId) => {
      dispatch(fetchCreateComment({comment_id, timestamp, body, author, parentId: ownProps.post_id}));
    },
    boundEditComment: (comment_id,              body, author) => {
      dispatch(fetchEditComment({comment_id, body, author}));
    },
    boundDeleteComment: (comment_id) => {
      //console.log('deleting comment:', comment_id);
      dispatch(fetchDeleteComment({comment_id}));
    },
  }
};
  


//export default CommentListSection;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentListSectionContainer));
