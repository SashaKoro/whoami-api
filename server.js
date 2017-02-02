const express = require('express');
const path = require('path');

const port = process.env.PORT || 2000;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/main.html'));
});

app.get('/whoami', (req, res) => {
  res.send({
    software: req.headers['user-agent'],
    language: req.headers['accept-language'],
    ipaddress: req.ip,
  });
});



app.listen(port, '127.0.0.1', () => {
  console.log(`Opening app on port ${port}`);
});

module.exports = { app };
