import * as ReadableAPI from '../utils/ReadableAPI';
import { push } from 'react-router-redux';

export const REQUEST_GET_ALL_CATEGORIES = 'REQUEST_GET_ALL_CATEGORIES';
export const RECEIVE_GET_ALL_CATEGORIES = 'RECEIVE_GET_ALL_CATEGORIES';

export const REQUEST_GET_POSTS = 'REQUEST_GET_POSTS';
export const RECEIVE_GET_POSTS = 'RECEIVE_GET_POSTS';

export const REQUEST_GET_COMMENTS_FOR_POST = 'REQUEST_GET_COMMENTS_FOR_POST';
export const RECEIVE_GET_COMMENTS_FOR_POST = 'RECEIVE_GET_COMMENTS_FOR_POST';

export const CREATE_POST = 'CREATE_POST';
export const EDIT_POST = 'EDIT_POST';
export const VIEW_POST = 'VIEW_POST';
export const VOTE_POST = 'VOTE_POST';
export const DELETE_POST = 'DELETE_POST';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const VIEW_COMMENT = 'VIEW_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const DELETE_COMMENTS_FOR_POST = 'DELETE_COMMENTS_FOR_POST';


export const CHANGE_POST_LIST_SORT_BY_ORDER = 'CHANGE_POST_LIST_SORT_BY_ORDER';

export const TEST = 'TEST';
export function test ({id}) {
	return {
		type: TEST,
		id
	}
};


/* CATEGORIES */

export function requestGetAllCategories () {
	return {
		type: REQUEST_GET_ALL_CATEGORIES
	}
};
export function receiveGetAllCategories ({categories}) {
	return {
		type: RECEIVE_GET_ALL_CATEGORIES,
		categories
	}
};
export function fetchGetAllCategories() { //example from reduct: store.dispatch(fetchPosts('reactjs'))
  return function (dispatch) {
    // First dispatch: the app state is updated to inform that the API call is starting.
    dispatch(requestGetAllCategories());
    
    return ReadableAPI.getAllCategories()
            .then(json => {
              //console.log('cattt', json.categories);
              dispatch(receiveGetAllCategories({categories: json.categories}));
            });
  }
};

/* UI */
export function changePostOrder ({orderBy}) {
	return {
		type: CHANGE_POST_LIST_SORT_BY_ORDER,
		order_by: orderBy
	}
};



/* POSTS */
export function requestGetPosts () {
	return {
		type: REQUEST_GET_POSTS
	}
};
export function receiveGetPosts ({posts}) {
	return {
		type: RECEIVE_GET_POSTS,
		posts
	}
};
export function fetchGetPosts(category='') {
  return function (dispatch, getState) {
    dispatch(requestGetPosts());

    return ReadableAPI.getPosts(category)
            .then((posts) => {
              //console.log('postsss',posts);
              dispatch(receiveGetPosts({posts}));               
              //console.log('Posts Length', posts.length);
              posts.map((post) =>{
                //console.log('Posts:'+ post.id);
                return dispatch(fetchGetCommentsForPost({post_id: post.id}));
              });
            });
  }
};

export function requestGetCommentsForPost () {
	return {
		type: REQUEST_GET_COMMENTS_FOR_POST,
	}
};
export function receiveGetCommentsForPost ({comments}) {
	return {
		type: RECEIVE_GET_COMMENTS_FOR_POST,
		comments
	}
};
export function fetchGetCommentsForPost({post_id}) {
  return function (dispatch, getState) {
    dispatch(requestGetCommentsForPost());
    
    return ReadableAPI
            .getCommentsForPost(post_id)
            .then(comments => {
              //console.log('Comments',comments);
              dispatch(receiveGetCommentsForPost({comments}));
              //dispatch to get all comments those those posts? and build that array
            });
  }
};

export function recievedVotePost ({updated_post}) {
	return {
		type: VOTE_POST,
		updated_post
	}
};
export function fetchVotePost({post_id, vote_option}) {
  console.log('post'+ post_id +','+ vote_option);
  return function (dispatch, getState) {
    //dispatch(requestVotePost());
    
    return ReadableAPI
            .votePost(post_id, vote_option)
            .then(updated_post => {
              console.log('updated_post',updated_post);
              dispatch(recievedVotePost({updated_post}));              
            });
  }
};







/* POSTS */
export function recievedCreatePost ({created_post}) {
	return {
		type: CREATE_POST,
		created_post
	}
};
export function fetchCreatePost({id, timestamp, title, body, author, category}) {
  console.log('post', id, timestamp, title, body, author, category);
  return function (dispatch, getState) {
    //dispatch(requestVotePost());
    
    return ReadableAPI
            .createPost(id, timestamp, title, body, author, category)
            .then(created_post => {
              console.log('created_post',created_post);
              dispatch(recievedCreatePost({created_post}));              
              dispatch(push('/'+category+'/'+id));
            });
  }
};

export function editPost ({id, title, body}) {
	return {
		type: EDIT_POST,
		id, title, body
	}
};


export function viewPost ({id}) {
	return {
		type: VIEW_POST,
		id
	}
};



export function recievedDeletePost ({updated_post}) {
	return {
		type: DELETE_POST,
		updated_post
	}
};
export function fetchDeletePost({post_id, view}) {
  console.log('post_id'+ post_id);
  return function (dispatch, getState) {
    //dispatch(requestVotePost());
    
    return ReadableAPI
            .deletePost(post_id)
            .then(updated_post => {
              console.log('updated_post',updated_post);
              dispatch(recievedDeletePost({updated_post}));
              dispatch(deleteCommentsForPost({'post_id': updated_post.id}));
              if(view==='full'){
                dispatch(push('/')); //not working??? maybe fixed with 5.alpha version of redux-router
              }
              //or loop through and do deleteComment() for each one somewhere?
            });
  }
};


/* COMMENTS */
export function createComment ({id, timestamp, body, author, parentId}) {
	return {
		type: CREATE_COMMENT,
		id, timestamp, body, author, parentId
	}
};

export function editComment ({id, timestamp, body}) {
	return {
		type: EDIT_COMMENT,
		id, timestamp, body
	}
};

export function viewComment ({id}) {
	return {
		type: VIEW_COMMENT,
		id
	}
};

export function recievedVoteComment ({updated_comment}) {
	return {
		type: VOTE_COMMENT,
		updated_comment
	}
};
export function fetchVoteComment({comment_id, vote_option}) {
  console.log('comment'+ comment_id +','+ vote_option);
  return function (dispatch, getState) {
    //dispatch(requestVotePost());
    
    return ReadableAPI
            .voteComment(comment_id, vote_option)
            .then(updated_comment => {
              console.log('updated_comment',updated_comment);
              dispatch(recievedVoteComment({updated_comment}));              
            });
  }
};

export function deleteCommentsForPost ({post_id}) {
	return {
		type: DELETE_COMMENTS_FOR_POST,
		post_id
	}
};
