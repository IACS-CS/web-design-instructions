# Multiple Objects

It is often the case that you'll want more than one object, typically controlled by the computer (i.e. moving automatically) in your game. In this case, it is helpful to use a array (or list).

You can read an overview of lists in JavaScript [here](../../fundamentals/lists.md).

A simple way to handle multiple items in your game is to make an object that manages a list of objects.

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
