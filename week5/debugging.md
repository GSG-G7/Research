# Debugging :

## What’s debugging?

Debugging is the process of detecting and removing of existing and potential errors (also called as ‘bugs’) in a software code that can cause it to behave unexpectedly or crash.

## Why it’s important in the development process?

-Being able to debug is a core skill for every developer.

## Here’s the debugging process: 

- Reproduce the problem.
- Describe the bug. Try to get as much input from the user to get the exact reason. 
- Try to get all the variable values and states of the program at that time. 
- Analyse the states and actions, Based on that try to find the cause of the bug.
- Fix the existing bug, but also check that any new bug does not occur.

## **Breakpoints:**

 Are set in code which stops the execution of code at that point so that the values of variables can be examined and debugging function can be called at that time.


 ### **Breakpoints method vs console.log() :**

 - In console.log() method the user has to understand the code and manually put console.log() at points in the code. But in breakpoints method, we can set breakpoints through Developers tool anywhere in code without even knowing it.

- In console.log() method we have to manually print values of different variables but at a certain breakpoint, all the values of all variables are displayed automatically in Developers tool.

- You may ship your code with them, and consequently, share information you may not want to share to users. Most linters however, like eslint, will warn you when you have console.log() statements in your code.

## **Adding breakpoints:**

## In the chrome devTools:

Chrome Dev Tools has a nifty feature for adding breakpoints based on common events that occur in the browser. On the far right of the dev tools, just after the breakpoints section, you will see categories of breakpoints.

![](https://scotch-res.cloudinary.com/image/upload/dpr_1,w_800,q_auto:good,f_auto/media/303/CfrMFCkvROW28ZlSnrSs_Screen%20Shot%202016-05-23%20at%2020.32.19.png)

## debugger keyword:

When you put the keyword ***debugger*** anywhere in your JavaScript code, the execution of that code will stop at that line and the chrome dev tools will be opened, highlighting the line where the execution has stopped, just as we set the breakpoint when we started. You could use this feature to debug JavaScript in chrome and other browsers.

## Demo of debugging JavaScript in Chrome DevTools :

### [Open Demo](https://googlechrome.github.io/devtools-samples/debug-js/get-started)

## Demo of debugging in VScode or any other editors :

### [source](https://github.com/fadeomar/de-bugging-project)