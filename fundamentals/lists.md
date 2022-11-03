# Arrays

## Why Use Arrays?

Arrays, or lists, are a key part of any programming language.

I know it's time to teach arrays any time a student starts writing code that looks like this:

```javascript
let enemy1 = {x:10,y:10};
let enemy2 = {x:44,y:71};
let enemy3 = {x:87,y:99};
```

The *correct* way to represent something like a list of enemies is instead to use this:

```javascript
let enemies = [
  {x:10,y:10},
  {x:44,y:71},
  {x:87,y:99}
];
```

Any time you can think of what you're programming as a list, you should be using an array.

## What is an Array?

Prefer to hear it explained with live code? [Here's a video tutorial introducing the very basics](https://www.yout-ube.com/watch?v=oigfaZ5ApsM)

At its most basic, an Array is just a list of values. Anything you can represent in JavaScript can be put into an array, including numbers, strings, objects, functions, and even other arrays (for a nested array).

The *syntax* for an array is to use square brackets to start and end an array and commas between items in an array.

```javascript
let someArray = [value1, value2, value3];
```

## Accessing Array Items

To access a single array item, you can use *index notation*, which lets you specify an item to grab from an array, like this:

```javascript 
let individualItemFromArray = someArray[numberOfItemWeWant]
```

So, if we had an array like this:

```javascript
let colors = ['red','blue','green','yellow']
```

We could select items like this:

```javascript
let color = colors[2];
```

Confusingly, array numbers are **zero-based**. So the code above would set the value of `color` to `"green"` which is the 3rd item in the array. If we wanted the *second* item (`'blue'`), we'd specify `colors[1]`, and if we want the first item (`'red'`), we specify `colors[0]`.

## Typed Arrays

Though you can put any mix of values you want into an array, usually it's best to make arrays contain all the same type of information so that you know what you're dealing with when you grab items from an array. In *typescript* you can indicate the type of items in an array with a type annotation by using any type name + [].

```typescript
let enemies : {x:number,y:number}[] = {
  {x:10,y:10},
  {x:44,y:71},
  {x:87,y:99}
}

let colors : string[] = ['red','blue','green'];
let high_scores : number[] = [7, 12, 18, 99];
```

When you use a type annotation, your coding editor will give you a warning if you make one array item different from another.

## Combining Arrays with the Spread Operator

To stick arrays together, you can use the *spread* operator (...), which lets you take two arrays and put them together, like this:

```typescript
let songbirds = ['chicadee','wren'];
let waterfowl = ['duck','goose'];
// The spread operator at work...
let birds = [...songbirds,...waterfowl];
```

You can also mix in individual items along with the spread operator, like this:

```typescript
let birds = [...songbirds,...waterfowl,'hawk'];
```

### Copying Arrays

You can also use the spread operator to just create a new copy of an array, like this:

```typescript
let colors = ['red','blue','green'];
let colorsCopy = [...colors];
```


## Looping Through an Array

There are several different ways to loop through an array in JavaScript. 

### The forEach method

I find the easiest way is to use the [forEach](https://www.w3schools.com/jsref/jsref_forEach.asp) method, which calls a function for each method in your array.

```javascript
let colors = ['red','blue','green','yellow'];
colors.forEach(
  function (color,i) {
    window.alert(`The color at index ${i} is ${color})`);
  }
);
```

#### Using Arrow Functions

Note: thus far in this course, I've only used the word `function` or methods to create a function. JavaScript has another kind of function called an *arrow* function, which can be useful in for loops any time you're using the keyword *this*. An Arrow function looks like this:

```typescript
// Regular Function
function exampleFunction (arg1, arg2) {
  //body of function
}

// Arrow Function
const exampleFunction = (arg1, arg2) => {
  // body of arrow function
}
```

If an arrow function contains only one statement, you can omit the brackets and right it in one line, with the result being that the function
returns the result of the line.

```typescript
// One line arrow function
const addItems = (a, b) => a+b
```

Here's a typical use case where an arrow function would be handy:

```typescript

const player = {
  score : 10,
  bonuses : [4, 5, 8, 10],
  applyBonuses () {
    this.bonuses.forEach(
      (b)=>this.score+=b
    );
  }
}
```

## Shuffling an Array

Unfortunately, JavaScript doesn't provide a built-in method to shuffle arrays. Here's a simple one you can use:

```typescript
/* We need to shuffle, and this isn't built in in JavaScript, which
is annoying. This shuffle comes from stackoverflow:
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
export function shuffleArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
```

## Removing items from an Array

A somewhat normal pattern is to create an array of items and then remove items from the list one at a time. The typical way to do this in JavaScript is to use the `pop` method, which removes and returns the last item from a list. This is the counterpart of the `push` method which adds one item to a list.

If you are keeping track of a "stack" of items to handle, `push` and `pop` are the normal methods to use. Here's an example live:

{%include codepen.html id="zYaxyvp" %}

```typescript

const tasks = [];
// Add items to the list
tasks.push('Do homework');
tasks.push('Eat dinner');

// In some future code...
let currentTask = tasks.pop();
window.alert('The new task is ',currentTask);
```

## Further Reading...

[Here is the w3schools page on arrays](https://www.w3schools.com/js/js_arrays.asp)

[Here is my section on using multiple objects in my simple game tutorial](../tutorials/interactiveGame/multipleObjects.md)

[Here is a section on using arrays in the quiz game tutorial](../tutorials/quizgame/quizgame-4-question-types.md)