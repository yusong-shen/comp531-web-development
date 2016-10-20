# Front-End App
COMP431/531 HW5 Front-End App
Author : Yusong Shen

Front-End App
Sample Application : https://ricebook.surge.sh/

In this assignment you will partially implement and test the frontend of your web application. We start with our draft frontend application that contains three views:

- landing page with registration and login
- main page with articles, followers, and status message
- profile page for a user to upload a new profile picture and edit their data

Remember that when tackling any large task our best approach is to divide and conquer. For this assignment there are three major portions:
- Using React+Redux to transform the three views into a single page application (SPA)
- Writing unit tests of the desired functionality and mocking the dummy server endpoints
- Implementing logic for our site and connecting to the dummy server


File structure might look like :

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