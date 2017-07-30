var net = require('net');
var strftime = require('strftime')
var server = net.createServer(function (socket){
  var date = strftime('%F %H:%M');
  socket.end(date + '\n');
});
server.listen(process.argv[2]);
