import { 
	CREATE_COMMENT, 
	EDIT_COMMENT,
  VIEW_COMMENT,
  VOTE_COMMENT,
  DELETE_COMMENT
} from '../actions/actions';


function comments (state = [], action) {
  switch(action.type) {
    case CREATE_COMMENT:

			return {
        
			};
      
    case EDIT_COMMENT:

			return {
        
			};
      
    case VIEW_COMMENT:

			return {
        
			};
      
    case VOTE_COMMENT:

			return {
        
			};

    case DELETE_COMMENT:

			return {
        
			};
      
		default:
			return state;
  }
};

export default comments;

/*
export default combineReducers({
  commentsReducer1,
  commentsReducer2,
  commentsReducer3
});
*/