# JdSportsWeb
The web service is an example of fetching data from a RESTful API, storing pulled and validated data into mysql and unit test using Mohca.
For display purpose, the web service has fixed users. By each time submitting a search request, one user is randomly chosen to execute the search query and the search record will be stored in MySql.

# Folders and Functionalities
## jdsports
This folder contains a TypeScript React App which allows user to search all npm packages according to inserted search keyword.
## server
This folder contains a Nodejs server connecting with MySql, providing RESTful API to perform get/post/update/delete queries. 

# Dependencies
The web service dependencies: React, React-DOM, React-Redux, axios, Redux-Thunk and related TypeScript packages.

The server dependencies: Mocha, Cors, Express, Body-Parser, Mysql, Chai, Chai-Http.

# How to start

Go to jdsports folder and run start command.
```
  npm run start
```
Set up the MySql schema and tables as following. Insert initial users into users table.
![image](https://user-images.githubusercontent.com/61312689/135653960-81615b21-7056-4a84-9ad3-6ed293e5b2bc.png)
Go to server folder to update host/user/password/database information. And run start command on port 3001 or updated the url accordingly in jdsport/state/action-creators/index.ts.
```
npm run start
```
For unit test purpose, go to server folder and run mocha command.
```
mocha app.test.js
```
