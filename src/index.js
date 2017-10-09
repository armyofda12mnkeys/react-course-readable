import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
//import {createPost} from './actions';




//########################################################################
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(logger, thunk)
  )
);

console.log('initial state:',store.getState());
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

//store.dispatch(   createPost (1001, Date.now(), 'Title title', 'Body Body.', 'Arian', 'category')  );
//########################################################################

ReactDOM.render(<Provider store={store}>
                  <BrowserRouter>
                    <App />
                  </BrowserRouter>
                </Provider>
, document.getElementById('root'));
registerServiceWorker();
