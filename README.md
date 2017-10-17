# Readable Project

This project adds/edits/deletes posts and lists its comments which also can be edited and deleted.
It can be ran by running 'npm start' or 'yarn start'.

The server can be ran by running 'node server' and is located here: 
https://github.com/udacity/reactnd-project-readable-starter
If you want I can include it within my github project (but it is a separate project so thought can be separated).
Note: I recently updated my code as recently that server has recently added a post field 'commentCount' (so now when adding a comment to comments state, also have to update that specific post's state).



I focused less on UI (i could have just used bootstrap or redux-forms for forms) but wanted to learn more by trying simpler UI/forms from scratch.
Note: Possibly the CommentListContainer can be broken up even more, but was going to do that as an exercize later (I could have just made a simple Edit Comment page but wanted to see how Modals and logic involving modals and container/presentation components would work).
If you have any comments on that, let me know as I'm a bit stumped how to make that 'better'. 
The rest of the app I think is separated pretty well.

## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── index.js # This is the root of your app. calls on the App below
    ├── App.js # This is the root of your app. Contains static HTML right now.
    └── App.css # Styles for your app. Feel free to customize this as you desire.
    └── actions
          └── actions.js # all my actions
    └── components
          ├── ListPostsPage.js # listing page for posts
          ├── PostList.js # list of posts
          ├── Post.js # single post (to be shown in a PostList or standalone ViewPostPage)
          ├── ViewPostPage.js # simple container for viewing a single Post
          ├── SortBy.js # ui sorter for the PostList pages
          ├── UpDownVoterPostContainer.js # container for a post voter
          ├── UpDownVoterCommentContainer.js # container for a comment voter
          ├── UpDownVoter.js # generic voter ui to be reused for Posts or Comments
          ├── AddEditPostPage.js # form for editing or adding a Post
          ├── CommentListContainer.js # container for Comments and their 'Edit' Modal
          ├── CommentList # list of Comments
          └── Comment # a single Comment
    └── reducers
          ├── categoriesReducer.js # for categories
          ├── commentsReducer.js # for comments
          ├── postsReducer.js # for posts
          ├── uiReducer.js # for some ui state I wanted defined here (sortby setting)
          └── reducers.js # combined reducers (also adds routing as required for making things smooth for react-redux-router)
    └── store
          └── index.js # the store 
    └── utils
          ├── ReadableAPI.js # interface to the api
          └── helpers.js # right now just a helper sort func for SortBy
      
```


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
