---
order: 10
---

# More Events

## The World of Events
All of JavaScript programming is fundamentally event-driven. The basic paradigm of JavaScript programming is that the browser is running the website and showing the user your HTML and as the user interacts with the page and as resources load from the network, events are fired and the page can update. Anything you do in a web app (scroll down, load a video, resize the browser, etc) can fire an "event" that code can potentially listen for and react to.

[Here's a big list of events](https://www.w3schools.com/jsref/dom_obj_event.asp)
[Here's Mozilla' introduction to event](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

Here is a somewhat curated list of events that can be useful:

## Events for Elements the User Interacts with
- `click` Fires when the user clicks something
- `dblclick` Fires on double click
- `focus` Fires when an element comes into focus from mouse or keyboard
- `blur` Opposite of `focus`: fires when an element loses focus.
- `mouseover` Fires when the mouse hovers over an element
- `mouseout` Fires when the mouse leaves an element
- `touchmove` Fires when a finger is dragged across a screen
- `touchstart` Fires when a finger touches the screen
- `touchend` Fires when a finger is removed from screen


## Events on the Window object
- `load` - Fires once the page is entirely loaded
- `DOMContentLoaded` - Fires once the HTML is loaded (but not necessarily all the images, styles, scripts, etc.)
- `scroll` - Fires when the user scrolls (you can also check individual elements for when they scroll)
- `resize` - Fires when the user resizes the window (you can get the size of the window with the `window.innerWidth` and `window.innerHeight` properties)

## CSS Transitions and Animations
- `animationstart` Fires when a CSS animation starts
- `animationend` Fires when a CSS animation is complete
- `transitionstart` Fires when a CSS transition begins
- `transitionend` Fires when a CSS transition ends
