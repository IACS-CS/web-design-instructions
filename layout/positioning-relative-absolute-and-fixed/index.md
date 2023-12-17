---
order: 10
---

# Positioning

Typically, web browsers try to make sure that you can read and see everything you see on a page.

That means that if you put multiple items on a page and don't style them, they will always lay out so that you can see each item in its entirety.

But what if you *want* items to overlap or you want to layer multiple items on top of one another? This is where absolute and fixed positioning become handy!

The basic idea is simple: we tell an element to have an **absolute** position and then we can specify it's position in terms of `left`, `right`, `top` or `bottom` like this.

```css
.topright {
    position: absolute;
    top: 0;
    right: 0;
}
```

## A very basic example (but not a good one)
Here's the simplest possible example, which simply puts a paragraph in the top right of the page.
You will basically *never* want to use this pattern, though, because it is almost never a good idea simply to glue something to the top right corner of a page.

{%capture content %}
<h1>Hello Absolute World</h1>
<p>I am a normal paragraph</p>
<p>I am a normal paragraph</p>
<p>I am a normal paragraph</p>
<p>I am a normal paragraph</p>
<p>I am a normal paragraph</p>
<p>I am a normal paragraph</p>
<p>I am a normal paragraph</p>
<p style="color:red;position:absolute;top:0;right:0;font-weight:bold;">And I <br>am an <br>absolute <br>positioned paragraph</p>
<p>I am a normal paragraph after an absolute paragraph</p>
{%endcapture %}
{%include codeeditor.html content=content %}

## A better example

The way absolute positioning works is that when you specify `top`, `left`, `right`, or `bottom`, that distance is measured from *the nearest absolute, relative or fixed parent*, or from the entire document if there is no such parent.

In practice, we almost always use absolute positioning to affix something to a parent, so typically you would use `position:relative` to choose an element to fix something to. Here's what that looks like:

{%capture css %}
    section {
        position: relative;
        --offset : 8px;
        width: 80vh;
        height: 200px;
        display: grid;
        place-content: center;
        background-color: red;
        color: white;
        margin: auto;
    }
    section > div {
        position: absolute;
        background-color: green;
        padding: 3px;
    }
    .topright {
        top: var(--offset); 
        right : var(--offset);
    }
    .topleft {
        top: var(--offset);
        left: var(--offset);
    }
    .bottomright {
        bottom: var(--offset);
        right: var(--offset);
    }
    .bottomleft {
        bottom: var(--offset);
        left: var(--offset);
    }
{%endcapture %}
{%capture html %}
<h1>Here is some other content</h1>
<p>Wow, this content is unrelated to the absolute stuff</p>
<section>
  <h2>This parent is the "relative" frame!</h2>
  <div class="topright">Top right!</div>
  <div class="topleft">Top left!</div>
  <div class="bottomright">Bottom right!</div>
  <div class="bottomleft">Bottom left!</div>
</section>
{%endcapture%}
{%include editor3.html css=css html=html startTab="css" disableTabs="js" %}

## A Functional Example

### Using "padding" + "absolute positioning" to make sure our item shows up in space

Here's what relative and absolute positioning often look like in practice.

```css
.labeled {
    position: relative; /* Make the relative parent */
    padding: 64px; /* Make room for a label */
    box-shadow: 2px 2px #ccc;
}

.labeled .label {
    position: absolute;
    top: 0;
    right: 0;
    width: 64px; /* Constrain our label to fit the padding above */
    box-sizing: border-box;
    padding: 8px;
    border-radius: 4px;
}

```

Here it is in action:

{%capture css %}
.labeled {
    position: relative; /* Make the relative parent */
    padding: 64px; /* Make room for a label */
    box-shadow: 2px 2px #ccc;
}

.labeled .label {
    position: absolute;
    top: 4;
    right: 4;
    width: 44px; /* Constrain our label to fit the padding above */
    box-sizing: border-box;
    padding: 8px;
    border-radius: 4px;
    font-size: x-small;
    background-color: #c6093b;
    color: white;
    text-align: center;
}
{%endcapture %}
{%capture html %}
<div class="labeled">Wow this is some content that will have a label in the
top right corner saying what it is isn't that nifty? <div class="label">Ex. 1</div>
</div>
{%endcapture%}
{%include editor3.html css=css html=html startTab="css" disableTabs="js" %}

### Using a semi-opaque background to allow overlap + readable text

Often with images we actually want real overlapping to happen. Here's a nexample of a generic "caption" box we might make.

```css
figure {
    position: relative;
    --width: 600px;
}
figure figcaption {
    position: absolute;
    bottom: 0;
    background-color: #00000088; /* semi-transparent background */
    color: white;
    box-sizing: border-box; /* keep our sizing simple :) */
    padding: 8px;
}

figure figcaption, figure img {
    width: var(--width);
}
```


{%capture css %}
figure {
    position: relative;
    --width: 300px;
}
figure figcaption {
    position: absolute;
    bottom: 0;
    background-color: #00000088; /* semi-transparent background */
    color: white;
    box-sizing: border-box; /* keep our sizing simple :) */
    padding: 8px;
}

figure figcaption, figure img {
    width: var(--width);
}
{%endcapture %}
{%capture html %}
<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Gir_lion.jpg">
<figcaption>An image of a lion, courtesy of wikipedia.</figcaption>
</figure>
{%endcapture%}
{%include editor3.html css=css html=html startTab="css" disableTabs="js" %}





