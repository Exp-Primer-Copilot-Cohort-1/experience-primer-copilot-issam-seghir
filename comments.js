// Create a web server
// 1. Create a web server
// 2. Define the route and the corresponding request handler callback function
// 3. Start the server
// 4. Open the browser and request the URL

// 1. Create a web server
var http = require('http');
var http = require('http');

// 2. Define the route and the corresponding request handler callback function
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

// 3. Start the server
server.listen(3000, '');

// Create a web server
// 1. Create a web server
// 2. Define the route and the corresponding request handler callback function
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});

// 3. Start the server
server.listen(3000, '');

// create a fastify web server config
// 1. Create a fastify web server config
// 2. Define the route and the corresponding request handler callback function
// 3. Start the server
// 4. Open the browser and request the URL

// 1. Create a fastify web server config
const fastify = require('fastify')({
  logger: true
})

// 2. Define the route and the corresponding request handler callback function
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// 3. Start the server
fastify.listen(3000, '')
