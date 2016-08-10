var walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
      files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist);
    }
    else {
      filelist.push(file);
    }
  });
  return filelist;
};



// var files = fs.readdirSync('./');
// for (var i in files) {
//   var definition = require('./' + files[i]).Model;
//   console.log('Model Loaded: ' + files[i]);
// }


// var files = fs.readdirSync(__dirname+'.01ConnectionToServer/');


//  System.out.println("File "+f.getName()+
//                    ": isDirectory="+(attr.isDirectory() ? "true" : "false")+
//                    ", isRegularFile="+(attr.isRegularFile() ? "true" : "false"));


//  fs.lstatSync(path_string).isDirectory() 



// var fs = require('fs');
 
// if (process.argv.length <= 2) {
//     console.log(process.argv);
//     process.exit(-1);
// }
 
// var path = process.argv[1];
 
// fs.readdir(path, function(err, items) {
//     console.log(items);
 
//     for (var i=0; i<items.length; i++) {
//         console.log(items[i]);
//     }
// });


// fs.readdirSync, fs.lstatSync and isDirectory()