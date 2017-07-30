var http = require('http');
//FIRST SOLUTION
// http.get(process.argv[2], function(response){
//   response.setEncoding('utf8');
//   var data='';
//   response.on('data',function(d){
//     data += d;
//   });
//   response.on('end',function() {
//     console.log(data.length);
//     console.log(data);
//   });
//   response.on('err',console.error);
// }).on('err', console.error);

//SECOND SOLUTION
var bl = require('bl');
http.get(process.argv[2], function(response){
  response.pipe(bl(function(err,data) {
    if(err) throw err;
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
}).on('err', console.error);
