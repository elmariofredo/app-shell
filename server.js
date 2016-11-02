const express = require('express');
const app = express();

app.get('/api/boot', function (req, res) {
  res.json(require('./boot.json'));
});

app.listen(9001, function () {
  console.log('Example app listening on port 9001!');
});