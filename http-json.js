var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'application/json'})
  var urlJson = url.parse(req.url,true);
  var iso = urlJson.query.iso;
  var date = new Date(iso);

  if(req.method === 'GET'){
    if(urlJson.pathname === '/api/parsetime'){
      var parseJson = {
        'hour': date.getHours(),
        'minute': date.getMinutes(),
        'second': date.getSeconds()
      };

       res.end(JSON.stringify(parseJson));
    }
    else if(urlJson.pathname === '/api/unixtime'){
      var unixJson = {
        "unixtime": date.getTime()
      };

      res.end(JSON.stringify(unixJson));

    }
  }

  res.end();


});
server.listen(process.argv[2]);
