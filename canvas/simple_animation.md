# Creating a Simple Animation

The basic steps of an animation involve drawing something repeatedly, making a small change to your drawing each time you draw it.

## Prerequisites

Before you can animate, you need to [create a canvas](creating_a_canvas.md) and have a reference to it in JavaScript. You also need to know how to make a basic drawing, whether that be a simple shape or drawing an image. Finally, you'll need to know how to create variables to store information that you change.

## The Simplest Animation: a dropping square

*JavaScript: Assuming you have canvas and ctx defined*
```javascript
// Define a variable to hold our changing value
let y = 0;

// Define a function we call once per animation
function animateSquare () {
  // Clear the current drawing
  ctx.clearRect(0,0,canvas.width,canvas.height);  
  // Draw the rectangle at the new "y" value
  ctx.fillRect(10,y,50,50);
  // Add one to the y value
  y += 1;
  // Ask the browser to call us again at the animation frame
  requestAnimationFrame(animateSquare);
}

animateSquare();
```

Here it is live:

{% include codepen.html id="ExoaRjv"}

## Getting Fancier: Using an Object to store information

Above, I included a simple variable, y, and only animated on part of the drawing. Often, we want to think of the thing we are animating as an object, which contains a number of changing properties, not just one.

We can use the object literal syntax to group any properties we want together into one object, like this:

```javascript
let square = {
  x : 10,
  y: 10,
}
```

We can then use **dot notation** to update or read those values, like this:

```
function animateSquare () {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillRect(square.x, square.y, 100, 100);  
  square.x += 1;
  square.y += 1;

}
```


Once we've created an object, we can update all manner of properties on the object, as in this example:

```javascript
let square = {
  x : 10,
  y : 10,
  vx : 10,
  vy : 10,
  s : 20,
  growing : true;
  color : 'red',
}
```

We can then use those properties to draw and move the square, like this...
```javascript
ctx.fillStyle = square.color;
ctx.fillRect(square.x,square.y,square.s,square.s);
square.x += square.vx;
square.y += square.vy;
```

Finally, we can use **if statements** to check for things like when the square hits the edge of the screen, with lines like this:

```javascript
if (square.x > canvas.width) {
  square.x = canvas.width; // stop square at canvas edge
  square.vx *= -1; // reverse velocity in the x direction
}
```

When we put it all together, we get something like this:

```javascript
let square = {
  x: 10,
  y: 10,
  vx: 14,
  vy: 10,
  s: 20,
  growing: true,
  color: "red"
};

function animateSquare() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = square.color;
  ctx.fillRect(square.x, square.y, square.s, square.s);
  square.x += square.vx;
  square.y += square.vy;

  if (square.vx > 0) {
    square.color = "green";
  } else {
    square.color = "red";
  }
  if (square.x > canvas.width) {
    square.x = canvas.width;
    square.vx *= -1;
  }
  if (square.y > canvas.height) {
    square.y = canvas.height;
    square.vy *= -1;
  }
  if (square.y < 0) {
    square.y = 0;
    square.vy *= -1;
  }
  if (square.x < 0) {
    square.x = 0;
    square.vx *= -1;
  }
  if (square.growing) {
    square.s += 1;
  } else {
    square.s -= 1;
  }
  if (square.s < 5) {
    square.growing = true;
  }
  if (square.s > 50) {
    square.growing = false;
  }
  requestAnimationFrame(animateSquare);
}
animateSquare();
```

{% include codepen.html id="BaJyVLX" %}

### Tidying it Up with Function Calls

In practice, it can be better to break something like the above into multiple function calls to simplify our logic.

```

function animateSquare () {
  updateSquare(square);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawSquare(square);
  requestAnimationFrame(animateSquare);
}

function drawSquare (square) {
  ctx.fillStyle = square.color;
  ctx.fillRect(square.x,square.y,square.s,square.s);
}

function updateSquare (square) {
  updateColor(square);
  updateVelocity(square);
  updatePosition(square);
  updateSize(square);
}

function updatePosition (square) {
  square.x += square.vx;
  square.y += square.vy;
  // Don't let square move outside of view...
  if (square.x < 0) {square.x = 0}
  if (square.y < 0) {square.y = 0}
  if (square.x > canvas.width) {square.x = canvas.width}
  if (square.y > canvas.height) {square.y = canvas.height}
}

function updateVelocity (square) {
  if (square.x >= canvas.width || square.x <= 0) {    
    square.vx *= -1;
  }
  if (square.y >= canvas.height || square.y <= 0) { 
    square.vy *= -1;
  }
}

function updateColor (square) {
  if (square.vx > 0) {
    square.color = 'red';
  } else {
    square.color = 'blue';
  }
}

function updateSize (square) {
  if (square.growing) {
    square.s += 1;
  } else {
    square.s -= 1;
  }
  if (square.s > 100) {
    square.growing = false;
  }
  if (square.s < 1) {
    square.growing = true;
  }
}

```

{%include codepen.html id="LYeErvq"}

## Creating a List of Objects to animate

In JavaScript, we can define a list with square brackets, like this:

```javascript
let emptyList = [];
```

We can add items to a list by putting the items in the list separated with commas, like this:

```javascript
let colors = ['red','blue','green','yellow'];
```

It is then easy to loop over items in a list by using the ```forEach``` method of a list to call a function for each item on a list.

Knowing all of this: it becomes very simple to refactor our earlier code to animate an entire list:

First, we replace our initial square with a list `squares`

```javascript
let squares = [{
  x: 10,
  y: 10,
  vx: 14,
  vy: 10,
  s: 20,
  growing: true,
  color: "red"
},{
  x : 20,
  y:44,
  vx:-20,
  vy:-100,
  s:55,
  growing:false,
  color:'green'
}]
```

Second, we replace our calls to update an individual squares with forEach calls to update all squares, like this...

```
function animateSquares () {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  squares.forEach(updateSquare);
  squares.forEach(drawSquare);
  requestAnimationFrame(animateSquares);
}
```

{% include codepen.html id="bGaNjVq" %}
