import posts from './postsReducer';
import comments from './commentsReducer';
import categories from './categoriesReducer';
import ui from './uiReducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  posts,
  comments,
  categories,
  ui,
  routing: routerReducer
})

export default rootReducer;
/*
structure of JSON of state that reducers will reduce/create:

{
  current_category_filter: '',
  current_sort_by_filter: '',
  categories: []  
  posts: [],
  comments: []
}

*/