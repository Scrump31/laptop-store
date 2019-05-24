
# Laptop-Store

<img  src="/screenshot1.png"  alt="app Screenshot"/>
<img  src="/screenshot2.png"  alt="app Screenshot"/>



## Overview

This project is a full-stack NodeJS app created using pre-built static HTML and CSS files (thanks [Jonas Schmedtmann!](https://www.udemy.com/user/jonasschmedtmann/)). An API was created to pull data from a Postgres database to be consumed by the frontend. A user can view a list of popular laptops and click to see more details. Also, a user can click the "Buy Now" link to open a Google search result page for that product.  

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

  

## Getting Started

 1. clone the repo and `npm install` to install server dependencies.
 2. Create a postgres database with a table named `laptops` and use the following structure for the table:
 ```sql
 id integer NOT NULL AUTO INCREMENT,
productname character varying(255),
image character varying(100),
cpu character varying(255),
ram character varying(255),
storage character varying(255),
screen character varying(255),
price smallint,
description text
PRIMARY KEY (id)
```


 3. Create a `.env` file in the root of the project and add relevant database values and port number for your server for the following properties:

   ```sql 
	PORT=
    DB_HOST=
    DB_USER=
    DB_PASS=
    DB=
   ```

 4.  `npm start` to start up the server
 5. In another terminal window, `cd frontend && npm install`
 6. `npm start` to start the React server
> Note: the React frontend is able to connect with the Express backend via the `proxy` script included in the frontend package.json file. Be sure to update this value with the port number specified in your .env
7. Now that both the frontend and backend servers are up and running you should now be able to view the app in your browser and have fun!
 
## Technologies Used To Create The Project

* [React](https://reactjs.org/)
* [React Router](https://github.com/ReactTraining/react-router#readme)
* [Knexjs](https://knexjs.org/)
* [Node-postgres](https://github.com/brianc/node-postgres)
* [NodeJS](https://github.com/nodejs/node)
* [Expressjs](http://expressjs.com/)
* [Commitizen](http://commitizen.github.io/cz-cli/) - Using Conventional Commits specification