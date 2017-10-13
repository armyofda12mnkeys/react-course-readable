import { 
  CHANGE_POST_LIST_SORT_BY_ORDER
} from '../actions/actions';


function ui(state = { orderBy: 'dateDesc' }, action) {
  switch(action.type) {
    
    case CHANGE_POST_LIST_SORT_BY_ORDER:
			return {
        ...state,
        orderBy: action.order_by
			};
    
		default:
			return state;
      
      
  }
};

export default ui;