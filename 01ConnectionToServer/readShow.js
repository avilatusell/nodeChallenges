// Write a node.JS program that read and shows in the console
// the html code of one external page. The link of the 
// external page should be read from a file link.txt
// Hint: You need npm module -> request

var request = require('request');
var fs = require('fs');
// var source = fs.createReadStream('./link.txt');

fs.readFile('link.txt', 'utf8', function(err, data) {
	var url = data;


request( url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
  })
});