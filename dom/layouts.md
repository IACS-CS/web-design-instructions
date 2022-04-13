# Basic Layouts in HTML

This document is going to show you how to create some simple page layouts. Note: I have a whole web design class where all we do is layouts, so my goal here is to teach you *as little as possible* to accomplish some common patterns you will want.


- [Basic Layouts in HTML](#basic-layouts-in-html)
  - [Notes](#notes)
  - [Header/Body/Footer](#headerbodyfooter)
  - [Left/Right Chat Bubbles](#leftright-chat-bubbles)
  - [Grid](#grid)
  - [Centered Pop-Up](#centered-pop-up)
  
## Notes
I make some use of CSS variables here, which can be defined with a line like this:
```css
--variable-name : value;
```

And can be accessed with a line like this:

```css
property : var(--variable-name);
```

In practice, that looks like this:

```css

#main {
  --width: 800px;
  width: var(--width);
}
#footer {
  width: var(--width);
}
```

I also make some use of calculations in my templates which allow you to do some basic math, like this:

```css
#main {
  height: calc(100vw - var(--header-height));
}
```

## Header/Body/Footer

Here is a template you can use for a fixed header/footer at the top and bottom of the screen and a body that takes up the whole screen.

{%include codepen.html id="XWVPqGv" tabs="html,css,result" %}

The basic concepts applied above are:

1. Fix our main window to the top left and make it take up the whole screen
1. Make the main content lay the items below it out automatically from top to bottom and centered.
1. Fix the height of our three child elements (header/body/footer).
1- [Basic Layouts in HTML](#basic-layouts-in-html)
  - [Header/Body/Footer](#headerbodyfooter)
  - [Left/Right Chat Bubbles](#leftright-chat-bubbles)
  - [Grid](#grid)
  - [Centered Pop-Up](#centered-pop-up). Make our header and footer lay items out left-to-right (display: flex, align-items: center, justify-content: space-between).


## Left/Right Chat Bubbles

For the layout How-To, I'm going to use a simple flexbox container, which allows us align items on both a top-to-bottom axis and a left-to-right axis.

I'll also use *two* classes (bubble and left and bubble and right) to move them around.

Finally, we'll do some border rounding for kicks.

{%include codepen.html id="wvpEXRZ" tabs="css,html,result" %}

## Grid

{%include codepen.html id="zYpJLLj" tabs="css,html" %}

## Centered Pop-Up

{%include codepen.html id="KKZxBbq" tabs="css,html" %}
