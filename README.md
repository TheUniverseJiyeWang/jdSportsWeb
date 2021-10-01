# jdSportsWeb
The web service is an example of fetchding data from a RESTFUL API, storing pulled and validated data into mysql and unit test using Mohca.
For display purpose, the web service has fixed users. By each time submitting a search request, one user is randomly chosen and the search record will be stored in MySql.

# Folders and Functionalities
## jdsports
This folder contains a TypeScript React App which allow user to search all npm packages according to inserted search term.
## server
This folder contains a Nodejs server connecting with MySql, providing RESTFUL API to perform get/post/update/delete queries. 

# Dependencies
The web service dependencies: React, React-DOM, React-Redux, axios, Redux-Thunk and related TypeScript packages.

The server dependencies: Mocha, Cors, Express, Body-Parser, Mysql, Chai, Chai-Http.

# How to start

Go to jdsports folder and run start command.
```
  npm run start
```
Set up the MySql schema and tables. Go to server folder to update host/user/password/database information. And run start command on port 3001 or updated the url accordingly in jdsport/state/action-creators/index.ts.
```
  npm run start
```
For unit test purpose, go to server folder and run mocha command.
```
mocha app.test.js
```
