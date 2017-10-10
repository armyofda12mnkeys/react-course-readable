import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'
import * as ReadableAPI from './utils/ReadableAPI';

class App extends Component {
  
  componentDidMount() {
    //get all post and categories for the state
    const {loadAllPosts, loadCategories} = this.props;
    loadCategories();
    loadAllPosts();
  }

  componentWillUnmount() {
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to={"/"}>Readerable Home</Link>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Readable</h1>
        </header>
        
        <Route exact path="/" render={ () => (
          <div>Test</div>
				)} />
        
      </div>
    );
  }
}


function mapStateToProps({posts, categories, filterByCategory, loadingData}) {
  return {posts, categories, comments}
}

export default connect(mapStateToProps, {loadAllPosts, loadCategories})(App)