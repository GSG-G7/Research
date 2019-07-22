# **what is a modularization?**

Modular programming is the process of subdividing a computer program into separate sub-programs can often be used in a variety of applications and functions with other components of the system. 

![](http://aosd.net/wp-content/uploads/2017/11/Modular-Programming-diagram.jpg)

# ** Why is it a good idea to modularise your code?**

- Less code has to be written, its simple and easy to understand.
A single procedure can be developed for reuse, eliminating the need to retype the code many times.

- Programs can be designed more easily because a small team deals with only a small part of the entire code.

- Enables multiple programmers to divide up the work and debug pieces of the program independently.

- Enforce logical boundaries between components and improve maintainability (every modular application has a version number associated with it).


- Make a testable code as it mimimize the dependency between the units.

- Errors can easily be identified, as they are localized to a subroutine or function.

- Teams can develop modules separately and do not require knowledge of all modules in the system.

- The same code can be used in many applications.

- The scoping of variables can easily be controlled.


![](https://techbeacon.scdn7.secure.raxcdn.com/sites/default/files/2017-07-05_09_37_03-if_i_2_count_35_i_0_._blogmd_-_sublime_text.png)


# Wrapper function:

Even if you define a global variable in a module using var, let or const keywords, the variables are scoped locally to the module rather than being scoped globally. This happens because each module has a function wrapper of its own and the code written inside one function is local to that function and cannot be accessed outside this function.

![](https://cdn-media-1.freecodecamp.org/images/jrHUpyWccEG3RTJQg54GR78bbJw6FxN6cWtf)

![](https://cdn-media-1.freecodecamp.org/images/ppIlxCPf-ko2PaAXyhiOqckmoNtcyHKeYCs1)





# module.exports:

The module parameter (rather a keyword in a module in Node) refers to the object representing the current module. exports is a key of the module object, the corresponding value of which is an object. The default value of module.exports object is {} (empty object). You can check this by logging the value of module keyword inside any module.

### -it is used for defining stuff that can be exported by a module:
`
module.exports['key'] = nameOfTheFunction;
`

or Adding all of them at once by using object:
`
module.exports={
firstFunc:FirstFunction,
secondFun:SecondFunction
}
`

### Require:

require keyword refers to a function which is used to import all the constructs exported using the module.exports object from another module.

-The value returned by the require function in module y is equal to the module.exports object in the module x.

const variableToHoldExportedStuff = require('idOrPathOfModule');


-What do you think will happen if I try to access the variable named PI defined in module A inside module B without exporting it from  module A?

pi = undefined


*So, you may be wondering why you didn’t get a ReferenceError. This is because you are trying to access a key named PI inside the module.exports object returned by the require function. You also know that the key named PI does not exist in the module.exports object.

Note that when you try to access a non-existent key in an object, you get the result as undefined. This is the reason why you get PI as undefined instead of getting a ReferenceError.

##  Why should you use asyncronous forms of functions with Node?
* For non-blocking code execution.
* To make any code unit independent and to    make it continue outside of the ongoing     flow of the main code.

## When might you use the syncronous ?
```javascript
function () {
    array.forEach(function(data) {
        fs.writeFile(data)
    });

    // do this after forEach has finished looping, not after files have finished being writen to
}

function () {
    array.forEach(function(data) {
        fs.writeFileSync(data)
    });

    // do this after all files have been written to
}
```
## What is fs and how can we use fs-module used by requiring it:
* used to access physical file system :
* const fs = require('fs').
* provides useful functions to interact with the file system :

- 1- Read files
- 2- Create files :
 </br> 
 ```javascript 
 [ fs.appendFile('mynewfile1.txt', 'Hello    content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
 }); ]
```
- 3- Update files : 
   </br> 
   fs.appendFile),(fs.writeFile())

- 4- Delete files :
   </br> fs.unlink()

- 5- Rename files
   </br> fs.rename

## All the methods of (FS) are asynchronous by default, but they can also work synchronously by appending Sync. :

* fs.rename()
* fs.renameSync()
* fs.write()
* fs.writeSync()

## The Path module provides a way of working with directories and file paths.

* var filename = path.basename('/Users/Refsnes/demo_path.js'); 
* var filename = path.basename('/Users/Refsnes/demo_path.js', 'js');

* var directories = path.dirname('/Users/Refsnes/demo_path.js');

* var ext = path.extname('/Users/Refsnes/demo_path.js');


# Working with url :
A URL - Uniform Resource Locator -  more commonly known as a "web address".

## What is URL ?
A URL is human-readable text that was designed to replace the numbers (IP addresses) that computers use to communicate with servers. They also identify the file structure on the given website. A URL consists of a protocol, domain name, and path (which includes the specific subfolder structure where a page is located) and has the following basic format:
```javascript
 protocol://domain-name.top-level-domain/path
 ```
 * The protocol indicates how a browser should retrieve information about a resource. The web standard is http:// or https:// (the "s" stands for "secure"), but it may also include things like mailto: (to open your default mail client) or ftp: (to handle file transfers).

 * The domain name (or hostname): is the human-readable name of the specific location where a resource (in most cases, a website) is located.

 * top-level domain (TLD) as something of a category for websites. While you're likely familiar with .com, there is also .edu for educational sites, .gov for governmental sites, and many, many more.

 * URLs also contain things like the specific folders and/or subfolders that are on a given website, any parameters (like click tracking or session IDs) that might be stored in the URL, and anchors that allow visitors to jump to a specific point in the resource.



## URL Object 
URL is a namespace used to host 2 static methods used to manipulate URLs using Blobs:

* URL.createObjectURL():
</br>
  static method creates a DOMString containing a URL representing the object given in the parameter. The URL lifetime is tied to the document in the window on which it was created. The new object URL represents the specified File object or Blob object.
  </br> 
  > Syntax : 
  ```javascript
  objectURL = URL.createObjectURL(object);
  ```
  > Parameters :
  </br> 
 object:    
A File, Blob or MediaSource object to create an object URL for.
  > Return value :
   DOMString -UTF-16 String-


* URL.revokeObjectURL() :
</br>
static method releases an existing object URL which was previously created by calling URL.createObjectURL().  Call this method when you've finished using an object URL to let the browser know not to keep the reference to the file any longer.

> Syntax : 
  ```javascript
  window.URL.revokeObjectURL(objectURL);
  ```
  > Parameters :
  </br> 
objectURL : A DOMString 

  > Return value :
   Void

```javascript
urlObject({'url':'http://localhost.test?name=ayman&age=22&gpa=3.5&course=programming&course=mathematics&course=algorithms'});  

{
  "protocol": "http:",
  "hostname": "localhost.test",
  "host": "localhost.test",
  "port": "",
  "hash": "",
  "pathname": "/",
  "search": "?name=ayman&age=22&gpa=3.5&course=programming&course=mathematics&course=algorithms",
  "parameters": {
  "name": "ayman",
  "age": 22,
  "gpa": 3.5,
  "course": [
     "programming",
     "mathematics",
     "algorithms"]
  }
}
```
 

## Why is it important to be able to turn JavaScript objects into querystrings and back again?

Query string in URL is very useful to work with dynamic content. Generally, server-side language is used to get query string from URL. But you can also get query string parameters from URL to client-side. The query string parameters and values can be easily retrieved from the URL using JavaScript.

## How to Get Query String Parameters from URL using JavaScript:

Assume URL is : 
```javascript
http://codexworld.com/index.php?type=product&id=1234 
```
Get Query String Parameters :

Use location.search to get query string parameters including the question mark (?).

```javascript
var queryString = location.search;
// ?type=product&id=1234
```
Get Query String Parameter Value :

```javascript
var urlParams = new URLSearchParams(location.search);

urlParams.has('type');  // true
urlParams.get('id');    // 1234
urlParams.getAll('id'); // ["1234"]
urlParams.toString();   // type=product&id=1234

```

## How to Write Valid URL Query String Parameters

* When building web pages, it is often necessary to add links that require parameterized query strings. For example, when adding links to the various validation services. 
* writing valid URL query string parameters, but there are easier, more efficient ways to produce valid, dynamic links.

## Build a query string manually from other strings is A Bad Idea ?
One of the reasons these links aren’t validating is because they contain non-encoded ampersand ( & ) characters. Ampersands are often used in URL query strings to demarcate granular chunks of information, for example:

```javascript
http://domain.tld/function.cgi?url=http://fonzi.com/&name=Fonzi&mood=happy&coat=leather
```
To get this code to validate, we need to encode the ampersands with &amp;, for example:

```javascript
http://domain.tld/function.cgi?url=http://fonzi.com/&amp;name=Fonzi&amp;mood=happy&amp;coat=leather
```
Replacing the ampersand characters with encoded equivalents does not change the functionality of the query string, but it does produce completely valid code.

* Encode other special characters

a blank space is equivalent to “%20”

```javascript
<a href="http://delicious.com/post?url=http://domain.tld/&amp;title=The%20title%20of%20a%20post">Bookmark at Delicious</a>
``` 