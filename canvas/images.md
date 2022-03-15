## Putting Images on a Canvas

Putting an image on a canvas involves multiple steps: 
1. Load an image onto the webpage.
2. Draw the image onto the canvas.

- [Putting Images on a Canvas](#putting-images-on-a-canvas)
- [Adding an image](#adding-an-image)
  - [Creating Images in JavaScript](#creating-images-in-javascript)
- [Walk-Through of Putting an Image into a Drawing App](#walk-through-of-putting-an-image-into-a-drawing-app)
- [Walk Through of Copying a Canvas as an Image Using drawImage](#walk-through-of-copying-a-canvas-as-an-image-using-drawimage)
## Adding an image

Fundamentally, to put an image onto a webpage, you simply need to insert an image tag into the HTML somewhere, which will look like this:

**HTML**
```html
<img src="path-to-image">
```

You then need to get a hold of the image in JavaScript and wait for it to load by listening for the "load" event, which tells you the browser has downloaded the full image.

As with any element, you can *either* put the img tag directly in your HTML and select it with JavaScript, or you can *create* the image tag with JavaScript and insert it into your HTML.

### Creating Images in JavaScript

If you want to create images in JavaScript, a good pattern is to create a div in your HTML to put them in, then you can hide that div so the images aren't visible to the user until you put them onto your canvas.

**HTML**
```HTML
<div id="assets" style="display:none">
  <!-- Invisible Div for loading images -->
</div>
```

You could then create images and add them to that assets div with JavaScript like this:

**JavaScript**
```javascript
let assetDiv = document.querySelector('#assets');

function createImage (url) {
  let img = document.createElement('img');
  img.src = url;
  assetDiv.appendChild(img);
  return img;
}

let exampleImage = createImage('/assets/image.png');
```

In our vite set-up, we can import the paths to our images directly using a little vite magic (this is not standard JavaScript, but it is cool).

That means you're likely to have an images.ts file that looks like this:

**JavaScript (in our Vite set-up)**
```typescript
import duckImage from './assets/duck.png';
import pondImage from './assets/pond.png';

function createImage (url) {
  let img = document.createElement('img');
  img.src = url;
  assetDiv.appendChild(img);
  return img;
}

export let duckImage = createImage(duckImage);
export let pondImage = createImage(pondImage);


## Walk-Through of Putting an Image into a Drawing App
{% include youtube.html id="kbdQg7i4364" %}

## Walk Through of Copying a Canvas as an Image Using drawImage

{% include youtube.html id="XWzKBdo" %}

