## Animating movement

In the [Events](./events.md) step you learned how to make your bucket respond to a simple keypress. If we want a smoother, nicer looking animation, though, it will often require a bit more of a sophisticated approach.

For this tutorial, I'm going to make the button slide as if pushed on a smooth surface each time the user presses a button.

If the motion is going to appear smooth, that means it has to be controlled in my animation loop as opposed to in my event listener.

But of course the rules for how my bucket moves don't really belong in *either* my event module or my animation module -- instead, I should put all the logic about my bucket into `bucket.ts`, so rather than updating `bucket.x` directly in my event listener, I'm going to create a new method called `push` in `bucket.ts` which will handle the movement logic.

The first step of this "refactoring" is to move my old code over to bucket (at this step, I'm just reorganizing my code, not changing what happens). 

**Refactor Step 1**: Move movement code to  `bucket.ts`:

```typescript
export const bucket = {
  // ... old code ...
  push (amount) {
    // Fix Me: we will make this better soon!
    this.x += amount;
    // End code to fix
  }
}
```

**Refactor Step 2**: Change my key handler to use my new method

Now I'm going to take my old code, in `handlers.ts`, which looked like this:

```typescript
 // this code is in a keydown handler...
    if (event.key=='ArrowRight' || event.key=='l') {
      bucket.x += 10;
    }
    if (event.key=='ArrowLeft' || event.key=='j') {
      bucket.x -= 10;
    }
```

and *change* it to call my new method

```typescript
    // this code is in a keydown handler...
    if (event.key=='ArrowRight' || event.key=='l') {
      bucket.push(10);
    }
    if (event.key=='ArrowLeft' || event.key=='j') {
      bucket.push(-10);
    }
```

## Creating a smooth animation

If I want the bucket to animate smoothly, I can't simply update its position all at once. Instead, I need to store it's "momentum" in a variable, and then use update the bucket one step at a time to "slide" it until it runs out of momentum.

To keep track of that, I'll need to add a new property to my bucket object to store its momentum, and then I'll need a new `update` method that runs once per animation frame and transfers energy from the `momentum` into my position by *adding* to `bucket.x` and *subtracting* from my `bucket.momentum`

```typescript
import {ctx, canvas} from './canvas';

export const bucket = {
  x : 200,
  // ...
  momentum : 0,
  draw () {        
    // ...
  },
  push (amount) {
    this.momentum += amount;    
  },
  update () {    
    // I use delta for the amount of the 
    // change (this is convention from math
    // and science where it's often written with the
    // greek letter Δ)
    let delta = this.momentum / 5;
    this.x += delta;
    this.momentum -= delta;
  }
}
```

Notice that all of my bucket logic has landed in the file `bucket.ts`  I'll need to wire this up in my `animation.ts` file so it actually runs the animation and in the `handlers.ts` file so it actually gets pushed by the user, like so:

*animation.ts*
```typescript
...

function doUpdates () {
  bucket.update();
}

...
```

*handlers.ts*

```typescript
// in my keydown handler...
...
bucket.push(10);
...
```

At this point, I have a nice sliding animation.

## Other Kinds of Movement

There are many other kinds of basic physics you could represent with a keypress. In most cases, it means creating an extra variable (or multiple extra variables) to represent the speed of your object (or its momentum or gravity or whatever you're modeling) and then creating functions to represent changes to that momentum.

In all cases, the event handlers would be wired up to the changing functions and your update function would get called in your animation loop.

Here are a few quick examples:

### An object sliding on ice
```typescript
// Our object will move smoothly from 
// left to right and never slow down.

const maximumSpeed = 20;

const skater = {
  x : 200, // intiial position
  vx : 0, // initial speed
  accelerate (amount) {
    this.vx += amount;
    // Enfoce a maximum speed possible
    if (this.vx > maximumSpeed) {
      this.vx = maximumSpeed
    }
    if (this.vx < -1 * maximumSpeed) {
      this.vx = -1 * maximumSpeed;
    }
  },
  update () {
    this.x += this.vx;
    // Let's bounce off the edges
    // of the screen...
    if (this.x > canvas.width) {
      this.x = canvas.width;
      this.vx *= -1;
    }
    if (this.x < 0) {
      this.x = 0;
      this.vx *= -1;
    }
  }
}
```

### A Falling Object

```typescript
// Here's a simple model for an object falling.
// Objects that fall accelerate downward, which
// means they go faster and faster.
const gravity = 1;
const terminalVelocity = 10;
const groundBounce = 0.8;

const fallingThing = {
  y : 250, // initial Y position
  vy : 0, // initial speed in the Y direction
  jump (amount) {
    this.vy -= amount; 
  },
  update () {
    // Add our current speed to our position
    this.y += this.vy;
    // Increase our downward speed (go gravity!)
    this.vy += gravity;
    if (this.vy > terminalVelocity) {
      this.vy = terminalVelocity;
    }
    if (this.y > canvas.height) {
      // Bounce off the ground
      this.vy *= -1 * groundBounce;
    }
  }
}
```

