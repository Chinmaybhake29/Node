var fs = require("fs");  //file stream

var http = require("http");

const server = http.createServer(function (req, res) {
  fs.readFile("index.html", "utf-8", function (err, data) {
    res.end(data);
  });
});

server.listen(9065);
