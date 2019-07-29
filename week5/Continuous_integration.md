# Continuous Integration (CI): 
## What is Continuous Integration :
 development practice that requires developers to integrate code into a shared repository several times a day.
allows software developers to work independently on features in parallel. When they are ready to merge these features into the end product, they can do so independently and rapidly. 

## Why using Continuous Integration :
* Say goodbye to long and tense integrations
* Spend less time debugging and more time adding features
* Stop waiting to find out if your code’s going to work
* Reduce integration problems [ Risk ] allowing you to deliver software more rapidly.
* Better Communication: speeds up your workflow and encourages the team to push every change without being afraid of breaking anything.. 
* Faster iterations
* Prevents divergence in different branches as they are integrated regularly
* Allows earlier detection and prevention of defects
* Building features more incrementally saves time on the * debugging side so you can focus on adding features

## More than a process 

* Maintain a single source repository
Automate the build
* Make your build self-testing
* Every commit should build on an integration machine
* Keep the build fast
* Test in a clone of the production environment
* Make it easy for anyone to get the latest executable version .
* Everyone can see what’s happening 
* Automate deployment . 

## How to Get Start with CI :
* The foundational dependancy of CI is a version control system (VS) ex: Git .
* Finding a Version control hosting platform ex: github, bitbucket and gitlab . 
* Integration approval steps should be added, The most valuable step is automated tests.
> Testing Framework has to be installed then test codes and test cases were written by developers .  
* CI hava features that can do syntax checkers, code style formatters .
* automate tests to be able to run them for every change that is made to the main repository by using [unit test].

* Its good Idea to couple automated tests with a test coverage tool that will give you an idea of how much of your codebase is covered by your test suite [coverage more than 80% and will help you to find untested code].
 
## Advices :
- Team responsibilities
* Check in frequently
* Don’t check in broken code
* Don’t check in when the build is broken
* Don’t go home after checking in until the system builds.

## Continuous Integration(CI) Tools :
1) Buddy : 
</br>
tool for web developers designed to lower the entry threshold to DevOps. It uses delivery pipelines to build, test and deploy software. 
</br>
![](https://www.guru99.com/images/1/buddy_logo.png)
2) Jenkins:
</br>
open-source continuous integration tool. It is written using the Java programming language. It facilitates real-time testing and reporting on isolated changes in a larger code base.
</br>
![](https://www.guru99.com/images/2-2017/072817_0526_Top20Contin1.png)

3) TeamCity:
</br> 
Continuous Integration server which supports many powerful features.
</br>
![](https://www.guru99.com/images/2-2017/072817_0526_Top20Contin2.png)

4) GoCD:
</br>
Open source Continuous Integration server. It is used to model and visualize complex workflows with ease.
</br>
![](https://www.guru99.com/images/2-2017/072817_0526_Top20Contin4.png)

5) Travis CI:
</br>
Travis is a popular CI Tool that is free for open source projects. As it is hosted, it does not have to depend on any platform. This CI tool provides supports for many build configuration and languages like Node, PHP, Python, Java, Perl, etc.
</br>
![](https://www.guru99.com/images/2-2017/072817_0526_Top20Contin3.png)

### Features:

* Travis uses the virtual machines to build application
* Notifications via Slack, HipChat, Emails and more
* Allows running parallel tests
* Linux and Mac, and iOS supported
* Easy Setup, no installation required.
* Powerful API and command line tool

> ## Now Lets See the Demo Using Travis CI :

