# Using Spritesheets in the Canvas

[First, see my sprites overview](sprites.md)

## Canvas Based Sprite

We can draw images to the canvas using the `drawImage` method of the 2d drawing context.

The full structure of the `ctx.drawImage` is as follows:

`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`

In this case, `sx` and `sy` represent where we want to grab the image from in the source (source x and source y) and `dx` and `dy` represent where we want to put the image (destinaton x and destinaton y)

Let's say I wanted to simply display the image to the canvas, I would start with a call like this:

`drawImage(dudeImage, 0, 0, 64, 64, 0, 0, 64, 64)`

That draws the *first* 64x64 square of my spritesheet.

Then when I update the animation, I would simply update the `sx` parameter to move it 64 pixels to the left, making a call like this:

`drawImage(dudeImage, 64, 0, 64, 64, 0, 0, 64, 64)`

Here it is live:

{%include local.html page="canvas-sprite.html" height="650px" %}

## Creating a Canvas Based Sprite

The steps to create a canvas based sprite are a little complex.

1. First, you have to make sure you've loaded you spritesheet -- this is the same as loading any other image. See [images on canvases](../canvas/images.md).
2. Second, you have to decide when you want to update your drawing. You could do this using requestAnimationFrame or you could do it in response to user input depending on your use case (if your sprite animates each time the user hits a key, for example, you would do this differently than if the sprite animates continuously)
3. Third, each time you want to update your sprite, you need to call `drawImage` and update the source offset so you get the correct frame of your sprite displaying.


