import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, NavLink} from 'react-router-dom'
//import * as ReadableAPI from './utils/ReadableAPI';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListPage from './components/ListPage';
import {test, fetchGetPosts, fetchGetAllCategories} from './actions/actions';

class App extends Component {

  componentDidMount() {
    //get all post and categories for the state
    //const {loadAllPosts, loadCategories} = this.props;
    //loadCategories();
    //loadAllPosts();

    //this.props.boundChangeSort();
    this.props.boundFetchGetPosts();//adds initial posts (and their comments) to state
    this.props.boundFetchGetAllCategories();//adds initial categories to state
    //console.log('app props', this.props);
  }
  componentWillUnmount() {
  }
  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          {/*<NavLink to={"/"}>HOME POST LISTING</NavLink>*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Welcome to Readable</h1>
        </header>
        
        <Route exact path="/:category?" component={ListPage} />
        <Route exact path="/:category/:post_id" component={ListPage} />{/*ViewPostPage*/}
        <Route exact path="/:category/:post_id/edit" component={ListPage} />{/*EditPostPage*/}
        
      </div>
    );
  }
}



function mapDispatchToProps(dispatch, ownProps) {
  return {
    /*
    boundChangeSort: () => { //not sure if need this, but adding in case need to figure this out
      dispatch(test('id-101'))
    },
    */
    boundFetchGetPosts: () => {
      dispatch(fetchGetPosts(''));
    },
    boundFetchGetAllCategories: () => {
      dispatch(fetchGetAllCategories());
    },
    
  }
}


export default withRouter(connect(null, mapDispatchToProps)(App));