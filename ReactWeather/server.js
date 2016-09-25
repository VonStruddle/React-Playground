const express = require('express');

let app = express();

app.use(express.static('public'));

/*app.get('/', function(req, res) {
  res.send('Hello Quentin!');
});*/

const PORT = 3000

app.listen(PORT, '0.0.0.0', function() {
  console.log('Server listening on port ' + PORT);
});