import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Post from './Post';
import { fetchCreatePost } from '../actions/actions';
import { LinkedComponent } from 'valuelink';
import { Input, Select } from 'valuelink/tags';
const uuidv4 = require('uuid/v4');


//:category/:post_id
class AddPostPage extends LinkedComponent {
  constructor(props) {
    super(props);
    this.state = {title: '', body: '', author: '', category: 'redux'};
    
    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({category: event.target.value});
    alert('changed select to: '+ event.target.value);
  }
  handleSubmit(event) {
    event.preventDefault();
    //do validation later
    let id = uuidv4('v4');
    let timestamp = Date.now();
    let title = this.state.title;
    let body = this.state.body;
    let author = this.state.author;
    let category = this.state.category;    
    this.props.boundCreatePost(id, timestamp, title, body, author, category);
    
    //return false;
  }
  
  
  render() {
    let post = this.props.post;
    const linked = this.linkAll();
    return (
      <div className="add-single-post-view">
        <h2>Add Post</h2>
        <form onSubmit={this.handleSubmit}>
          
          <div className="post-title">
            <label>title:</label> [{this.state.title}]
            <Input valueLink={linked.title} />
          </div>
          <div className="post-body">
            <label>body:</label> [{this.state.body}]
            <Input valueLink={linked.body} />
          </div>
          <div className="post-author">
            <label>author:</label> [{this.state.author}]
            <Input valueLink={linked.author} />
          </div>
          <div className="post-category">
            <label>category:</label> [{this.state.category}]
            <Select valueLink={linked.category}>
              <option value="react">react</option>
              <option value="redux">redux</option>
              <option value="udacity">udacity</option>
            </Select>
          </div>
          
          <input type="submit" name="submit_btn" value="Save" />
        </form>
      </div>
    );
  }
}

//export default ViewPostPage;
function mapStateToProps({categories}, ownProps) {    
  return {categories};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    boundCreatePost: (id, timestamp, title, body, author, category) => { //not sure if need this, but adding in case need to figure this out
      console.log('create post_id', id);      
      dispatch(fetchCreatePost({id, timestamp, title, body, author, category}));
      //dispatch(test('id-101'));
    }
  }
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPostPage));

/*
<form onSubmit={this.onFormSubmit.bind(this)}>
*/