import { combineReducers } from 'redux';

import { 
	CREATE_POST, 
	EDIT_POST,
  VIEW_POST,
  VOTE_POST,
  DELETE_POST
} from '../actions';


function posts(state = {}, action) {
  switch(action.type) {
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