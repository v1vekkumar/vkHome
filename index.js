// http://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(process.env.PORT || 8000);
