import { 
	GET_ALL_CATEGORIES
} from '../actions/actions';


function categories(state = [], action) {
  switch(action.type) {
    case GET_ALL_CATEGORIES:
			return {
        ...state,
        "categories": action.categories
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