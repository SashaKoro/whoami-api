const express = require('express');
const path = require('path');

const port = process.env.PORT || 2000;
const app = express();
const { reqTrimmer } = require('./functions/reqTrimmer');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/main.html'));
});

app.get('/whoami', (req, res) => {
  let response = reqTrimmer(req);
  res.send(response);
});

app.listen(port, () => {
  console.log(`Opening app on port ${port}`);
});

module.exports = { app };
