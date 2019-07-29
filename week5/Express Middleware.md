# Express Middlewares
* What are express Middlewares?
<br>
It is an easy way to specify the things should happen between requests and responses.
<br>
It processes http requests and give an appropriate response.
 
* What exactly is a middleware?
<br>
It is a code that sits/lies between two layers (in express it lies between the request and response).
<br>
It handles certain requests and provides certain responses automatically.
<br><br>

# Middleware functions can perform the following tasks:
![](https://developer.okta.com/assets-jekyll/blog/express-middleware-examples/middleware-30b3b30ad54e21d8281719042860f3edd9fb1f40f93150233a08165d908f4631.png)

* Execute any code.
* Make changes to the request and the response objects.
* End the request-response cycle.
* Call the next middleware function in the stack.
<br><br>
# Middleware Types:

## Built-in middleware

We use the following built-In middleware to serve static files such as images, CSS files, and JavaScript files.
<br>
The most common example of Built-In express middleware is:
```
app.use(express.static(root))
```
<br>

## Application-level middleware
Bind application-level middleware to an instance of the app object by using the  ```app.use()``` and ```app.METHOD()``` functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.
```
const express = require('express');
const app = express();

const myLogger = (req, res, next) => {
  console.log('Time:', Date.now());
  next();
};

app.use(myLogger);

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/city', function(req, res) {
  res.send('Hello City!');
});

app.listen(3000);
```
<br>

### Router-level middleware
Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of ```express.Router()```

```
const router = express.Router();

router.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

router.use('/user/:id', (req, res, next) => {
    console.log('Request URL:', req.originalUrl);
    next();
}, (req, res, next) => {
    next();
});

router.get('/user/:id', (req, res, next) => {
    if (req.params.id === '0') next('route');
    else next();
}, (req, res, next) => {
    res.send('regular');
});

router.get('/user/:id', (req, res, next) => {
    res.send('special')
});

// mount the router on the app
app.use('/', router);
  ```
  <br>

### Error-handling middleware
Error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.
```
app.use( (err, req, res, next) => {
  res.status(500).send('Something broke!')
});
```
