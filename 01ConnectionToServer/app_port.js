var http = require("http");
var port = process.env.PORT || 3000;

http.createServer(function (request, response) {
		response.write("this is the response\n");
		response.write("yep!");
    response.end();
}).listen(port, function() {
		console.log("Listening on port " + port + "...")
})