import posts from './postsReducer';
import comments from './commentsReducer';
import categories from './categoriesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  posts,
  comments,
  categories
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