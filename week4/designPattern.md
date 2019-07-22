# **What is the Design Patterns?** :sunglasses: :point_down:

A design pattern is a term used in software engineering for a general, reusable solution to a commonly occurring problem in software design.

## **Design Pattern Elements :**

Each pattern consists of many elements:

- **The Pattern Name:** Identify the pattern, distinguish it and defines terminology.
- **The Problem:** Describes when to apply the pattern describing the problem and its context.
- **The Solution:** Describes elements that makes up the design, their relationships and responsibilities.
- **The Consequences:** The results and trade offs of applying the pattern.

# **Categories of Design Patterns :**

## **Creational Design Patterns**

Are design patterns that deal with object creation mechanisms, trying to create objects in a manner suitable to the situation.

- Abstract Factory
- Factory Method
- Singleton

## Example about Singleton

### **Problem :**

Ensure that a class has just a single instance
![Singleton Example](https://refactoring.guru/images/patterns/content/singleton/singleton-comic-1-en.png)

Provide a global access point to the instace

### **Solution :**

All solutions have two steps in common:
the first one is :
Make the default constructor private
the second one: create a static creation method that acts as a constructor.

### **Strucure :**

![Structure of singleton](https://refactoring.guru/images/patterns/diagrams/singleton/structure-en.png)

### Code example:

```javaScript
var printer = (function () {

  var printerInstance;

  function create () {

    function print() {
      // underlying printer mechanics
    }

    function turnOn() {
      // warm up
      // check for paper
    }

    return {
      // public + private states and behaviors
      print: print,
      turnOn: turnOn
    };
  }

  return {
    getInstance: function() {
      if(!printerInstance) {
        printerInstance = create();
      }
      return printerInstance;
    }
  };

  function Singleton () {
    if(!printerInstance) {
      printerInstance = intialize();
    }
  };

})();
```

## **Structural Design Patterns**

Are design patterns that ease the design by identifying a simple way to realize relationships between entities.

- Adapter
- Facade
- Proxy

## **Behavioral Design Patterns**

Are design patterns that identify common communication patterns between objects and realize these patterns. By doing so, these patterns increase flexibility in carrying out this communication.

- Strategy
- Observer
- Iterator

# **What is Module Design Pattern ?**

- A Module is a piece of self-contained code so we can update the Module without affecting the other parts of the code.
- Modules also allow us to avoid namespace pollution by creating a separate scope for our variables.
- We can also reuse modules in other projects when they are decoupled from other pieces of code.
- Modules are an integral part of any modern JavaScript application and help in keeping our code clean, separated and organized.

```javaScript
(function() {

    // declare private variables and/or functions

    return {
      // declare public variables and/or functions
    }

})();
```

## References:

https://www.dofactory.com/javascript/design-patterns
