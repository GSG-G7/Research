# week1
# **CSS Team**

# The Research Team:

 - Sajeda Ismail
 - Imad El-Shataly
 - Yosif El-Najar
 - Fares El-Helo

# *Introduction:*

# CSS BEM
 
## What is BEM?
#### BEM is a methodology for naming classes in HTML and CSS Developed by the team at Yandex.
 
## It's shorted for :
### Block, Element, Modifier
 
## How to use BEM?
1. Give a class to the parent Eelement
2. The childes of the parent should have a calss in this syntax
#### parentClassName__elemenClassName
3. If you want to modify the parent look or any of the childes look, You have to give it another class in the following syntax
#### elementClassName--nameOfStyle
 
#### Visit the link to see a live preview of it [Click Here](https://codepen.io/yosefalnajjarofficial/pen/jjzbXd)
 
### Problems or comon mistakes with pen
#### The names of childes classes should be associated with the parents name  
1. ```html
    <a class="btn" href="#">
      <div class="nav__listItem">Item one</div>
      <div class="nav__listItem">Item two</div>
    </a>
    ```
   
#### Never overriding modifiers in an unrelated block.
 
2. ```css
    .nav .nav__listItem .btn--orange {
        background-color: green;
    }
    ```
 
 
### Why to use BEM?
* To make it easy to understand HTML elements before going to the CSS
* It's an easy way for other developer to edit the CSS
* Work faster
* More readable





## We can specify wich approach is more fit with our bussiness by:

1. Who are the audience
2. How they access to the website
3. Actions they will perform

# 1) *Responsive (Desktop First):* 

- Starts from the desktop with maximum resolution and then go down to the smallest screens.

- More fit to the B2B companies.


## Pros :smile:

- Good for heavily stacked information websites

- Easier for large forms and complex call-to-actions

- Cost-effective development and maintenance

- Great for SEO 

## Cons: 

- The mobile experience is not 100% optimized

# *2) Mobile first dsesign*

- Design the website as an mobile application first, providing excellent ux, high speed, full of media then modify it a bit to be viewed neatly on tablet and desktop devices.

## Pros :smile:
- Better user-experience on mobile devices

- Majority of internet browsing in on a smartphone

- Design website to use built-in phone features

- Cheaper than building an iOS, Android or Hybrid App

## Cons:

- The desktop experience is not 100% optimized

- Not suited for content heavy websites

# *Responsive Design Principles:* 

## Responsive vs Adaptive web design 

### 1) Responsive vs Adaptive web design

By Responsive Design we need to make just one layout for all Screen Sizes and use CSS media to  change styles, the page will resize its width bad height to fit the screen size.

 Adaptive web design uses distinct layouts for multiple screen size.

![alt img1 ](http://blog.froont.com/content/images/2014/11/01_Responsive-vs-Adaptive.gif)


### 2) The flow

As screen sizes become smaller, content starts to take up more vertical space and anything below will be pushed down.

![alt img2 ](http://blog.froont.com/content/images/2014/11/04_Flow-vs-Static-2.gif)

 
### 3) Relative units
![](http://blog.froont.com/content/images/2014/11/02_Relative-Units-vs-Static-Units-1.gif)

### 4) Max and min width
![](http://blog.froont.com/content/images/2014/11/07_Max-width-vx-No-max-width-1.gif)


### 4) Breakpoints
![](http://blog.froont.com/content/images/2014/11/03_With-Breakpoints-vs-Without-Breakpoints-1.gif)


### 5) Bitmap images vs Vectors
![](http://blog.froont.com/content/images/2014/11/09_Vectors-vs-Images-1.gif)

### 6) Nested objects
![](http://blog.froont.com/content/images/2014/11/05_Nested-vs-Not-Nested-1.gif)

### Sources(rwd):
- [9 basic principles of responsive web design](http://blog.froont.com/9-basic-principles-of-responsive-web-design/)

- [Choose your strategy: Mobile-First Web Design vs. Responsive Web Design](https://darwindigital.com/mobile-first-versus-responsive-web-design/)

- [Why mobile first design is the only 2019 strategy that will work](https://searchenginewatch.com/2019/03/01/why-mobile-first-design-is-the-only-2019-strategy-that-will-work/)

