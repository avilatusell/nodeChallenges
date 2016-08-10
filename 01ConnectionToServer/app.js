var http = require("http");
var server = http.createServer();

server.on("request", function (request, response) {
    res.send("this is the response");
});

server.on('listening', function() {
	console.log("Success, i'm listening from port: 3000")
});

server.listen(3000);