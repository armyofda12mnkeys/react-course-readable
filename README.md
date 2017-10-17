# Readable Project

This project adds/edits/deletes posts and lists its comments which also can be edited and deleted.
It can be ran by running 'npm start' or 'yarn start'.
The server can be ran by running 'node server' and is located here: 
https://github.com/udacity/reactnd-project-readable-starter
If you want I can include it within my github project (but it is a separate project so thought can be separated).

It uses a backend server supplied here.
I updated my code as recently that server has commentCount (so now when adding a comment to comments state, also have to update that specific post's state).

I focused less on UI (i could have just used bootstrap or redux-forms for forms) but wanted to learn more by trying simpler UI/forms from scratch.
Note: Possibly the CommentListContainer can be broken up even more, but was going to do that as an exercize later (I could have just made a simple Edit Comment page but wanted to see how Modals and logic involving modals and container/presentation components would work).
If you have any comments on that, let me know as I'm a bit stumped how to make that 'better'. 
The rest of the app I think is separated pretty well.



## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
