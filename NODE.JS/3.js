var fs = require("fs");
console.log("starting");

var ans = fs.readFileSync("index.html",'UTF');
console.log(ans);

console.log("end");
