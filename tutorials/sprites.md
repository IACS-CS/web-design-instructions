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


{%include local.html page="html-sprite.html" height="800px" %}
