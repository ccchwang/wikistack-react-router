const http = require('http');
const server = http.createServer(); //make http server
const db = require('./models').db;  //import db

server.on('request', require('./app')); //for every req, go to app.js, which will make express app that will log middleware, mount bodyparser, mount mods to be used in routes, etc.

db.sync()
  .then(() => {
    server.listen(3001, () => {
      console.log('Server is listening on port 3001!');
    });
  })
  .catch(console.error);

