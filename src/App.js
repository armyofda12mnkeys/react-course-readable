import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'
import * as ReadableAPI from './utils/ReadableAPI';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to={"/"}>Readerable Home</Link>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Readable</h1>
        </header>
        
        <Route exact path="/" render={ () => (
					<PostList myposts={this.state.myposts} />	
				)} />
        

      </div>
    );
  }
}

export default App;
