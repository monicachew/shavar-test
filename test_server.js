var http = require('http');
var fs = require('fs');

var contents = fs.readFileSync('response_with_adddel_range.out');

var server = http.createServer(function (request, response) {
  console.log(request);
  response.writeHeader(200, {"Content-Type": "application/x-www-form-urlencoded"});
  response.write(contents);
  response.end();
  console.log("Sent response");
}).listen(8080, '127.0.0.1');

console.log("Server with add del started on http://127.0.0.1:8080");
