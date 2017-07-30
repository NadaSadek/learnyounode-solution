var filterExt = require('./filter-ext-module.js');
var dir = process.argv[2];
var ext = process.argv[3];
filterExt(dir,ext,function(err,list){
  if(err) throw err;
  list.forEach(function(file){
    console.log(file);
  });
})
