const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/admin', function(req, res) {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.use(express.static(path.join(__dirname, 'public')));
// app.use('/public', express.static('./public'));

app.listen(3000, () =>
  console.log(`Example app listening on http://localhost:3000`)
);
