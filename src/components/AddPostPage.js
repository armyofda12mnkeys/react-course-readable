import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Post from './Post';

//:category/:post_id
class AddPostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {category: 'redux'};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    alert('changed select to: '+ event.target.value);
  }
  handleSubmit(event) {
    event.preventDefault();
    alert('submitted');
    //return false;
  }
  
  
  render() {
    let post = this.props.post;
    
    return (
      <div className="add-single-post-view">
        <h2>Add Post</h2>

        <form onSubmit={this.handleSubmit}>
          
        <div className="post-title">
          <label>title:</label> 
          <input type="text" name="title" />
        </div>
        <div className="post-body">
          <label>body:</label> 
          <input type="text" name="body" />
        </div>
        <div className="post-author">
          <label>author:</label> 
          <input type="text" name="author" />
        </div>
        <div className="post-category">
          <label>category:</label> 
          <select value={this.state.category} name="category" onChange={this.handleChange}>
            <option value="react">react</option>
            <option value="redux">redux</option>
            <option value="udacity">udacity</option>
          </select>
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


export default withRouter(connect(mapStateToProps, null)(AddPostPage));

/*
<form onSubmit={this.onFormSubmit.bind(this)}>
*/