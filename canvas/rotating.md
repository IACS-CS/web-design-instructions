Rotating on the canvas is pretty confusing. There are transformations of the canvas that rotate elements, but the canvas is always rotated from the *origin* (0,0) in the top left, so in order to rotate items in place, you need to combine rotation *with* transformation.

Here's a Codepen showing rotating in action:
```
```

Here's documentation walking through it:
{% include codepen.html id="mdpJpJW" %}

[Here's some official documentation on translate and rotate](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate)
