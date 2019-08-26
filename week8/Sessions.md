# Session-management in Express

## What is session?
- a session is a series of interactions between two communication end points that occur during the span of a single connection.
- When a user first logs in or registers for your site, you know who they are because they just submitted their information to your server. You can use that information to create a new record in your database.
- But how do you keep them authenticated when they do something crazy like reload the page? Magic, that’s how! Also known as sessions.


## Difference between Cookie and Session

### ***Session***

A session creates a file in a temporary directory on the server where registered session variables and their values are stored. This data will be available to all pages on the site during that visit.

A session ends when the user closes the browser or after leaving the site, the server will terminate the session after a predetermined period of time, commonly 30 minutes duration.

### ***Cookies***

Cookies are text files stored on the client computer and they are kept of use tracking purpose. Server script sends a set of cookies to the browser. For example name, age, or identification number etc. The browser stores this information on a local machine for future use.

When next time browser sends any request to web server then it sends those cookies information to the server and server uses that information to identify the user.

## What are the different ways of managing sessions in express?

### **express-session module** :

- stores only a session ID on the client within a cookie and stores the session data on the server

_look npmjs website to know more about express-session in this [link](https://www.npmjs.com/package/express-session)_

### **cookie-session module** :

- stores the session data on the client within a cookie

*look npmjs website to know more about *cookie-session* in this [link](https://www.npmjs.com/package/cookie-session)*

## Reference:

https://codeforgeek.com/manage-session-using-node-js-express-4/