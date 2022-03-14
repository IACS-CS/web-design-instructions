When you set up a basic canvas in JavaScript, there are two steps:

1. Put the Canvas into the HTML page.
2. Get the canvas in JavaScript and use it to draw.

### Creating a Canvas

You can either create a canvas in HTML and then access it via JavaScript, or you can create it with JavaScript directly. It's slightly nicer to create it in JavaScript because it makes it easier for your coding editor to provide autocompletion.

### Creating a Canvas in HTML

You can also just put the canvas directly in your HTML, like this -- you can add any id you want to the canvas to make it easy to grab with your JavaScript.

#### HTML

```html
<div id="app">
  <canvas id="app-canvas"></canvas>
</div>
```

Then you grab it from JavaScript using ```document.querySelector`
###JavaScript

```javascript
let canvas = document.querySelector("#app-canvas");
```

#### Creating a Canvas in JavaScript

First, you'll need some "anchor" in your HTML to which to add the canvas. Most of our starter templates have some HTML that looks like this:

```html
<div id="app"></div>
```

That id="app" gives us the anchor we can "grab" with our javascript using a line like:
`let app = document.querySelector('#app');`

So here's the JavaScript to create the canvas in JavaScript and add it to the webpage:

```javascript
let canvas = document.createElement("canvas");
let app = document.querySelector("#app");
app.appendElement(canvas);
```
