var http = require('http');
var bl = require('bl');
// LONG SOLUTION
//http.get(process.argv[2], function(response){
//   response.pipe(bl(function(err,data) {
//     if(err) throw err;
//     data = data.toString();
//     console.log(data);
//     http.get(process.argv[3], function(response){
//       response.pipe(bl(function(err,data) {
//         if(err) throw err;
//         data = data.toString();
//         console.log(data);
//         http.get(process.argv[4], function(response){
//           response.pipe(bl(function(err,data) {
//             if(err) throw err;
//             data = data.toString();
//             console.log(data);
//           }));
//         });
//       }));
//     });
//   }));
// });

function fetchData(index){
  http.get(process.argv[2 + index], function(response){
    response.pipe(bl(function(err,data) {
      if(err) throw err;
      data = data.toString();
      console.log(data);
    }));
  }).on('err', console.error);
}
for(var i = 0; i < 3; i++) {
  fetchData(i);
}
