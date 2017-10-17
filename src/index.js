import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import store from './store';
import { Provider } from 'react-redux';
//import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
//import {createPost} from './actions';
//import * as ReadableAPI from './utils/ReadableAPI';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

//########################################################################
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/reducers';


const history = createHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(history), logger)
  )
);

console.log('initial state:', store.getState());
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
/*let unsubscribe = store.subscribe(() =>
  console.log('state change:',store.getState())
);*/

ReactDOM.render(<Provider store={store}>
                  <ConnectedRouter history={history}>
                    <App />
                  </ConnectedRouter>
                </Provider>
, document.getElementById('root'));
registerServiceWorker();
 