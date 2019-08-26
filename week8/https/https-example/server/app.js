const express = require('express');
const fs = require('fs');
const { join } = require('path');
const app = express();

const options = {
  key: fs.readFileSync(join(__dirname, '..', 'my-key.pem')),
  cert: fs.readFileSync(join(__dirname, '..', 'my-cert.pem'))
};

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

module.exports = {
  app,
  options
};
