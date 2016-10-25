# Front-End App
COMP431/531 HW5 Front-End App
Author : Yusong Shen

## Discription
Sample Application : https://ricebook.surge.sh/

In this assignment you will partially implement and test the frontend of your web application. We start with our draft frontend application that contains three views:

- landing page with registration and login
- main page with articles, followers, and status message
- profile page for a user to upload a new profile picture and edit their data

Remember that when tackling any large task our best approach is to divide and conquer. For this assignment there are three major portions:
- Using React+Redux to transform the three views into a single page application (SPA)
- Writing unit tests of the desired functionality and mocking the dummy server endpoints
- Implementing logic for our site and connecting to the dummy server

## Data API - the COMP 431/531 Dummy Server
https://www.clear.rice.edu/comp431/data/api.html

The "dummy" server is a "persistence-less" back-end server for your use while developing your front-end web application. Later you will develop your own back-end server and connect your front-end web app to it.

The server uses simple password authentication and registers a cookie in the browser after a successful login. Cookie management is handled entirely by the server and browser, no front-end logic is required.

There are four access mechanisms to use the dummy server : 

- Use a command line utility, such as curl
- Use a browser plugin like Advanced REST Client or Postman
- Use the swagger user interface
- Use your server connected front-end web app

Dummy Server Credentialshide
login	password
ys43	quiet-students-degree
ys43test	judge-sentence-return

## Project Structure
File structure might look like :

```
.
|-- .babelrc
|-- .eslintrc
|-- .gitignore
|-- coverage
|   `-- ...
|--- dist
|    |-- bundle.js
|    |-- index.html
	 `-- ....
|-- istanbul.yaml
|-- karma.conf.js
|-- mocha.opts
|-- package.json
|-- README.json
|-- src
|   |-- actions.js
|   |-- actions.spec.js
|   |-- components
|   |   |-- app.js
|   |   |-- article
|   |   |   |-- articleActions.js
|   |   |   |-- articleActions.spec.js
|   |   |   |-- article.js
|   |   |   |-- articlesView.js
|   |   |   |-- articlesView.spec.js
|   |   |   |-- comment.js
|   |   |   `-- newArticle.js
|   |   |-- auth
|   |   |   |-- authActions.js
|   |   |   |-- authActions.spec.js
|   |   |   |-- landing.js
|   |   |   |-- login.js
|   |   |   `-- register.js
|   |   |-- main
|   |   |   |-- followingActions.js
|   |   |   |-- following.js
|   |   |   |-- headline.js
|   |   |   |-- main.js
|   |   |   `-- nav.js
|   |   `-- profile
|   |       |-- avatar.js
|   |       |-- profileActions.js
|   |       |-- profileActions.spec.js
|   |       |-- profileForm.js
|   |       |-- profileForm.spec.js
|   |       `-- profile.js
|   |-- index.js
|   |-- reducers.js
|   `-- reducers.spec.js
|-- tests.webpack.js
`-- webpack.config.js
```