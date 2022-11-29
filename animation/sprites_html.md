# Sprites with HTML+CSS (no Canvas)

[First, see my sprites overview](sprites.md)


## HTML + CSS-based solution

Using style rules, we can make any element on an HTML page have an image as a background. The key properties to know about are:

* `width` / `height` : specify how big an element shoudl be
* `background-size`: specify how much of the background to show.
* `background-position`: specify where to move the "window" of an image.

When we specify `background-position`, we're effectively positioning the background relative to our "frame", so if we want to move to the right on our spritesheet, we
actually move the background-position to the *left* (think of sliding a big canvas
underneath an unmoving frame -- you would have to slide the canvas to the left to
move the frame over the content to the right).

So in my example, if I set background-position to 0, I see the first frame; if I set
it to -64px, I'll see the second frame, and so on.

Here is a quick demonstration of how background-position works:

{%include local.html page="html-sprite.html" height="650px" %}

### Creating the Sprite in HTML

To create a sprite in your HTML, you will want to first get your sprite image uploaded onto your server. Then, we'll create a `<div>` in our HTML and set the HTML to be a background image. We can do this *inline* all in HTML or we can do it using a separate *CSS* stylesheet -- whichever you're comfortable with.

#### All-in-one

Supposing your file is at `spritesheet.png` and your sprite is 64x64 pixels, you can create a basic sprite on your page as follow:

```html
<div id="sprite"
  style="
    background-image : url('/spritesheet.png');
    background-size: 64px 64px;
    background-position: 0;
    width: 64px;
    height: 64px;
  "
></div>
```

#### With separate CSS

We can do the exact same thing but using our separate `style.css` file, which gives us a better editing experience since most coding editors will autocomplete CSS correctly inside of a `style.css` file but not in an `html` file:

HTML

```html
<div id="sprite"></div>
```

CSS

```css
#sprite {
  background-image : url('/spritesheet.png');
  background-size: 64px 64px;
  background-position: 0;
  width: 64px;
  height: 64px;
}
```

### Updating the Background Position with JavaScript

Assuming you have a sprite showing up correctly, you can now animate it with some JavaScript. The basic concept is this:

1. Keep track of what frame we're on with a variable.
2. Create an update function which...
   1. Adds 1 to the frame we're on (or cycles back to 0 when we're through)
   2. Calculates the pixel offset based on the frame number and image size.
   3. Updates the background-position property of our sprite div.
3. Use setInterval to call our update function on a timer.

```javascript

// select the item we want -- this assumes we have
// <div id="sprite">
let div = document.querySelector('#sprite'); 

let frame = 0; // current frame
let nframes = 8; // number of frames
## Wrapping it all up with a bow

If we wanted to make a game with lots of sprites, it might be handy to make a function which creates our sprite and starts it animating automatically.

Here's what that might look like in practice:
{%include local.html page="sprite-oo.html" height="650px" %}

There are of course many approaches to this, but here's a simple purely functional approach:

HTML

```html
<main id="sprite-area" style="position:relative;width:100vw;height:500px;background-color:#cecece;color:#222;display:flex;place-content:center;">
    Click anywhere in this area to make a new sprite...
  </main>
```

JS

```javascript

// Grab our "area"
let area = document.querySelector('#sprite-area');

// make a sprite for every click
area.addEventListener(
  'click',
  function (e) {    
    makeSprite(e.offsetX,e.offsetY);
  }
);

// Our make sprite function puts a sprite at a position
function makeSprite (x,y) {
  let div = document.createElement('div');
  div.style.backgroundImage = 'url(dude.png)';
  div.style.width = '64px';
  div.style.height = '64px';
  div.style.top = `${y-32}px`;
  div.style.left = `${x-32}px`;
  div.style.position = 'absolute';
  area.appendChild(div);
  
  let frame = 0;
  let nframes = 8;
  let size = 64;
  let speed = 2 + Math.random() * 10;
  window.setInterval(function () {
      frame = (frame + 1) % nframes;
      let offset = frame * size;
      div.style.backgroundPosition = `-${offset}px`;     
      x += speed;        
      if (x > area.clientWidth) {
        x = 0;
      }
      div.style.left = `${x-32}px`
    }, 1000 / 6);
}
```

A similar technique could be used with a canvas or, as in the example above, HTML + CSS styles.let size = 64; // size of each frame

function showNextFrame () {
  frame = (frame + 1) % nframes; // add one, loop back to zero
  let offset = frame * size;
  div.style.backgroundPosition = `-${offset}px`;
}

setInterval( // run forever on a timer
  showNextFrame,
  1000 / 12 // 12 times per second
)

```

### No JS? Use keyframes

If you don't want to use JavaScript, you could use @keyframes in CSS to animate a spritesheet using *only* CSS and no JavaScript. The key will be to use the animation-timing-function `steps`: here is a walkthrough [on pure CSS spritesheets](https://blog.logrocket.com/making-css-animations-using-a-sprite-sheet/).

### Making lots of Sprites

