## What is a script injection and how do these happen?

is an attack perpetrated by an attackers ability to inject and execute malicious code into an application; an injection attack. This foreign code is capable of breaching data security, compromising database integrity or private properties. In many instances, it can bypass authentication control, and usually these attacks are associated with applications that depend on user input for execution.


## SQL injections:

the attack is aimed at corrupting a legitimate database query to produce falsified data. The attacker first has to locate an input within the targeted web application that is included inside of an SQL query.


![](https://www.maketecheasier.com/assets/uploads/2018/08/injection-example2.png)

### In the above code the attacker could insert a payload that would change the SQL statement executed by the database server. An example would set the password field to:

password’ OR 1=1


### This automatically causes the following statement to be run against the database server:

```SELECT id FROM users WHERE username=’username’ AND password=’password’ OR 1=1```


This method is only effective if the web application has user input included within an SQL statement. A payload (a malicious SQL statement) can then be inserted and run against the database server.

It can give the attacker the ability to bypass authentication, have full disclosure of data stored in the database, compromise data integrity and cause repudiation issues, altering balances and voiding transactions.

## How to prevent SQL injections:

- Disable the use of dynamic SQL – this means don’t construct database queries with user input. If required, sanitize, validate and escape values before making a query with user input data.
- Make use of a firewall – A web application firewall (software or application based) will help filter malicious data.
- Purchase better software – This simply means coders will be responsible for checking and fixing flaws.
- Encrypt or hash passwords and every other confidential data you have, this should include connection strings.
- Avoid connecting to your database with admin privileged accounts unless you absolutely need to.


## Script injection:

This security vulnerability is a threat that allows an attacker to inject malicious code straight through the web forms of data-driven websites via elements of the user interface. This attack is often referred to as Cross-Site Scripting or XSS.


##  The HTML tags are the most targeted for script injections:

```<script>, <meta>, <html>, <body>, <embed>, <frame>, <frameset>, <img>```

## This attack is divided into three main categories as shown below:

### 1) Reflected XSS
This occurs when the malicious results are being returned after entering the malicious code. Reflected XSS code is not being saved permanently. In this case, the malicious code is being reflected in any website result. The attack code can be included in the faked URL or HTTP parameters.

![](https://cdn.softwaretestinghelp.com/wp-content/qa/uploads/2018/06/Malicious-Script-in-the-Login-Field.jpg)

### 2) Stored XSS
This attack can be considered riskier and it provides more damage.

In this type of attack, the malicious code or script is being saved on the web server (for example, in the database) and executed every time when the users will call the appropriate functionality. This way stored XSS attack can affect many users. Also as the script is being stored on the web server, it will affect the website for a longer time.

```<script>alert(document.cookie)</script>```

### 3) DOM XSS:

This type of attack occurs when the DOM environment is being changed, but the client-side code does not change. When the DOM environment is being modified in the victim’s browser, then the client side code executes differently.

In order to get a better understanding of how XSS DOM attack is being performed let us analyze the following Example.

Consider, there is a webpage with URL http://testing.com/book.html?default=1. As we know, “default” is a parameter and “1” is its value. Therefore, in order to perform XSS DOM attack, we would send a script as the parameter.

![](https://cdn.softwaretestinghelp.com/wp-content/qa/uploads/2018/06/DOM-XSS-Example.jpg)



It can affect the victim in different ways – by displaying faked malicious page or by sending a malicious email.
## How to prevent script injections:

 The steps to prevent script injections are dependent on the programming code you are using. Generally, you will want to:

- validate and sanitize user input (any form of input fields) by striping out or escaping potentially malicious content
- clean up query strings in URLs
- validate and sanitize all forms of data, arrays and objects before executing in the server


### There are two stages to a attack: 

 1- To run malicious JavaScript code in a victim’s browser, an attacker must first find a way to inject malicious code (payload) into a web page that the victim visits.   

2- After that, the victim must visit the web page with the malicious code. If the attack is directed at particular victims, the attacker can use social engineering and/or phishing to send a malicious URL to the victim. bad practice.  

```javascript app.get("/my-service", function(request, response) {    
 var datastore = require("myDataStoreDep")(someConfig);      
datastore.get(req.query.someKey)     // etc, ... }); ```


