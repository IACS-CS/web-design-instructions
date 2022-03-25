# Collisions

Most games involve objects interacting on the screen in some way.

Most of the time, you're going to want to implement some logic to check for a collision between objects.

For this to work, we're going to assume that in your game you currently have a system with separate representations of objects in state, in one of the following forms:

*An Animation Loop*

1. Create initial game state (objects, variables)
2. Kick off animation loop
   1. Update game state
      (CHECK FOR COLLISION HERE!)
   2. Draw objects based on game state
   3. Request next animation frame
3. Update game state based on user events (key presses etc)
  
*An event-driven loop*
1. Create initial game state (objects, variables)
2. Listen for user events, and in response to clicks/keypresses
   1. Update game state
      (CHECK FOR COLLISIONS HERE!)
   2. Redraw screen based on game state

In both cases, you'll usually want to check for collisions as part of your code that updates objects (makes objects move, makes them fall, etc).

## How to check the location of objects

For most students, you'll have either an object or a variable that represents the position of each object on the screen. 

When you're looking for collisions, you're really just checking the values of a set of variables. So though your game might have a picture of a basketball going through a hoop, your game will simply be comparing  numbers representing the positions of the ball and hoop rather than looking at what's on the screen and seeing if the drawings overlap.

### Using Inequalities in an If Statement

Let's imagine a very simple game in which I shoot an arrow across the screen. When the arrow reaches the edge of the screen, I want to check if it hit the target.

Imagine I know the bullseye is at the coordinate (500,200) and I have a set of coordinates representing the arrow. 

#### The problem with just checking equality

It would be very tempting to write code like this:
```javascript
/* You'd think this would work, but it probably won't! */

function checkArrow () {
  if (arrow.x == 500) {
    if (arrow.y == 200) {
      score += 1;
    }
  }
}
```

The problem with this code is that your arrow's location is almost certainly updated in a loop that adds to its x and y values based on how much time has passed. In all likelihood, your arrow's x and y coordinates will **never** be *exactly* equal to the target coordinates, since it's updated every few milliseconds, so in practice, your arrow's values might look like this

- (494, 205)
- (498, 202)
- (502, 198)

That arrow will look like it moves right through the target at (500,200) but the values will never be equal.

#### Inequalities to the rescue!

The solution is to check whether the arrow is *close enough* to the target. For most games, just setting a reasonable range of error will be fine.

```javascript
/* Inequalities to the rescue! */

function checkArrow () {
  // if the is past the "wall"
  if (arrow.x >= 500) { 
    arrow.x = 500; // stick the arrow to the wall
    // And the arrow is between 198 and 202...
    if (arrow.y >= 195 && arrow.y <= 204) {
      score += 1; // a hit!
    }    
  }
}
```

A slightly "fancier" way to do this is to use subtraction and absolute values to check how far the arrow is from your object.

The generic condition, written in math, would be:

  |actualValue - targetValue| < tolerance

In JavaScript, we write that:

```javascript
  if (Math.abs(actualValue) - targetValue) <= tolerance) {
    // A hit!...
  }
```

Here it is in practice:

```javascript

function checkArrow () {  
  // if the is past the "wall"
  if (arrow.x >= 500) { 
    arrow.x = 500; // stick the arrow to the wall
    // And the arrow is between 198 and 202...
    if (Math.abs(arrow.y - 200) <= 5) {
      score += 1; // a hit!
    }    
  }
}
```

For my actual "arrow" game I went ahead and implemented a scoring system where the distance from the center of the target corresponds to a score. Here's what that looks like:

```javascript
/* Check whether our arrow hits the target */
function checkForHit() {
  /* Because the arrow lands on the wall, we only have
  to check the target in ONE dimension: this function will
  only run when the arrow hits the wall, so the question is
  how far is the arrow from the bulleye when it lands? */
  shots += 1;
  let distance = Math.abs(arrow.y - target.y);
  if (distance < 5) {
    score += 50;
  } else if (distance < 10) {
    score += 25;
  } else if (distance < 15) {
    score += 10;
  } else if (distance < 25) {
    score += 5;
  }
}
```

And here's the full arrow example for your reference:
{% codepen.html id="OJzpbvV" %}


### Using the Distance Formula

To check the distance of two objects in space, you'll want to use the distance formula. A nice thing about programming, is you can encapsulate bits of calculations you have to do with functions, so you could think about calculating whether a player has collided with an enemy like this:

```javascript

function checkForHit () {
  let tolerance = 5;
  /* If the player is less than tolerance pixels from enemy */
  if (getDistance(player,enemy) < tolerance) {
    /* Add to score! */
    score += 1;    
  }
}
```

Next you'll have to define "distance" -- I'm going to define it in terms of two objects with an x and a y property.
It's customary to use "a" and "b" to refer to arbitrary items being compared, but you can call the parameters whatever
you like:

```javascript
/* Calculate the distance between a and b using the pythogorean theorem */
function getDistance (a, b) {
  return Math.sqrt( // the square root of 
    (a.x - b.x) * (a.x - b.x)  // the horizontal side of the triangle squared
    +                          // plus
    (a.y - b.y) * (a.y - b.y) // the vertical side of the triangle squared
  );
}
```

Here's a simple game where you drive around a circle looking for invisible squares.

{%include codepen.html id="VwypPWv" %}
