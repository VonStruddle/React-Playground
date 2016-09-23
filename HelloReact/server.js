var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('Hello Quentin!');
});

app.listen(8080, '0.0.0.0', function() {
  console.log('Server listening on port 8080');
});