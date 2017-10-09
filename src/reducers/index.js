import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';
import categoriesReducer from './categoriesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  categories: categoriesReducer,
})

export default rootReducer;