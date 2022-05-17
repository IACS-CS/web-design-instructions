# Scrolling backgrounds

Often, we want to create the illusion that our character is moving through a background that is bigger than the screen we are displaying. 

A simple way to think about that is very similar to what we did with our [sprite](sprites.md) demo: we simply show a *portion* of an image at a time, only this time rather than moving through frames of an animation, we'll be moving through a background.

The technique is pretty simple: we have a background bigger than the element we are displaying, and we use background-position to determine which part of the background to show (we could also use the full version of `ctx.drawImage` to do the same thing on a canvas, though it's a bit more
verbose.

My first example will only change the X coordinate of the background position and do so on a timer:

{%include local.html page="scroller.html"}

## Scrolling in Two Dimensions

Scrolling in two dimensions just means changing both the X and Y coordiantes of the background.

So, for example, to scroll over to 100px from the left and 200px from the top, we would see:

`background-position: -100px -200px;`

Here's a quick demonstration of what that looks like, with our little dude walking over the surface of the Mona Lisa.

{%include local.html page="scroller2d.html"}



