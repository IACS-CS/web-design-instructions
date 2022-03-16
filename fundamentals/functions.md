# Functions

Functions are a key element of JavaScript. As we start, I'm just going to use the word function, which is how functions have always existed. You may see "arrow functions" in examples you look up online, which are also handy, but I'm avoiding those in my introductory content for simplicity's sake.

Here is documentation on functions from some other sources if you like:
- [W3 Schools](https://www.w3schools.com/js/js_functions.asp)
- [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

## Defining Functions
At it's most basic, you can think of a function as a way to name a group of commands to run at a later time.

```
function doSomething () {
  // Every line here will run
  // when you call doSomething
}
```

When you write code like that, nothing will happen.

## Calling functions

In order to actually "run" a function, you need to either call it directly, or tell the browser when to call it.

So, for example, I could run the above code by simply writing:

```javascript
doSomething()
```

OR, more commonly, I might tell the browser to run doSomething after a certain event happens, like so:

```javascript
// Run doSomething once the whole document has loaded
document.addEventListener(
  'load',
  doSomething
);
```

# Arguments and Return Values

Functions can take arguments which are like variables you pass in. Functions can also `return` a value, which is how they provide information back to the caller.

In `typescript` you can use a colon to define the type of value you expect after each argument. This will help your code editor give you hints and errors if you later try to write code that
uses a different type of argument than the function expects.

```typescript
function double (n : number) {
  return n * 2;
}

let biggerNumber = double(7);
```

In many cases when you are writing JavaScript, the type of argument you get will be determined by the browser API you are using. For example, when you write a function to be called by an event listener, you will get an event as an argument:

```typescript

let button = document.createElement('button');
button.addEventListener(
  "click",
  function (event) {
    // The event will be an MouseEvent object
    // since this is called when a button is clicked!
    // Code here...
  }
)
```

# Organizing Code with Functions

Many times, programmers will break their code into parts using functions, even if all the code runs at once. So, for example, a very common way to start writing some animation code would be to start with a template like this:

```typescript
function animate (timestamp : number) {
  updateObjects(timestamp); // run some code to update all the objects we animate!
  clearScreen(); // clear out screen!
  drawObjects(); // draw objects for current frame!
  requestAnimationFrame(animate); // ask to run again on  next frame!
}

// Now I'd just have to write a bunch of code to do the rest...
function upateObjects (timestamp : number) {
  // fixme
}
function clearScreen () {
  // fixme
}
function drawObjects () {
  // fixme
}

requestAnimationFrame(animate); // start the animation!
```


# Arrow Functions

Arrow functions looks like this:

```javascript
(argument) => {
  // body of function
}
```

Arrow functions can also leave the braces out when they are a single line, like this, in which case they return the result of the expression:

```javascript
(n)=>n+1
```

This is very handy for writing compact functional code. For example, I could do the following:

```javascript
let numbers = [1,2,3,4,5,6,7];
let squares = numbers.map((n)=>n*n);
```


