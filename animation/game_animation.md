# Canvas: Animating a Whole Game

If you've already gotten some [basic animations](simple_animation.md) working, it's likely your next step is wanting to build a game with multiple different objects being animated. This how-to will talk you through how to do that. The other technique to use would be to [layer multiple canvases](../canvas/layering_canvases.md), but generally the technique on this page is simpler.

Before we move forward, it's worth remembering the basic steps of any animation:

1. Draw something on the screen based on some state (a variable or object with information about what we're animating)
2. Update variables to change the state (i.e. move the object).
3. Erase the screen.
4. Re-draw our item on the screen based on the updated state.
   
If you want to do all your animation on one canvas, it's best to organize your animation function in a clear way, as follows:

```javascript
function doUpdates (ts : number) {
  // ts is a number representing time since we started animating
  // Organize all your updating code here...
}

function doDrawings () {
  // Organize all your drawing code here, 
  // starting with clearing the screen...
}

function animate (ts) {
  doUpdates(ts);
  doDrawings();
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
```

When you run this code, it will result in a loop happening roughly 60 times a second, which consists of...

1. doUpdates
2. doDrawings

## Putting it all together

First, at the top level of your code, you'll need to create any variables you need to contain the "state" for your game. I'll make a game with a bouncing square and then a circle the user controls. To keep matters simple, I only need an object for my player -- my bouncing square will run off of the timestamp from animation alone.

### Defining Your Objects
```javascript
let player = {
  x : 200,
  y : 200,
  vx : 10,
  vy : 0,
}

let bounceTime = 0;
```

### Drawing your objects

Next up I recommend writing your drawing code so you can see your items appear on the screen. You can break your drawing code down into further functions if you like, or just write it all together if that's easier to understand at first.

```javascript
function doDrawings () {
  // First, erase the screen!
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // Next, draw our bouncing square
  // We just use a sine wave to draw the square
  let bounceAmplitude = 100; // 100 pixels per bounce
  let bouncePeriod = 1000; // one cycle per 1000 ms
  ctx.fillRect(
    100,  // x
    150 + (
      bounceAmplitude * 
      Math.sin(
        (Math.PI * bounceTime) 
        / bouncePeriod
      )
    ), // y
    50, // width
    50 // height
    );  
  // Finally, draw our player
  ctx.beginPath();
  ctx.arc(player.x,player.y,25,0,Math.PI*2);
  ctx.stroke();
}
```

At this point, you should see objects on the screen!

### Updating Your Objects
I'll start with the simplest possible update objects code, which takes advantage of the fact that my bounce code only needs one number representing how much time has gone by to 
create a bounce since the sine function has cyclical values.

```javascript
function doUpdates (ts) {
  bounceTime = ts;
}
```

Here's what that looks like:

{% include codepen.html id="PoEPEeO" tabs="javascript,result" %}

## Updating Multiple Objects...

As you create multiple objects, your code is likely to grow more complex. As it does, it's a good idea to split your code into multiple functions to make it easier to manage.

So, for example, I know I want my player to move based on their x and y velocities (vx and vy) and then have them move through the edges of the screen and come back around the other side. I'll break that code down in the following way:

```javascript
function doUpdates (ts) {
  bounceTime = ts; // for my bouncing square
  updatePlayerPosition(ts); // put player position code in another function  
  handleEdges();
}
```

Now I have to go ahead and write those other functions, like so:

```javascript
let lastTime = 0;  // a variable to store the last time we drew something...
function updatePlayerPosition (ts) {
  if (!lastTime) {
    // For our first drawing, there is nothing to udpate
    lastTime = ts;
    return
  } else {
    let elapsed = ts - lastTime;  // calculate time since last drawing      
    player.x += player.vx * elapsed/1000; // Add our velocity (in px per second)
    player.y += player.vy * elapsed/1000; // Add our velocity (in px per second)
    lastTime = ts; // now *we* are the last drawing
  }
}
```

And then our edge checking code might look like this:

```javascript
function handleEdges () {
  if (player.x > canvas.width) {
    player.x = 0;
  } else if (player.x < 0) {
    player.x = canvas.width;
  }
  if (player.y > canvas.height) {
    player.y = 0;
  } else if (player.y < 0) {
    player.y = canvas.height;
  }
}
```

Here's the full working code:

{% include codepen.html id="GRypybQ" %}
