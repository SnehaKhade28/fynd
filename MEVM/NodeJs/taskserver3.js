var http = require('http');
var dt = require('./taskserver2.js');
http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    //res.write("The date and time are currently:" +dt.getCurrentDate());
    res.write('server2')
    res.end();
}).listen(8003);