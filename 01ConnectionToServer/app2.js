var http = require("http");

http.createServer (function (request, response) {
	
	response.write ("this is the response\n");
	response.write ("yep!");
	response.end();
	}).listen (3000, function () {
	console.log ("listening on port 3000...")
	})

