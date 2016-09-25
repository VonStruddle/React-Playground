const express = require('express');

let app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
  if (req.protocol === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
});

app.use(express.static('public'));

app.listen(PORT, '0.0.0.0', function() {
  console.log('Server listening on port ' + PORT);
});