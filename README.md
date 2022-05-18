# Plant A Post
--------------

### Overview
* Fullstack project
* Simple social media application that allows users to post their thoughts and reviews of plants
* Used React, Node.js, Express, and MongoDB
* Deployed on Heroku (backend) and Netlify (frontend)

### About the application
* Homepage includes compilation of all posts, sorted from oldest to newest
* If a post is clicked, it will go to its detail page
* User with accounts can add post their reviews/thoughts for plants
  * Post details includes plant name, USDA zone, light needs, water needs, message, and optional image (if no image, default image will be used in post)
  * Authenticated user can like other users' posts
  * Authenticated user can edit or delete their own post
* Non-authenticated user can view all the posts 
* Includes authentication feature
  * Sign-up for account
  * Sign-in to account
  * Log out from account
  * Show password to user
  * Encrypted password in database for security
* Mobile friendly

### Demo
Sign in existing user, general homepage, and detail page: <br />
![sign-in-scroll-detail](https://user-images.githubusercontent.com/82434097/169163575-c5242eba-a388-47e7-bb6d-8d49ad72bdae.gif)

Authenticated user creates a post, new post redirects to its detail page:<br />
![ezgif com-gif-maker](https://user-images.githubusercontent.com/82434097/169163916-4491af85-12fa-449a-8878-58a78717508f.gif)

Like/unlike post and edit post:<br />
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/82434097/169164277-26887b99-a15a-4923-bb54-b66e038513e4.gif)

Log out existing user and make new user account:<br />
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/82434097/169164676-8ea3f38b-0948-41ea-88b5-7866d52a8fe6.gif)

Application in different screensizes (laptop, mobile, tablet):
![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/82434097/169165067-9a3cca7e-48ab-4a9b-8dd1-fc2b6d89c936.gif)
