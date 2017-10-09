import { combineReducers } from 'redux';

import { 
	CHANGE_CATEGORY
} from '../actions';


function posts(state = {}, action) {
  switch(action.type) {
    case CHANGE_CATEGORY:

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