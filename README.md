# RealBlogs Full Stack Project

<h3> Technologies Used: </h3>

>FrontEnd: VueJS/Vuex.<br />

>BackEnd: Firebase (Auth/Storage/FireStore).

![logo](./logo.png)

<hr />

#### ***To test and use the project you need first to enter the project then npm install the dependencies after that bring your firebase config file sdk and place it in the 'src/firebase/index.js' file where it's mentioned and done you're ready to go!.***

<hr />

<h3>The Project is a BlogPosts Website called "RealBlog" which provides:</h3>

  1. Login for users, Register for new users, send Email for password Reset in case the user forget it!.<br />
  2. Blogs provided with tags about web developpement, Realtime Data sharing, can filter blogs by tags for "easy
  access".<br />
  3. Realtime liking, commenting and saving blogs for "other time reading".<br />
  4. Receiving notifications.<br />
  5. It Also features the "bad words" filtering (Arabic, French, English) in comments for no "in future issues" and reporting automatically to admin to take decision!.<br />
  6. Also Editing Personal informations for single user.<br />

<hr />

<h3>The website Membership is divided into two type of users:</h3>

> **Sudo Admin:**<br />

  a. Same functionalities as the normal user.<br />
  b. add, delete, post blogs, posting.<br />
  c. preview post before sharing it.<br />
  d. accept reject new users demand.<br />
  e. filter posts as the user + filter the blogs he created.<br />
  f. delete comments that not accept our terms and controlling the total system.<br />

> **Normal User:**<br />

  a. Can edit, custom color his profile, delete it permenantly anytime (for long LOGIN-s he should
  RE-Login for security reasons).<br />
  b. Receive realtime notifications for specific actions.<br />
  c. filter posts for "easy-access" by (the posts he commented in ,liked in , saved).<br />
  d. like, comment, edit-comment, save and read posts for later.<br />
  e. have the right to become an admin by sending a request to other admins where he could be accepted or REJECTED.<br />

> **Non user:**<br />

  Non user can only read and filter blogs by tags even comments and likes will be displayed as Anonymous.

<hr />

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).