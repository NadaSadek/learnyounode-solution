var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
  res.writeHead(200, { 'content-type': 'text/plain' })
  var resStream = fs.createReadStream(process.argv[3]);
  resStream.pipe(response);
});
server.listen(process.argv[2]);
