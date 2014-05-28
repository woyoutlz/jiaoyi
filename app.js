 var port = (process.env.VMC_APP_PORT || 3000);
 var host = (process.env.VCAP_APP_HOST || 'localhost');
 var http = require('express');
 var app = http.createServer();
 app.get('/', function(req, res) {
    res.send('Hello from MoPaaS');
    });
 app.listen(port, host);