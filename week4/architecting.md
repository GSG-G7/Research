# Architecting :

## front end “client-side” : 

* Is what happens in the browser—everything the end users see and interact with.
* interface.
* Creating tools that enhance interaction with the site in any browser
* Implementing design for mobile sites (responsive).
## back end “server-side” :

* Is what happens on the server and databases.
* Everything the end user doesn’t see or directly interact with.
* Database creation, integration, and management.
* API integration.
* Security settings and hack prevents

<hr>

## Client side vs server side

### Validations can be performed on the server side or on the client side

* Server Side Validation.
    * validation occured in server side    
    * It's better because  you can protect against the malicious users
    * Using => nodejs , php ,...

* Client Side Validation
    * validation occured in browser 
    * validation doesn't require server
    * Using => javasctip , HTML attributes


### What are the pros and cons of running code on the client, rather than the server

 #### Advantages
 * JavaScript is the ability to run almost anything in the browser 
 * much faster than server-side scripts


 #### Disadvantages
 * Not all browsers support scripts



### What are the pros and cons of running code on the server, rather than the client

 #### Advantages
 * Scripts are hidden from view so it is more secure. Users only see the HTML output
 * User does not need to download plugins


 #### Disadvantages
* Many scripts and content management systems tools require databases in order to store dynamic data

<hr>

## 5 programming languages :
* node.js
* PHP
* java
* ruby
* python

<hr>

## Writing for different environments

1. Why might you have to write JavaScript differently if it's going to run in the browser, rather than in Node?.

   * Differences between Node and the Browser.
     1. Node.js : is a free, open-source JavaScript runtime (environment) you need install it in your platform and some packages (io, server, modules) like fs,http, path and other... will install with it.
     2. browser run javascript to interact with interface and dom without any work in server-side 
     3. node is environment with alot of packages for serverside and send api and other things
