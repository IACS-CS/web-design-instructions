# Functions

Functions are a key element of JavaScript. As we start, I'm just going to use the word function, which is how functions have always existed. You may see "arrow functions" in examples you look up online, which are also handy, but I'm avoiding those in my introductory content for simplicity's sake.

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


