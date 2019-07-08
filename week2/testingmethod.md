# Testing methodologies
<br/>
---
## some of popular testing frameworks?:
1. [MochaJS](https://mochajs.org/) 
     -  the most pupular testing framework support backend and frontend testing.

2. [Jest](https://jestjs.io/)
    - is one of the most popular frameworks that is maintained regularly by Facebook, that's good for react based app.

3. [AVA](https://github.com/avajs/ava)
     - is a minimalistic light-weight testing framework that leverages asynchronous nature of Javascript. AVA can perform tests concurrently.

4. [Tape](https://github.com/substack/tape)
     - tap is similar to AVA in its architecture. It does not support globals.

5. [Cypress.io](https://www.cypress.io/)
     - testing framework that practically runs on the browser. It provides an interactive UI on the browser in the form of a web pag.

6.  [Qunit](https://qunitjs.com/)
    - very helpfull testing frame work dedicated to using with a frontend. It is the first choice by developers of the JQuery, JQuery Mobile and JQuery UI libraries.
---
<br/>
---
## How and why are they different?

#### [Moca](https://mochajs.org/)
- support UI.
- clear documentation.
- Supports any browser including headless chrome library.

#### [Jest](https://jestjs.io/)
- nearly full coverage can be achieved and tests can be very organized.
- simple, and relatively fast.
- Single framework fit for NodeJS, VueJS, React, Angular and other.

#### [Tape](https://github.com/substack/tape)
- Clean light-weight footprint.
- Provides just bare-metal code and gives the developer.
- complete freedom to write test cases.
- Supports ES6, Typescript and coffee script standards.
- Supports test execution on most modern browsers.

#### [Qunit](https://qunitjs.com/) 
- you can reuse code or use old test script.
- viewing test case outputs visually.
- there is plugin allows faster test case development.
- dedicated to using with a frontend.

---
<br/>
---
## Common testing methods 
There are common testing methods among testing frameworks.
We have different types of testing methods, they are used for different purposes:
* main purposes such as (test())
* Assertion purposes such as (deepEqual and equal)
* configuration puposes such as (config)
* Callbacks such as (begin( callback )) -- Registers a callback to fire whenever the test suite begins.
* Async control such as (timeout( duration )) -- Sets the length of time to wait for async operations before failing the test.

Most testing methods perform the same functionality in different frameworks. But they may have different syntax.

---
<br/>
---
## What is [Qunit](https://qunitjs.com/) ? 
- QUnit is a unit testing framework for JavaScript programming language
- QUnit is an open source framework used for writing and running tests
- important in the test driven development. "first testing then coding"
- used by jQuery, jQuery UI, and jQuery Mobile projects.

 * ## How to install it ?
    - npm i qunit

 
### [qunit documentation](https://api.qunitjs.com/)

equal : 
- synatx : equal( actual, expected, message)
- actual : Expression being tested
expected ,Known comparison value
<br/>
message (string) , A short description of the assertion

The equal assertion uses the simple comparison operator (==) to compare the actual and expected arguments. When they are equal, the assertion passes; otherwise, it fails. When it fails, both actual and expected values are displayed in the test result, in addition to a given message.

example:
```
QUnit.test( "a test", function( assert ) {
  assert.equal( 1, "1", "String '1' and number 1 have the same value" );
});
```

deepEqual:
The deepEqual() assertion can be used just like equal() when comparing the value of objects

synatx : deepEqual( actual, expected, message)
actual : Expression being tested
expected :Known comparison value
message (string) : A short description of the assertion





QUnit.test( 'deepEqual failing test', function( assert ) {
  assert.deepEqual( {
    a: 'Albert',
    b: 'Berta',
    num: 123
  }, {
    a: 'Albert',
    b: 'Berta',
    num: '123' // Fails: the number `123` is not strictly equal to the string `'123'`.
  } );
} );
---
## end  :) 
    