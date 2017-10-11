import { 
	REQUEST_GET_ALL_CATEGORIES,
  RECEIVE_GET_ALL_CATEGORIES
} from '../actions/actions';


function categories(state = { ifFetching: false, items: []}, action) {
  switch(action.type) {
    
    case REQUEST_GET_ALL_CATEGORIES:
			return {
        ...state,
        "isFetching": true
			};
      
    case RECEIVE_GET_ALL_CATEGORIES:
			return {
        ...state,
        "isFetching": false,
        "items":  action.categories
			};
      
 		default:
			return state;
  }
};

export default categories;

/*
export default combineReducers({
  postsReducer1,
  postsReducer2,
  postsReducer3
});
*/