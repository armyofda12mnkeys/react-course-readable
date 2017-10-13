const url = "http://localhost:3001";


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': 'anything',
  'Content-Type': 'application/json'  
}
/*
GET /categories
GET /:category/posts

GET /posts
POST /posts
GET /posts/:id
POST /posts/:id
PUT /posts/:id
DELETE /posts/:id   Sets the parentDeleted flag for all child comments to 'true'.???

GET /posts/:id/comments
POST /comments
GET /comments/:id
POST /comments/:id
PUT /comments/:id
DELETE /comments/:id
*/


export const getAllCategories = () => {
  return fetch(`${url}/categories`, { headers })
    .then(res => res.json())
};

export const getPosts = (id) => {
  if(id) {
    return fetch(`${url}/${id}/posts`, { headers })
    .then(res => res.json());
  } else {
    return fetch(`${url}/posts`, { headers })
    .then(res => res.json());  
  }  
};
    
export const createPost = (id, timestamp, title, body, author, category) =>
  fetch(`${url}/posts`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ id, timestamp, title, body, author, category })
  }).then(res => res.json());

export const getPost = (id) =>
  fetch(`${url}/posts/${id}`, { headers })
    .then(res => res.json());  
    
export const votePost = (id, option) =>
  fetch(`${url}/posts/${id}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ option })
  }).then(res => res.json());
    
export const editPost = (id, title, body) =>
  fetch(`${url}/posts/${id}`, {
    method: 'PUT',
    headers: { headers },
    body: JSON.stringify({ title, body })
  }).then(res => res.json());  
    
export const deletePost = (id) =>
  fetch(`${url}/posts/${id}`, {
    method: 'DELETE',
    headers: headers 
  }).then(res => res.json());  
      
    
    
    
    
export const getCommentsForPost = (id) =>
  fetch(`${url}/posts/${id}/comments`, { headers })
    .then(res => res.json());

export const addCommentToPost = (id, timestamp, body, author, parentId) =>
  fetch(`${url}/comments`, {
    method: 'POST',
    headers: { headers },
    body: JSON.stringify({ id, timestamp, body, author, parentId })
  }).then(res => res.json());
    
export const getComment = (id) =>
  fetch(`${url}/comments/${id}`, { headers })
    .then(res => res.json());  
     
export const voteComment = (id, option) =>
  fetch(`${url}/comments/${id}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ option })
  }).then(res => res.json());
    
export const editComment = (id, timestamp, body) =>
  fetch(`${url}/comments/${id}`, {
    method: 'PUT',
    headers: { headers },
    body: JSON.stringify({ timestamp, body })
  }).then(res => res.json());   
    
export const deleteComment = (id) =>
  fetch(`${url}/posts/${id}`, {
    method: 'DELETE',
    headers: { headers }
  }).then(res => res.json());  
    
