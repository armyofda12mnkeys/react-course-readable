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
