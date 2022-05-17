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