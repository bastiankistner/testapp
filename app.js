var http = require('http');

var DB_PASS = process.env.DBPASS || process.argv[2];
var FTP_PASS = process.env.FTPPASS || process.argv[3];


http.createServer(function(request, response) {
   response.writeHeader(200, {"Content-Type" :  "text/plain"});
   response.end("Hello World" + " || DB = " + DB_PASS + " || FTP = " + FTP_PASS );
}).listen(process.env.PORT);

