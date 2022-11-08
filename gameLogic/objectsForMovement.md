# Using Objects to Track Movement

JavaScript objects are a great way to track objects in games. 

You create an object in JavaScript like this:

```javascript
let thing = {
  property : value,
  otherProperty : otherValue,
}
```

Filling in to represent an item in a game with a position, we might have something like this:

```javascript
let rocket = {
  x : 100,
  y : 100,
}
```

Properties can be anything you want. Values can be any valid value in JavaScript (numbers, strings, arrays, other objects, etc).

When we think about movement, we're really just updating our x and y coordinates on a regular basis. A simple way to do this is to track the movement in each direction with a separate property, like so (the rocket below is moving slowly to the right and quickly up)

```javascript
let rocket = {
  x :  100,
  y : 100,
  vx : 5,
  vy : -20,
}
```

JavaScript even lets us add *methods* to objects, which are functions that update the object. We could do something like this:

```javascript
let rocket = {
  x : 100,
  y : 100,
  vx : 5,
  vy : -20,
  move : function (timeUnit = 1) {
    /* The special word "this" represents the current object */
    this.x += this.vx * timeUnit;
    this.y += this.vy * timeUnit;
  }  
}
```

It's important to realize that this object is *abstract* and has nothing to do with what's being drawn on your game. What you're actually doing is simply updating numbers in an object.

Here's an example of the code above implemented with pure HTML animation:

{%include codepen.html id="vYdxLqO" %}

## Constructors

You'll notice above I used the special keyword `this` to refer to the rocket within the *method* of rocket (the function attached to the object). 

JavaScript also has a special way to create objects with a `new` constructor which is designed for this purpose. In that case, we call a function with the `new` keyword and then within the function we attach whatever methods we want to the `this` object.

By convention, functions which should be called with the `new` keyword are *capitalized* to indicate that they are constructors.

```javascript
function Rocket () {
  this.x = 100;
  this.y = 100;
  this.vx = 5;
  this.vy = -20;
  this.move = function (timeUnit = 1) {    
    this.x += this.vx * timeUnit;
    this.y += this.vy * timeUnit;
  }  
}

let rocket = new Rocket();
```

Note, in this case, we can then create many moving objects with the same function.

For example, I might do something like this:

```javascript

function Rocket (element, x=0, y=0, vx=5, vy=-20) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.move = function (timeUnit = 1) {    
    this.x += this.vx * timeUnit;
    this.y += this.vy * timeUnit;
  }
  this.element = element;
  this.draw = function () {
    this.element.style.position = 'absolute';
    this.element.style.left = `${x}px`;
    this.element.style.top = `${y}px`;
  }
}

let newRocketEl = document.createElement('div');
document.body.appendChild(newRocketEl);
let rocket = new Rocket(newRocketEl);

```

Note: JavaScript also supports the `class` keyword familiar from other programming languages to do the equivalent of the above. Here's a translation of the above using the `class` keyword (which is basically just syntactic sugar for standard JavaScript constructor behavior):

```typescript
// This is typescript, with JavaScript classes
// AND typescript type annotations

class Rocket {
  x : number;
  y : number;
  vx : number;
  vy : number;
  element : HTMLElement
  constructor (element, x=0, y=0, vx=5, vy=-20) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.element = element;
  }

  move (timeUnit = 1) {    
    this.x += this.vx * timeUnit;
    this.y += this.vy * timeUnit;
  }
  
  this.draw = function () {
    this.element.style.position = 'absolute';
    this.element.style.left = `${x}px`;
    this.element.style.top = `${y}px`;
  }
}

let newRocketEl = document.createElement('div');
document.body.appendChild(newRocketEl);
let rocket = new Rocket(newRocketEl);
```