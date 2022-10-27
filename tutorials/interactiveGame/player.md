# Making a Player: Our First Object

So far, we've created functions and variables, and we've *used* objects, but you've likely never created an object before in JavaScript. We're going to create an object for our player using the simplest method possible (there are several ways to do this): the object literal.

## An Overview of Objects
An object literal looks lke this:

```javascript
let newObject = {
  property : "value",
  otherProperty : "otherValue",
  method (parameters) {
    // function body
  },
  otherMethod (otherParameter) {
    // function body
  }
}
```

Properties are like variables that are *contained* in the object and *methods* are like functions that are contained in the object.

In practice, in a game, we might expect to see an object that looked like this:

```javascript
let player = {
  name : 'Giovanna',
  age : 22,
  goals : 12,
  speed : 8,  
}
```

Or like this:

```javascript
let paddle = {
  size : 20,
  position: 52,
  speed : 2,
  move () {
    this.position += this.speed;
  },
  accelerate (delta) {
    this.speed += delta;
  }
}
```

I recommend taking a second to read the [w3schools page introducing objects](https://www.w3schools.com/js/js_objects.asp).


## Creating a Simple Object

For our first object, we're going to create a simple object. This should be something there will be *one* of in your game. I'm going to imagine a game in which I try to catch drops of water in a bucket, so my object will be a "bucket."

*I recommend you change your object slightly so that you're not simply copy/pasting my code.*

I also recommend starting out with one file that contains one object. Because we'll be using modules, we'll add the keyword `export` before we declare our object, so we can import it into other modules. 

We're going to declare our object with `const` rather than `let` to indicate that the object should not change. This is a little counterintuitive, because the *properties* of the object can change, but the object itself should remain the same.

**bucket.ts**

```javascript
import {ctx, canvas} from './canvas';
/* 
* A bucket that can move back and forth.
* It only has an X position since it can
* only move in one direction.
*
* The bucket can "fill" with rain, so it also
* has a property for how much water it  
* contains.
*/

export const bucket = {
  x : 200,
  waterAmount : 10,
  width : canvas.height/10,
  height : canvas.height / 14,
  draw () {        
    // Draw water
    ctx.fillStyle = 'blue';
    ctx.fillRect(      
      this.x - this.width/2,
      canvas.height - this.waterAmount,
      this.width,
      this.waterAmount      
    )
    // Draw bucket
    ctx.strokeRect(
      this.x - this.width/2,
      canvas.height - this.height,
      this.width,
      this.height
    )
  }
}
```

## Drawing the bucket

Let's assume our game is going to involve animations. Therefore, all of our drawing will need to happen inside of an animation loop.

Let's go ahead and set up a basic animation loop, ideally in a separate `animate.ts` file, like this:

```typescript
import {ctx,canvas}

function animate () {
  // Erase
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // Update
  doUpdates();
  // Draw
  doDrawings();
  window.requestAnimationFrame(animate);
}

function doUpdates () {
}

function doDrawings () {
}

window.requestAnimationFrame(animate);
```

We'll want to insert our bucket into the drawing phase of our animation loop, like this:

```typescript
import {bucket} from './bucket';

...

function doDrawings () {
  bucket.drawBucket();
}
```

At this point, we should see a simple bucket on screen. If we update the x position of the bucket, the bucket will move -- let's prove that by just adding a quick animation (we'll remove it in a second since we know we don't
actually want the animation to stick around):

Inside our `doUpdates` function, let's add...

```typescript
function doUpdates () {
  // Testing - DELETE ME
  bucket.x += 1;
  bucket.waterAmount += 1;
}
```

Ok: now we should have confirmed that we have a bucket that can slide off the screen and fill with water. That means then ext step is to let the user *update* the bucket with events!

[Controlling our object with events](./events.md)