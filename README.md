# Design Patterns for Web Programming
## Term C202203

### Learning : Statics

[Static Variables in JavaScript(ES2015)](https://www.youtube.com/watch?v=SJ_hLzxMkow)

[Definition of a static variable (C++ syntax demonstrated)](https://www.tutorialspoint.com/cplusplus/cpp_static_members.htm)

### Learning - The Utility Class

[[VIDEO] Utility Class](https://www.youtube.com/watch?v=OC3wMsVUZek)

## Learning: Project setup and the arrow function

### The => (Arrow) function

**Important Note**: The following is just a summary of the learning objectives related to this topic. It is expected for you to watch the live / archive lecture and read the articles or watch the videos in the links provided below.

**Introduction to JavaScript arrow functions**

[Course Video - Arrow function Introduction](https://www.youtube.com/watch?v=avuoiA9kGMA)


Arrow functions, introduced in ES6/ECMAScript 2015, are a syntactically compact alternative to regular old school ES5 functions. They are undoubtedly one of the most loved features of ES6 and are almost exclusively used nowadays. Arrow functions introduced a new way to write concise functions.

Here is a typical function written in ES5 function syntax:

`function getArea(width, height) {
    return width * height;
}`

`getArea(4,5);   // returns 20`

In order to understand arrow function syntax, we will start by refactoring a regular function step by step:

`function getArea(width, height) {
  return width * height;
}`

step 1: We can start by refactoring the function declaration to use a variable assignment:

`const getArea= function (a) {
 return width * height;
}`

step 2: Then, we can refactor the regular function to an arrow function:

`const getArea = (width, height) => {
 return width * height;
}`

step 3: One of the arrow functions cool features is If the function is a single expression, you can omit the curly braces and return statement and use an implicit return:

`const getArea= (width, height) => width * height; // so nice, one line of code`

Now call / invoke the arrow function

`getArea(); // this is just like you did with the older syntax `

**The IIFE as an Arrow Function**

Remember this?

`(function(){
     // code block....
})();`

Can now be written as an arrow function! I know, it looks weird but it is just a syntax change.

`(()=> {
     // code block....
})();`

T**he this keyword**

The handling of this is also different in arrow functions compared to regular functions.

With arrow functions there are no binding of this.

In regular functions the this keyword refers to the object that called the function, which could be the window, the document, a button or something else.

With arrow functions the this keyword always refers to the object that the arrow function was defined in.

### Digging Deeper

In addition to watching the live lecture or archive, please check out the following articles or videos to help understand the above topics in further detail.

* [Arrow Function Introduction](https://www.javascripttutorial.net/es6/javascript-arrow-function/)
* [Even more basic introduction to Arrow functions](https://www.w3schools.com/js/js_arrow_function.asp)
* [Learning Arrow functions (VIDEO)](https://www.youtube.com/watch?v=h33Srr5J9nY)

### Project Setup

**GLOBAL VARIABLES ARE BAD!!**

Never create a variable outside of some closure, which is a set of curly braces. In fact , all code except for the one line that instantiates your Main will be inside of a function, that is part of a class.

All assignments should have a Main class that is instantiated with the page loads. This will ensure that all of you core logic will be inside of a class and no variables will be polluting the Global Name space. 

Your project / assignment should start off like this:

`(() => {
     const main = new Main();  // you can call this App or Assignment
})();`

The above code is the entry point into your program and will fire off the Main's constructor function. This is how and where your program begins.

## Asynchronous Programming with MVC

### IG/R - Singleton Design Pattern

* [The Singleton Design Pattern Video](https://www.youtube.com/watch?v=7FSFyFTgIvE)
* [Singleton definition and code sample (JS)](https://www.dofactory.com/javascript/design-patterns/singleton)

### IG/R - MVC Basics
* [MVC Basics](https://www.youtube.com/watch?v=D6abN_6hFuI)

### IG/R - Events

* [[VIDEO] Events-1: basics](https://www.youtube.com/watch?v=DB5xEQXVrkY)
* [[VIDEO] Events-2: The Event Object ](https://www.youtube.com/watch?v=yRnGX0Vz36I)
* [[LINK] Dispatching Events](https://javascript.info/dispatch-events)

### IG/R - Data Object
* [[VIDEO] Data Object](https://www.youtube.com/watch?v=mwUAOO_l_WQ)

### QuerySelectorAll and Form Validation
This activity will explain how to implement HTML form validation and using the querySelectorAll() method.

Before watching the video below, make sure you understand arrow functions and arrays.

There are many ways to programmatically select HTML elements using JavaScript.     

Some include:

**getElementById**() - Only allows to select an element by its id. (This has the fastest benchmark)

  `document.getElementById('testElement');`
  
**querySelector**() - lets you retrieve an element from the DOM using a CSS selector (Not as fast internally but easier to read)

  `document.querySelector('#element');  //using to select by ID ` 
  
  `document.querySelector('button');    //using to select by Tag  `
  
  `document.querySelector('.class');    //using to select by class`
  
querySelectorAll() - returns a static NodeList (similar to an Array) representing a list of the document's elements that match the specified group of selectors.

`elementList = parentNode.querySelectorAll(selectors);  `

* [Using CSS Selectors](https://dev.to/neutrino2211/using-css-selectors-in-javascript-3hlm)
* [CSS Selector test](https://www.w3schools.com/cssref/trysel.asp)
* [querySelector VS querySelectorAll](https://beamtic.com/getelementbyid-vs-queryselector)

## Factory Pattern
### Simple Factory
* [[VIDEO] Simple Factory](https://www.youtube.com/watch?v=hLhsxnowebM)
* [[LINK] Factory pattern explained with example](https://www.binpress.com/factory-design-pattern/)

### Using the Image Object
Adding an Image to the DOM - The Image object

To dynamically add an Image to the DOM, an Image object can be used.

USAGE:

Javascript

 //image file to load
 
        let imageName = "car";
        //instantiate Image object++
        let image = new Image();
        //set the src property. Include the path of the image file relative 
        //to the HTML that loads the JS file
        image.src = `assets/${imageName}.jpg`;
        //set up the event. Loading is asynchronous thus use an event listener.
        //Once the image is loaded, attach it to the desired DOM element. You must
        //wait for the image to fully load before you can attach it to the DOM 
        //or access any of its properties
        image.addEventListener("load", e=>{
            console.log(image.width);
            //Appends the image to the specified DOM as a child
            document.body.appendChild(image);
        });
        //show 0 as the width because JS is trying to show the width before
        //the image has fully loaded
        console.log(image.width);
    }
    
    



After you run your code, view the HTML in the browser and you can see the change that took place in your DOM. There is now an <img> element inside the <body> tag.

for example:

HTML

`<body>`

    `<script defer src = "scripts/game.js"></script>`
    `<img src = "assets/car.jpg">`
`</body>`

For further research, check out the following resources

* [https://www.geeksforgeeks.org/how-to-create-an-image-element-dynamically-using-javascript/](https://www.geeksforgeeks.org/how-to-create-an-image-element-dynamically-using-javascript/)
* [https://www.techrepublic.com/article/preloading-and-the-javascript-image-object/](https://www.techrepublic.com/article/preloading-and-the-javascript-image-object/)
* [https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image)

## Data Visualization

### Canvas API

### Canvas Live Lecture / Demo


