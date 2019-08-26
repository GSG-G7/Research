# The Steps For Running Your Express Server Over Https

This is a demo that in it we create a self-singed certification

1. We will run some commands to generate our certification

```
openssl genrsa -out my-key.pem 2048
openssl req -new -sha256 -key my-key.pem -out my-key.pem my-csr.pem
openssl req -new -sha256 -key my-key.pem -out  my-csr.pem
openssl x509 -req -in my-csr.pem -signkey my-key.pem -out my-cert.pem
```

2. Then we need to require the https and express along with fs, path and creating the app

```
const express = require('express');
const fs = require('fs');
const { join } = require('path');
const app = express();
```

3. Then we need to create our options object where we have the keys

```
const options = {
  key: fs.readFileSync(join(__dirname, '..', 'my-key.pem')),
  cert: fs.readFileSync(join(__dirname, '..', 'my-cert.pem'))
};
```

4. Then we need to serve the main route

```
app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});
```

5. Finally we need to run our server over https(In this step the browser check your certification and if it is verified then it will show up the green lock next to the domain)

```
https.createServer(options, app).listen(5000, () => {
  console.log('Server is up on https://localhost:5000');
});
```
