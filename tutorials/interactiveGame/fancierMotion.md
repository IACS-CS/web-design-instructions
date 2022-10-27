In the [Events](./events.md) step you learned how to make your bucket respond to a simple keypress. If we want a smoother, nicer looking animation, though, it will often require a bit more of a sophisticated approach.

For this tutorial, I'm going to make the button slide as if pushed on a smooth surface each time the user presses a button.

The first step to doing this will be to *abstract out* the motion a bit. Rather than including all of my bucket moving logic in my key controls, I should put that in `bucket.ts`. That means that rather than updating `bucket.x` directly, I'm going to create a new method called `pushBucket` which will nudge the bucket in a direction.

The first step of this "refactoring" is to move my old code over to bucket (at this step, I'm just reorganizing my code, not changing function). 

Refactor Step 1: Move movement code to  `bucket.ts`:

```typescript
export const bucket = {
  // ... old code ...
  push (amount) {
    // Fix Me: we will make this better soon!
    this.x += amount;
    // End code to fix
  }
}
```

Refactor Step 2: Change my key handler to use my new method

Now I'm going to take my old code, which looked like this:
```typescript
 // this code is in a keydown handler...
    if (event.key=='ArrowRight' || event.key=='l') {
      bucket.x += 10;
    }
    if (event.key=='ArrowLeft' || event.key=='j') {
      bucket.x -= 10;
    }
```

and *change* it to call my new method

```
// this code is in a keydown handler...
    if (event.key=='ArrowRight' || event.key=='l') {
      bucket.push(10);
    }
    if (event.key=='ArrowLeft' || event.key=='j') {
      bucket.push(-10);
    }
```

## Creating a smooth animation

If I want the bucket to animate smoothly, I can't simply update its position all at once. Instead, I need to store it's "momentum" in a variable, and then use my animation code to animate the bucket's motion until it is done moving.

To do that, I'll need to add a new property to my bucket object to store its momentum. I'll then create a new `update` method that will run once per animation frame and transfer energy from the `momentum` into my position by `adding` to the position `x` and subtracting from my `momentum`

```typescript
import {ctx, canvas} from './canvas';

export const bucket = {
  x : 200,
  // ...
  momentum : 0,
  draw () {        
    // ...
  },
  push (amount) {
    this.momentum += amount;    
  },
  update () {    
    let delta = this.momentum / 5;
    this.x += delta;
    this.momentum -= delta;
  }
}
```

Notice that all of my bucket logic has landed in the file `bucket.ts`  I'll need to wire this up in my `animation.ts` file so it actually runs the animation and in the `handlers.ts` file so it actually gets pushed by the user, like so:

*animation.ts*
```typescript
...

function doUpdates () {
  bucket.update();
}

...
```

*handlers.ts*

```typescript
// in my keydown handler...
...
bucket.push(10);
...
```