import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'
import * as ReadableAPI from './utils/ReadableAPI';
import { connect } from 'react-redux';
import {test} from './actions/actions';
import FaBeer from 'react-icons/lib/fa/beer';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';

class App extends Component {
  
  componentDidMount() {
    //get all post and categories for the state
    //const {loadAllPosts, loadCategories} = this.props;
    //loadCategories();
    //loadAllPosts();
    this.props.boundChangeSort();
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
          <div>
            <h1>Test</h1>
            <FaBeer color='blue' />
            <FaArrowUp color='green' onClick={()=>{ alert('up'); }} />
            <FaArrowDown color='red' onClick={()=>{ alert('down'); }} />
            <button onClick={()=>{ alert('alert'); }}>alert</button>
          </div>
          
          
				)} />
        
      </div>
    );
  }
}


function mapStateToProps({posts, comments, categories}, ownProps) {
  return {posts, categories, comments}
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    boundChangeSort: () => { //not sure if need this, but adding in case need to figure this out
      dispatch(test('id-101'))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)