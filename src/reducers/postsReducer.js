import { 
  REQUEST_GET_POSTS, RECEIVE_GET_POSTS,
	CREATE_POST, 
	EDIT_POST,
  VIEW_POST,
  VOTE_POST,
  DELETE_POST
} from '../actions/actions';


function posts(state = { isFetching: false, items: []}, action) {
  switch(action.type) {
    
    case REQUEST_GET_POSTS:
			return {
        ...state,
        "isFetching": true
			};
      
    case RECEIVE_GET_POSTS:
			return {
        ...state,
        "isFetching": false,
        "items":  action.posts
			};
      
    case CREATE_POST:

			return {
        
			};      
      
    case EDIT_POST:

			return {
        
			};
      
    case VIEW_POST:

			return {
        
			};
      
    case VOTE_POST:

			return {
        
			};

    case DELETE_POST:

			return {
        
			};
      
		default:
			return state;
  }
};

export default posts;

/*
export default combineReducers({
  postsReducer1,
  postsReducer2,
  postsReducer3
});
*/