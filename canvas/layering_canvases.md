- [Layering Canvases](#layering-canvases)
  - [The Layering Layout](#the-layering-layout)
  - [Creating Multiple Canvases with HTML & CSS](#creating-multiple-canvases-with-html--css)
  - [Creating Multiple Canvases with JavaScript](#creating-multiple-canvases-with-javascript)
- [Very Simple Codepen Example](#very-simple-codepen-example)
- [Advanced Example](#advanced-example)

## Layering Canvases

Often it is simplest to put multiple canvases on top of each other like transparencies. Each layer can then do its own drawing and updating separately.

Here is an example of a game made with three layers:

{% include codepen.html id="mdpJKRz" tabs="result" %}

Here is the exact same game with the layers side-by-side instead of on top of each other. Notice the game logic works the same -- the items are just not overlapping on the screen :)

{% include codepen.html id="yLpYazZ" tabs="result" %}

### The Layering Layout

In order to layer canvases (put them on top of each other), you need to style them so they are all exactly the same size and in the same position. The easiest way to do this is probably to set it up *in your HTML* rather than through JavaScript, since you can use HTML and CSS to make creating canvases a snap.

Regardless of how you accomplish it, what you will need is:

- An HTML `<div>` that contains the canvases. It must be styled to `position: relative` and should be styled to have the width and height of your canvases.
- Canvases that are children of the div above and are styled to be `position: absolute; top: 0; left: 0`. They should all have the same size.

Note: The last canvas you add will be on "top" of the pile, which means it will get all the clicks and such from the user and it will show up on top.

### Creating Multiple Canvases with HTML & CSS

To create multiple canvases with HTML and CSS, you can write code like this (adjust to the number of canvases you need to create):

**HTML** (index.html)
```html
<div class="canvas-container">
  <canvas id="bottom-canvas" width="600" height="600"></canvas>
  <canvas id="middle-canvas" width="600" height="600"></canvas>
  <canvas id="top-canvas"  width="600" height="600"></canvas>
</div>
```

**CSS** (style.css)
```
.canvas-container {
  position: relative;
  --width: 600px;
  --height: 600px;
  width: var(--width);
  height: var(--height);
  margin: auto; /* center */
}

.canvas-container canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: var(--width);
  height: var(--height);
}
```

Now all you have to do in JavaScript is grab the canvases. Using TypeScript, we can add a type hint so that our editor can do correct tab completion for us with methods like `getContext`:

```javascript
export let topCanvas : HTMLCanvasElement = document.querySelector('#top-canvas');
export let midCanvas : HTMLCanvasElement = document.querySelector('#middle-canvas');
export let botCanvas : HTMLCanvasElement = document.querySelector('#bottom-canvas');
```

### Creating Multiple Canvases with JavaScript

If you want to create many canvases in JavaScript, the easiest thing to do is create a container (e.g. `<div id="app">`) and then make a function to add a new canvas, like so:

```javascript
let container = div.querySelector('#app');
let width = 600;
let height = 600;
container.style.width = `${width}px`
container.style.height = `${height}px`
container.style.position = 'relative';

function createCanvas () {
  let canvas = document.createElement('canvas');
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  return canvas
}

export let bottomCanvas = createCanvas();
export let middleCanvas = createCanvas();
export let topCanvas = createCanvas();
```


## Very Simple Codepen Example
{%include codepen.html id="mdpJKbK"%}

## Advanced Example

Here is a full "game" example, with three different layers.

In this example, the bottom and middle layer each have their own animation.

The top layer is the "control" layer and simply responds to the user mouse moving.

The middle and top layer "interact" in my example, with the square that the user moves "eating" the circles that fly over the screen. This interaction has nothing to do with the canvases themselves, however: I simply create a list of objects and then each time the user moves I check through the list for any objects that are close enough to the user. 

{%include codepen.html id="mdpJKRz" %}
