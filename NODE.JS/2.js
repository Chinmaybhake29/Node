// Custom server

var http = require("http");

// console.log(http);

const server = http.createServer(function (req, res) {
  //Call-BACK function
  console.log(typeof req, typeof res);
  res.end("Hello, world!");
}); //Create server

server.listen(9000);
