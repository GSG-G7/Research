# Unit Testing
<!-- ![](http://softwaretestingfundamentals.com/wp-content/uploads/2010/12/unittesting.jpg) -->
![](https://www.guru99.com/images/1/Unit-Testing.png)

- Unit Testing is the first level of software testing
- usually performed by the developer.
- Unit testing is a software development process in which the smallest testable parts of an application, called units.
- Unit may be an individual program, function, procedure, etc.
- Usually has one or a few inputs and usually a single output.
- Unit testing can be done manually but is often automated.
- It is performed by using the White Box Testing method.
    [the internal structure/design/implementation of the item being tested is known to the tester. The tester chooses inputs to exercise paths through the code and determines the appropriate outputs.]

##  Why Unit Testing? 
To isolate a section of code and verify its correctness.

## Unit Testing Benefits:
- Unit testing helps in maintaining and changing the code and increases confidence in that.
- Issues are found at early stage.
- Codes are more reusable.
- reducing the cost of bug fixes.
- Debugging is easy.
    When a test fails, only the latest changes need to be debugged.
- Development is faster.
<br>
    ![](https://www.guru99.com/images/unit-testing.png)
<br>
## When it used ?
- Unit Testing is done during the development (coding) of an application.

- before Integration testing.

# Integration test :

## what ?
![](https://cdn.softwaretestinghelp.com/wp-content/qa/uploads/2014/12/what-is-integration-testing.jpg)

- Is a level of software testing where individual units are combined and tested as a group. 
- A typical software project consists of multiple software modules, coded by different programmers. Integration Testing focuses on checking data communication amongst these modules.


## Why ?
Although each software module is unit tested, defects still exist for various reasons like

- To verify the software modules work in unity.
- To test the interfaces between the units/modules.
- Testing focuses on checking data communication amongst these modules is fine.

## When ?
![](https://www.guru99.com/images/1/Integration-Testing.png)

- It occurs after unit testing and before validation testing.




# What is E2E Testing ?

#### End-to-end testing is where you test your whole application from start to finish.

#### It uses actual production like data and test environment to simulate real-time settings.

## Is End to End Testing really important ?

#### By writing an End to End Test it is possible to assert whether a web application works as expected or not. Plus, with E2E you will test the user flow of your application. Starting from the signup process.

#### An example for Hubba’s case would be an E2E test case for a user sign up:

### The test would involve:
- Opening Hubba in a browser and searching for certain elements.
- Performing a set of clicks and keyboard types.
- Ensuring that a user is successfully created

![](https://cdn-images-1.medium.com/max/800/1*KMFrX776LOznXpsJSfQXVw.jpeg)


# Regression Testing

## What is Regression Testing ??

- Confirm that a recent code change has not affected existing features.
- A full or partial selection of already executed test cases which are re-executed.
- Make sure that new code changes should not have side effects on the existing functionalities.

## Need of Regression Testing :-

- change in requrement .
- New feature is added .
- Bugs fixing .

## How to do Regression Testing :-
* Software maintenance require and modifications may cause the system to work incorrectly. 
* Regression Testing becomes necessary. Regression Testing can be carried out using the following techniques:

![](https://www.guru99.com/images/regressiontestingtypes.png)

## Difference between Re-Testing and Regression Testing:-
    Retesting means testing the functionality or bug again to ensure the code is fixed.

    Regression testing means to ensure that the new code has not affected other parts of the software.
## Regression Testing Tools :-
- If your software frequently changes, regression testing costs will rise up.
In such cases, Manual execution of test cases increases test execution time as well as costs.
Automation of regression test cases is the smart choice in such cases.  
    1. Ranorex Studio.
    2. Testim.
    3. Quick Test Professional (QTP).

