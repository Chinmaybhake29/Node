var fs = require('fs');
console.log("start");

//Asynchronous
fs.readFileSync('index.html', 'utf-8', function (err, data) {
    console.log(data);
});

console.log("end");