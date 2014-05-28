var express = require('express');
var app = express();
var port = (process.env.VMC_APP_PORT || 3000);
var host = (process.env.VCAP_APP_HOST || 'localhost');
app.get('/', function(req, res){
  res.send('hello world yangyu');
});

app.listen(port,host);