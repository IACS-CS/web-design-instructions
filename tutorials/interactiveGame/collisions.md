## Collisions: Making Objects Interact

Most games involve objects that interact at some point. For this tutorial, we're going to assume that your objects interact at one fixed point.

I'm going to go ahead and add code so that each rain drop will check if it has hit the bucket when it lands.

That's going to involve the following steps:

1. Let the rain "see" the bucket (import bucket into rain).
2. Add a method to bucket to check if an object is directly over its opening (check for a collision).
3. Insert a new step into our `rain.move` method so that when the rain moves it checks for a collision with the bucket.
4. When the rain hits the bucket, make something happen!

### 1. Letting the rain "see" the bucket

My first step will be importing my bucket into my rain file, since now my rain drops need access to the bucket.

*rain.ts*
```typescript
import {bucket} from './bucket';
```

At this point, I can now write new code in `rain.ts` that references my `bucket`.

### 2. Adding a Collision-Detection method to Bucket

Now I want the rain to know when it hits the top of the bucket, so I'm going to add a new method to my bucket object called "isInBucket" which checks if a rain drop is in the position to fall into my bucket.

Note: there's no "right" way to decide where this collision logic goes since it's a feature of both a bucket and a raindrop, but I think it's a little tidier to write the if statements for hitting the bucket inside of the bucket. If we changed our drawing code to be fancier, for example, we would probably end up updating both `bucket.draw` and `bucket.isInBucket`, so it's nicer having both of those bits of code in the same module.

Regardless, I recommend writing comments alongside your "if" statements in this collision code because it gets tricky to keep track of. Any time you're checking for collision with a rectangle, you're likely going to be using a pattern like this:

```typescript
const someObjectThatYouCanCollideWith = {
  isColliding (x, y) {
    if (
      x >= this.right // is it to the right of my right
      &&
      x <= this.left // and to the left of my left
      &&
      y >= this.top // and under my top
      &&
      y <= this.bottom // and under my bottom
    ) {
      return true
    } else {
      return false
    }
  }
}
```

Here is the code for my "bucket" example:

**bucket.ts**
```typescript

export const bucket = {
  ...
  /* Check if point x,y is entering our bucket
  -- i.e. passing through the "lid" of the
  bucket */
  isInBucket (x : number, y: number) {
    if ( // If...
      y > this.top // it's past our "lid"
      && // and
      y < this.top + 30 //  + but not too far under
      &&  // and
      x > this.x// + right of our start
      && // and
      x < this.x + this.width // left of our edge
    ) {
      return true
    } else {
      return false
    }
  }
}
```

#### Circles colliding? Use the distance formula

If you just have two circles interacting, you can use the distance formula to measure the distance between two objects.

```math
d = \sqrt {\left( {x_1 - x_2 } \right)^2 + \left( {y_1 - y_2 } \right)^2 }
```

Translated into JavaScript, that would look something like this:

```typescript

export const someObject = {
  x : 10, 
  y : 10,
  function measureDistance (x,y) {
    // Square root of...
    return Math.sqrt(      
      Math.pow(
        this.x - x, // x1 - x2
         2 // squared
      )
      + // plus
      Math.pow(
        this.y - y, // y1 - y2
        2 // squared
      )
    )
  }
}
```

To check for a "collision" we just need think about the distance at which two items collide. So if you had two circles, you might have code like this:

```typescript

...
if (player.measureDistance(enemy.x, enemy.y) < player.radius + enemy.radius) {
  // Code for a collision
  // goes here...
  player.score += 1;
}
...

```

### 3 & 4. Check each rain drop when we move it and fill the bucket if it hits!

I already have code that runs once per rain drop when we update the position of our rain drops. I'm going to go ahead and use that code to detect my collisions.

**rain.ts**
```
export const rain = {
  ...
  move () {
    ...
    this.raindrops.forEach(
      (drop)=>{
        ...
        if (bucket.isInBucket(drop.x,drop.y)) {
          // Add to water in bucket
          bucket.waterAmount += 1;
          // Move rain drop back up to top
          // so it can be a "new" raindrop
          drop.y = -10;
        }
        ...
      }
    )
  }
}
```
