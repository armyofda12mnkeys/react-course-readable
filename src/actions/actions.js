import * as ReadableAPI from '../utils/ReadableAPI';

export const CREATE_POST = 'CREATE_POST';
export const EDIT_POST = 'EDIT_POST';
export const VIEW_POST = 'VIEW_POST';
export const VOTE_POST = 'VOTE_POST';
export const DELETE_POST = 'DELETE_POST';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const VIEW_COMMENT = 'VIEW_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';


export const TEST = 'TEST';
export function test ({id}) {
	return {
		type: TEST,
		id
	}
};


/* CATEGORIES */
export function changeCategory ({category}) {
	return {
		type: CHANGE_CATEGORY,
		category
	}
};

export function getAllCategories ({categories}) {
	return {
		type: GET_ALL_CATEGORIES,
		categories
	}
};
export const asyncGetCategories = () => dispatch => (
  ReadableAPI
      .getAllCategories()
      .then(categories => dispatch(getAllCategories(categories)))
);


/* POSTS */
export function createPost ({id, timestamp, title, body, author, category}) {
	return {
		type: CREATE_POST,
		id, timestamp, title, body, author, category
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

export function votePost ({id, option}) {
	return {
		type: VOTE_POST,
		id, option
	}
};

export function deletePost ({id}) {
	return {
		type: DELETE_POST,
		id
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

export function voteComment ({id, option}) {
	return {
		type: VOTE_COMMENT,
		id, option
	}
};

export function deleteComment ({id}) {
	return {
		type: DELETE_COMMENT,
		id
	}
};
