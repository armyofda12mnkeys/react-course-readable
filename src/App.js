import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, NavLink} from 'react-router-dom'
//import * as ReadableAPI from './utils/ReadableAPI';
import ListPage from './components/ListPage';

class App extends Component {

  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          {/*<NavLink to={"/"}>HOME POST LISTING</NavLink>*/}
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Readable</h1>
        </header>
        
        <Route exact path="/:category?" component={ListPage} />
        
      </div>
    );
  }
}

export default App;