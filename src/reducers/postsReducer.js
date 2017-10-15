import { 
  REQUEST_GET_POSTS, RECEIVE_GET_POSTS,
	CREATE_POST, 
	EDIT_POST,
  VOTE_POST,
  DELETE_POST
} from '../actions/actions';


function posts(state = { isFetching: false, items: []}, action) {
  
  switch(action.type) {
    
    case REQUEST_GET_POSTS: {
			return {
        ...state,
        "isFetching": true
			};
    }
    case RECEIVE_GET_POSTS: {
			return {
        ...state,
        "isFetching": false,
        "items":  action.posts
			};
    }
    case CREATE_POST: {
			return {
        ...state,
        "isFetching": false,
        "items":  [
          ...state.items,
          action.created_post
        ]
			};
    } 
    case EDIT_POST: {
      let newpostitems = state.items;
      newpostitems = newpostitems.map((post) => {
        if(post.id === action.updated_post.id){
           return action.updated_post; //return the updated post instead (or change just the voteScore prop manually)
        }
        return post;
      });
			return {
         ...state,
        "isFetching": false,
        "items":  newpostitems
      };
    } 
    case DELETE_POST: {
      if(action.updated_post.deleted === true) { //doublecheck and make sure post got deleted from server response
        let newpostitems = state.items;
        newpostitems = newpostitems.filter( (post) => (post.id !== action.updated_post.id) );
        
        return {
           ...state,
          "isFetching": false,
          "items":  newpostitems
        };
      } else { //some issue with deleting from server maybe
        return state;
      }
    }
    case VOTE_POST: {
      let newpostitems = state.items;
      newpostitems = newpostitems.map((post) => {
        if(post.id === action.updated_post.id){
           return action.updated_post; //return the updated post instead (or change just the voteScore prop manually)
        }
        return post;
      });
			return {
         ...state,
        "isFetching": false,
        "items":  newpostitems
      };
    } 
		default: {
			return state;
    }
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