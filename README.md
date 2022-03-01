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

