# Stateful vs Stateless Authentication

## Stateful Authentication: 

### Stateful authentication means that an authentication record or session must be kept both server and client-side. The server needs to keep track of active sessions in a database, while on the front-end a cookie is created that holds a session id. 

![](https://i.imgur.com/nWZJcov.png)

---

## Stateless Authentication:

This means that no data persists on the server in relation to individual tokens. Token-based authentication is stateless. The server does not keep a record of which users are logged in. Instead, every request to the server is accompanied by a token which the server uses to verify the authenticity of the request.

![](https://i.imgur.com/oAdQF2S.png)

---

## Stateful Advantages
  * Revoke the session anytime.
  * Having a list for logged-in users.


## Stateless Adavantages
 - It takes care of many of the problems with having to store information on the server.
 - It reduces the memory usage.
 - Tokens hold the data for the user; so there is no need to pass the same user to the same server everytime.
 - The token expires after a set amount of time, so a user will be required to login again. This helps us stay secure.





