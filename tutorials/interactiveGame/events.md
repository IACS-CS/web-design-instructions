# Adding Events

*Note*
This set of instructions assumes you have already [created and drawn simple object ](player.md) and that you've confirmed that updating a property of the object will update the drawing. If you haven't done that, please don't go on :)

## Mouse Events

You've already created mouse events, which means making it so you can control the bucket with a mouse is quite easy. You could build the world' simplest control, for example, by adding:

*userInterface.ts*

```typescript
import {canvas} from './canvas';
import {bucket} from './bucket';

canvas.addEventListener(
  'mousemove',
  function (ev) {
    // Set the bucket X to the mouse position
    bucket.x = ev.offsetX;
  }
)
```

Here's what that looks like in practice:
{%include codepen.html id="dyKPZQj" tabs="js" %}

Note, we can also easily hook up both X and Y of an object, or we can reverse them for some unusual controls.

{%include codepen.html id="ZERYaVe" tabs="js" %}


## Keyboard Events

For keyboard events, we want to listen for key presses on the window object.

You can [read a detailed page all about using the keyboard here](../../canvas/keyboard.md).

For my simple bucket game, I just want to make the left and right controls work.

```typescript
import {bucket} from './bucket';

window.addEventListener(
  'keydown',
  function (event) {
    
    if (event.key=='ArrowRight' || event.key=='l') {
      bucket.x += 10;
    }
    if (event.key=='ArrowLeft' || event.key=='j') {
      bucket.x -= 10;
    }
  }
)
```

This should be all you need for some basic motion.

Note, if you want to implement some more complicated motion, such as a bucket that "slides" to the right position, or other physics, that will take a bit more doing. You can read my [fancier motion example](./fancierMotion.md) or you can move onto the next step: [Adding multiple animated objects](./multipleObjects).
