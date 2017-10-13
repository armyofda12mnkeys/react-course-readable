import { 
  REQUEST_GET_COMMENTS_FOR_POST, RECEIVE_GET_COMMENTS_FOR_POST,
	CREATE_COMMENT, 
	EDIT_COMMENT,
  VIEW_COMMENT,
  VOTE_COMMENT,
  DELETE_COMMENTS_FOR_POST
} from '../actions/actions';


function comments (state = { ifFetching: false, items: []}, action) {
  switch(action.type) {
    
    
    case REQUEST_GET_COMMENTS_FOR_POST:
			return {
        ...state,
        "isFetching": true
			};
      
    case RECEIVE_GET_COMMENTS_FOR_POST:
      //console.log('actioncomments', action.comments);
      //let newarray = [...state["items"], ...action.comments];      
			return {
        ...state,
        "isFetching": false,
        "items": [
          ...state["items"],
          ...action.comments
        ] 
			};

      
    case CREATE_COMMENT:

			return {
        ...state,
        "isFetching": false,
        "items":  [
          ...state["items"],
          action.comment
        ]
			};
      
    case EDIT_COMMENT:

			return {
        ...state,
        "isFetching": false,
        "items":  [
          ...state["items"],
          action.comment
        ]
			};
      
    case VIEW_COMMENT:

      var newcommentitems = state.items;
      newcommentitems = newcommentitems.map((comment)=> {
        if(comment.id === action.updated_comment.id){
           return action.updated_comment; //return the updated post instead (or change just the voteScore prop manually)
        }
        return comment;
      });
			return {
         ...state,
        "isFetching": false,
        "items":  newcommentitems
      };
      
    case VOTE_COMMENT:

      var newcommentitems = state.items;
      newcommentitems = newcommentitems.map((comment) => {
        if(comment.id === action.updated_comment.id){
           return action.updated_comment; //return the updated post instead (or change just the voteScore prop manually)
        }
        return comment;
      });
			return {
         ...state,
        "isFetching": false,
        "items":  newcommentitems
      };
    case DELETE_COMMENTS_FOR_POST:    
    
      var newcommentitems = state.items;
      newcommentitems = newcommentitems.filter((comment)=> {
        if(comment.parentId !== action.post_id){
           return comment; //return this comment if not equal to the one to delete
        }
      });
      
			return {
        ...state,
        "items": newcommentitems
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