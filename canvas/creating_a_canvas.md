# Creating a Canvas

When you set up a basic canvas in JavaScript, there are two steps:

1. Put the Canvas into the HTML page.
2. Get the canvas in JavaScript and use it to draw.

- [Creating a Canvas](#creating-a-canvas)
  - [Creating a Canvas on your Page](#creating-a-canvas-on-your-page)
    - [Creating a Canvas in HTML](#creating-a-canvas-in-html)
    - [Creating a Canvas in JavaScript](#creating-a-canvas-in-javascript)
  - [Drawing on the Canvas](#drawing-on-the-canvas)
  - [Setting up the canvas size](#setting-up-the-canvas-size)
    - [A Simple Fixed-Size Canvas](#a-simple-fixed-size-canvas)
    - [A Scaling Canvas](#a-scaling-canvas)
    - [Other styling](#other-styling)

## Creating a Canvas on your Page

You can either create a canvas in HTML and then access it via JavaScript, or you can create it with JavaScript directly. It's slightly nicer to create it in JavaScript because it makes it easier for your coding editor to provide autocompletion.

### Creating a Canvas in HTML

You can also just put the canvas directly in your HTML, like this -- you can add any id you want to the canvas to make it easy to grab with your JavaScript.

*HTML*

```html
<div id="app">
  <canvas id="app-canvas"></canvas>
</div>
```

Then you grab it from JavaScript using `document.querySelector('#your-id-here')`

*JavaScript*
```javascript
let canvas = document.querySelector("#app-canvas");
```

Note: in TypeScript, you can add a type hint so your code editor knows the canvas is a canvas, like this:

TypeScript
```typescript
let canvas : HTMLCanvasElement = document.querySelector('#app-canvas')
```

### Creating a Canvas in JavaScript

First, you'll need some "anchor" in your HTML to which to add the canvas. Most of our starter templates have some HTML that looks like this:

*HTML*
```html
<div id="app"></div>
```

That id="app" gives us the anchor we can "grab" with our javascript using a line like:
`let app = document.querySelector('#app');`

So here's the JavaScript to create the canvas in JavaScript and add it to the webpage:

*JavaScript*
```javascript
let canvas = document.createElement("canvas");
let app = document.querySelector("#app");
app.appendElement(canvas);
```

## Drawing on the Canvas

Once you have a HTML Canvas element stored in a variable you can access in JavaScript, you can use that to draw by getting the 2d drawing context and then calling drawing commands.

Here is some example code, that assumes a working canvas in `canvas`

```javascript
let ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(200,200);
ctx.stroke();
```

## Setting up the canvas size

Most of the time you create a canvas, you will want to configure it to be a certain size. There are two different sets of coordinates to worry about:

1. The size of the coordinates you draw on the canvas with
2. The size the canvas shows up on the screen.

Here's a quick CodePen demo to show you how those two different sets of dimensions interact: try changing the different sizes and repeatedly drawing a square and see what happens:

{% include codepen.html id="eYymVBW" %}


### A Simple Fixed-Size Canvas
The easiest thing to do is to create a canvas with a fixed size in pixels, and set its internal and its display size to be the same. To do that you need to set the internal size using the *width* and *height* attributes of the canvas and the display size by setting the *width* and *height* attributes of the *style* of the canvas element.

*JavaScript*
```javascript
canvas.width = 500;
canvas.height = 500;
canvas.style.width = '500px';
canvas.style.height = '500px'; 
```

The style attributes are strings rather than numbers and include a unit (in this case, pixels).

### A Scaling Canvas

Sometimes you want to make the canvas scale to fit the size of the canvas. You can use the properties vw and vh which give you a percentage of the current screen width and height respectively to do this.

Here's code to create a square canvas that fits on the screen:

*JavaScript*
```javascript
canvas.width = 500;
canvas.height = 500;
canvas.style.width = 'calc(min(100vw,100vh))';
canvas.style.height = 'calc(min(100vw,100vh))';
```

### Other styling

It can be helpful to add a border so you can see your canvas more easily, like this:

*JavaScript*
```javascript
canvas.style.border = '1px solid black';
```

You also might want to set a background for your canvas, using either a color or an image, like this:

*JavaScript: Background Color*
```javascript
canvas.style.backgroundColor = 'black';
```

*JavaScript: Background Image*
```javascript
canvas.style.backgroundImage = url('./path/to/image.png');
```

