import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//import Post from './Post';
import { fetchCreatePost, fetchEditPost } from '../actions/actions';
import { getPost } from '../utils/ReadableAPI';
import { LinkedComponent } from 'valuelink';
import { Input, Select } from 'valuelink/tags';
//import {UUID} from "uuid";
const uuidv4 = require('uuid/v4');

//:category/:post_id
class AddEditPostPage extends LinkedComponent {
  constructor(props) {
    super(props);
    this.state = {id: '', title: '', body: '', author: '', category: 'redux'};
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
  
    //let category = this.props.match.params.category || '';
    let post_id  = this.props.match.params.post_id || '';
    if(post_id && post_id!=='') {
      //console.log('MOUNT', post_id);      
      //get post details and then set state here
      const post = getPost(post_id)
                    .then( (post) => {
                        //console.log('MOUNT2', post);      
                        this.setState({'id': post.id, 'title': post.title, 'body': post.body, 'author': post.author, 'category': post.category});
                      }
                    );      
    } else {
      //implied since constructor already set default empty state
      //this.setState({'title': '', 'body': '', 'author': '', 'category': ''});
    }

  }
  handleSubmit(event) {
    event.preventDefault();
    //do validation later    
    let title = this.state.title;
    let body = this.state.body;
    let author = this.state.author;
    let category = this.state.category;

    if(this.props.context === 'edit') {
      let id = this.state.id;
      this.props.boundEditPost(id,              title, body, author, category);
    } else {
      let id = uuidv4(); //UUID.v4();
      let timestamp = Date.now();
      this.props.boundCreatePost(id, timestamp, title, body, author, category);
    }    
    //return false;
  }
  
  
  render() {
    //let post = this.props.post;
    const linked = this.linkAll();
    const categories = this.props.categories;
    const id = this.state.id;
    const category = this.state.category;
    
    return (
      <div className="add-single-post-view">
         {
            this.props.context === 'edit'
            ?
            <h2>Edit Post</h2>
            :
            <h2>Add Post</h2>
         }
        <form onSubmit={this.handleSubmit}>
          
          <div className="post-title">
            <label>title:</label> 
            <Input valueLink={linked.title} />
          </div>
          <div className="post-body">
            <label>body:</label> 
            <Input valueLink={linked.body} />
          </div>
          <div className="post-author">
            <label>author:</label>
            <Input valueLink={linked.author} />
          </div>
          <div className="post-category">
            <label>category:</label>
            <Select valueLink={linked.category}>
              {categories && categories.items.map((category) => (
                <option key={category.path} value={category.path}>{category.name}</option>
              ))}
            </Select>
          </div>
          
          {
            this.props.context === 'edit'
            ?            
            <div className="edit-review">
              <strong>If editing, please review the changes below before clicking <u>Save</u> button:</strong>
              <br/>
              <div><strong>title:</strong> {this.state.title}</div>
              <div><strong>body:</strong> {this.state.body}</div>
              <div><strong>author:</strong> {this.state.author}</div>
              <div><strong>category:</strong> {this.state.category}</div>
            </div>
            :
            ''
          }
          {
            this.props.context === 'edit'
            ?           
            <button onClick={(event)=>{ event.preventDefault(); window.location.href = '/'+this.state.category+'/'+this.state.id; }}>Cancel</button>
            :
            <button onClick={(event)=>{ event.preventDefault(); window.location.href = '/'; }}>Cancel</button>          
          }
          <input type="submit" name="submit_btn" value="Save" />
        </form>
      </div>
    );
  }
}

//export default ViewPostPage;
function mapStateToProps({categories}, ownProps) {  
  //possible preload the state here from the server if its an edit page
  //set a new var to say whether its an edit or add page and use that to determine which to use boundCreatePost or boundUpdatePost
  
  return {categories};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    boundCreatePost: (id, timestamp, title, body, author, category) => { //not sure if need this, but adding in case need to figure this out
      console.log('create post_id', id);      
      dispatch(fetchCreatePost({id, timestamp, title, body, author, category}));
      //dispatch(test('id-101'));
    },
    boundEditPost:   (id,            title, body, author, category) => { //not sure if need this, but adding in case need to figure this out
      console.log('edit post_id', id);      
      dispatch(fetchEditPost({id,    title, body, author, category}));
      //dispatch(test('id-101'));
    }
  }
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddEditPostPage));

/*
<form onSubmit={this.onFormSubmit.bind(this)}>
*/