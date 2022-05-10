# Sprites

Game animations often make use of what is called a "spritesheet", which is an image containing all the "frames" of an animation for a given element of a game.

No matter the platform we use for a game, the concept of a spritesheet is the same:

1. Load the spritesheet as an image into the web browser.
2. Display just one section of the image at a time to display a frame of the animation.
3. To update the animation, change the section of the image you display.

## Example Sprite

I created a very simple spritesheet using [Piskel App](https://www.piskelapp.com/p/create/sprite). There are other tools you can use as well -- just google "spritesheet creator" to find something; or you can look for previously existing spritesheets you can use in your game from other artists.

Some spritesheets come in rows and columns, to make my first example as simple as possible, I went ahead and set it to export in 1 row, so the image just looks like
a slide reel, like this:

![Spritesheet Example](../embeds/dude.png)

Each frame of my image is 128 by 128 pixels. Over the 8 frames, my little dude picks up each foot twice and blinks his eyes.

We can "play" our image in a plain HTML set-up *or* in a canvas based game. In either case, the concept is the same, we just want to show only a part of the image at a time.

## CSS-based solution

Using CSS style rules, we can make any element on an HTML page have an image as a background. The key properties to know about are:

* `width` / `height` : specify how big an element shoudl be
* `background-size`: specify how much of the background to show.
* `background-position`: specify where to move the "window" of an image.

Here is a quick demonstration of how background-position works:


{%include local.html page="html-sprite.html" height="650px" %}

## Canvas Based Sprite

We can do the same thing in a canvas using the drawImage method of the 2d drawing context.

The full structure of the `ctx.drawImage` is as follows:


`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`

In this case, `sx` and `sy` represent where we want to grab the image from in the source and `dx` and `dy` represent where we want to put the image.

Let's say I wanted to simply display the image to the canvas at over and over, I would start with a call like this:

`drawImage(dudeImage, 0, 0, 64, 64, 0, 0, 64, 64)`

That draws the *first* 64x64 square of my spritesheet.

Then when I update the animation, I would simply make a call like this:
`drawImage(dudeImage, 64, 0, 64, 64, 0, 0, 64, 64)`

Here is the same demo as above, only implemented with a canvas this time:

{%include local.html page="canvas-sprite.html" height="650px" %}

## Creating a Canvas Based Sprite

The steps to create a canvas based sprite are a little complex. 

1. First, you have to make sure you've loaded you spritesheet -- this is the same as loading any other image. See [images on canvases](../canvas/images.md).
2. Second, you have to decide when you want to update your drawing. You could do this on a timer using requestAnimationFrame or you could do it in response to user input depending on your use case.
3. Third, each time you want to update your sprite, you need to call `drawImage` usin its most verbose form, and update the source offset so you get the next frame of your sprite.




