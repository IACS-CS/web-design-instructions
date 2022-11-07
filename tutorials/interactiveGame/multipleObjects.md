# Multiple Objects

It is often the case that you'll want more than one object, typically controlled by the computer (i.e. moving automatically) in your game. In this case, it is helpful to use a array (or list).

You can read an overview of lists in JavaScript [here](../../fundamentals/lists.md) or watch a [video course introducing arrays here](https://www.yout-ube.com/watch?v=oigfaZ5ApsM)

A simple way to handle multiple items in your game is to make an object that manages a list of objects.

## A simplified example

[*If you'd rather watch me code than read, here's a 9 minute video walkthrough of me converting a simple single moving object into a object that manages an *array* of moving objects.*](https://youtu.be/ihyL1c5e7aI)

For reference, here's what the code looked like at the start of that video:

{%include codepen.html id="BaVKMez" %}

And here's the code at the end of the video:

{%include codepen.html id="BaVKMXL" %}

## The Rain Catcher Example

For my rain-catching bucket, I'm going to make a `rain` object which manages the rain. The `rain` object will have a list of raindrops (`rain.raindrops`) to keep track of. I will then have methods to move the rain (`rain.move`), and to add more rain drops (`rain.add`) and to take raindrops away (`rain.remove`). And of course I'll need a way to draw my raindrops (`rain.draw`)

Each raindrop will be a simple object containing a coordinate (x and y).

**rain.ts**
```typescript
import {canvas,ctx} from './canvas';

export const rain = {
  fallSpeed : 20,
  windSpeed : 2,
  raindrops : [
    {x:200, y:0},
    {x:220, y:10}
  ],
  add (number) {
    for (let i=0; i<number; i++) {
      this.raindrops.push(
        {
          x : Math.random()*canvas.width,
          y : Math.random()*canvas.height
        }
      )
    }
  },
  remove (number) {
    for (let i=0; i<number; i++) {
      this.raindrops.pop()
    }
  },
  move () {
    this.raindrops.forEach(
      (drop)=>{
        drop.x += this.windSpeed/10;
        drop.y += this.fallSpeed/10;
        if (drop.y > canvas.height) {
          drop.y = -10;
        }
        if (drop.x > canvas.width) {
          drop.x = 0;
        }
        if (drop.x < 0) {
          drop.x = canvas.width;
        }
      }
    )
  },
  draw () {
    this.raindrops.forEach(
      (drop)=>{
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'navy';
        ctx.beginPath();
        ctx.moveTo(
          drop.x-this.windSpeed,
          drop.y-this.fallSpeed,
        )
        ctx.lineTo(
          drop.x,drop.y
        )
        ctx.stroke();
      }
    )
  }
}
```

I now need to add a call to `rain.move` inside the `update` step of my animation and add a call to `rain.draw` inside the draw step of my animation and I will have rain falling.

### Updating my object

If I want my rain to change, I can build in calls to `rain.add`, `rain.remove` or I can update the values of `rain.fallspeed` and `rain.windspeed`. This could happen in response to events in my game or could happen on a timer depending.

Let's suppose I simply want the rain to get faster all the time, I could build a little method like this:

```typescript
// Make the rain speed up each second
// and the wind shift randomly
setInterval(
  function () {
    rain.fallSpeed += 1;
    rain.windSpeed = Math.random()*6 - 3;
  },
  1000 // run every second
)
```

Now, I will have the rain falling faster and faster each second, and I'll have the windspeed picking up.

Note: in a real game I'll need to add some if statements that handle the situation when the fallSpeed becomes to big, otherwise the game will become unplayable once the speed gets too high. The particular logic of how objects update will depend on your game -- often you might want scoring a "point" to increase the difficulty of the game, so when I later on make my bucket and water interact, I might make it so each time you catch a rain drop the rain gets faster.

Next step: [Detecting a collision between our player and our objects.](collisions.md)
