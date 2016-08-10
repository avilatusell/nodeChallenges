var fs = require('fs')
var nameFile = "test.txt"
var currentPath = (".")

fs.redir(currentPath, function (err,data) {
	console.log(data)
})


// fs.redirSync(currentPath) {
// 	console.log(data)
// }
// con sync solo necesitamos el path. Si ponemos redir sin sync necesitamos function.


