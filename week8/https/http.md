## So how does HTTPS or SSL work?

#### STAND FOR Hyper Text Transport Protocol Secure 

HTTPS is a secure form of the HTTP protocol. It wraps an encrypted layer around HTTP, Transport Layer Security (TLS). Clients and servers communicate using HTTP it is now secure because of the TLS wrapper


# how https work
 For websites and pages the browser acts as a client and a web-server like Apache or IIS acts as server.

 The server hosts the files (like html , audio , video files etc) and returns are responds to client requests with the data.

 Depending on the request a response contains the status of the request.

 |   http	|  https |
|---|---|
|Transfers data in hypertext (structured text) format|Transfers data in encrypted format|
|Uses port 80 by default|Uses port 443 by default|
|Not secure|Secured using SSL technology|
|Starts with http:// | Starts with https://|

![](https://www.tutorialsteacher.com/Content/images/https/https-communication.png)



# What are SSL Certificates and Why do I Need Them and need https?

![](https://www.tutorialsteacher.com/Content/images/https/ssl-link.png)

- SSL is important in secure internet transfrom process 

- The SSL certificate's job is to initiate secure sessions with the user’s browser via the secure sockets layer (SSL) protocol.

- Any organization that engages in ecommerce must have an SSL certificate

# How SSL Certificates Work

- A browser or server attempts to connect to a website (i.e. a web server) secured with SSL. The browser/server requests that the web server identify itself.

- The web server sends the browser/server a copy of its SSL certificate.

- The browser/server checks to see whether or not it trusts the SSL certificate. If so, it sends a message to the web server.

- The web server sends back a digitally signed acknowledgement to start an SSL encrypted session.

- Encrypted data is shared between the browser/server and the web server.