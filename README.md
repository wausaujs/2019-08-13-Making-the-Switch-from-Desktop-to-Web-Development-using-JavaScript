# wausaujs-demo

2019-08-13-Desktop-to-Web-Dev

This demo requires a MySQL database running on your local machine with a use named "demo", a schema called "test" and a table called "customers" with 2 fields: "CustomerID" and "CustomerName"

## Commands used to frame-up this project:
  npm init
  npm i express mysql body-parser axios moment
  npm i -g nodemon

##
To start the app, start 2 terminals, navigate to "server" directory, and run:
  nodemon server.js
  nodemon webserver.js
  
  After the 2 servers are running, open a browser to localhost:8080
  