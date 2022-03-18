# Rotating the Canvas

Rotating on the canvas is pretty confusing. 

There are transformations of the canvas that rotate elements, but the canvas is always rotated from the *origin* (0,0) in the top left, so in order to rotate items in place, you need to combine rotation *with* transformation.

[Here's some official documentation on translate and rotate](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate)

## The Challenge with Rotation...

Imagine I draw a simple cross and I want it to rotate around the center. Here is a drawing of the cross:

```javascript
ctx.strokeRect(200, 100, 50, 250);
ctx.strokeRect(150, 150, 150, 50);
```

{% include codepen.html id="ExoPBGL" tabs="result" %}


If I want to rotate that cross 45 degrees, I first convert to radians (45 degrees is π/4 radians), and I try this:

```javascript
// First cross
ctx.strokeRect(200, 100, 50, 250);
ctx.strokeRect(150, 150, 150, 50);
// Rotated cross
ctx.strokeStyle = 'red'
ctx.rotate(Math.PI/5);
ctx.strokeRect(200, 100, 50, 250);
ctx.strokeRect(150, 150, 150, 50);
```

Now, unfortunately, I've not only rotated the cross but I have also moved it!
{% include codepen.html id="vYpLqbq" tabs="result" %}

## Drawing in the Corner...
Because all rotations happen from the origin (0,0), I have to draw the cross *from the corner*, so that the center of the cross is at 0,0. Here's what that looks like:

```
// First cross
ctx.strokeRect(-25, -75, 50, 250);
ctx.strokeRect(-75, -25, 150, 50);
// Rotated cross
ctx.strokeStyle = 'red'
ctx.rotate(Math.PI/5);
ctx.strokeRect(-25, -75, 50, 250);
ctx.strokeRect(-75, -25, 150, 50);
```

Now my cross rotates from the center, but it is drawn in the wrong place, with most of it off the canvas :(

{%include codepen.html id="mdpVZYb" tabs="result" %}

## Translating from the corner to the right position

The final step is to *translate* my canvas so that the origin of the canvas moves to the center of my drawing, like this:

```
ctx.translate(100,100);
// First cross
ctx.strokeRect(-25, -75, 50, 250);
ctx.strokeRect(-75, -25, 150, 50);
// Rotated cross
ctx.strokeStyle = 'red'
ctx.rotate(Math.PI/5);
ctx.strokeRect(-25, -75, 50, 250);
ctx.strokeRect(-75, -25, 150, 50);
```

Here it is rotated correctly: 
{% include codepen.html id="VwyeJJO" tabs="result,js" %}


A final note: it's a good idea to call
```javascript
ctx.resetTransform()
```
before and after you do your rotated drawings so that the canvas won't be rotated and translated for any
*future* drawings you create!
## Fancier Example

Here's a Codepen showing rotating in action with an animation:

{% include codepen.html id="mdpJpJW" %}



