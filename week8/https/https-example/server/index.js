const https = require('https');
const { options, app } = require('./app');

https.createServer(options, app).listen(5000, () => {
  console.log('Server is up on https://localhost:5000');
});
