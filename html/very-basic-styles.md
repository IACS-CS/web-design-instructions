---
order: 10
---
# Basic Styles

Styling web pages is done in a language called **CSS** which is quite complex and beyond the scope of this tutorial. That said, in my experience students are much happier if they make at least a few basic style changes right away, so this document will go over some very basic styling rules.

**The Style Tag**

A very basic way to add "style" to a webpage is to add a &lt;style&gt; tag to the &lt;head&gt; of the page. Everything **inside** the style tag is in **CSS** which is a language of its own. CSS has the following structure:

```css
selector {
    property : value;
    property : value;
    property : value;
}
```

The "selector" tells the browser **which elements** it is styling, and the rule set (inside the braces) tells the browser what style rules to apply.

Here's an example of a basic rule you might have (this rule would have to go **inside** a style tag):

```css
body {
    width: 300px;
    margin: auto;
}```

That rule has two parts: **width** sets the width of the **body** element (effectively the whole page). The **margin** rule sets margins. Setting margins to "auto" will make the left and right margin equal and use up all available extra space, effectively centering the page.

{%capture code %}
<html>
  <head>
    <style>
      body {
        width: 300px;
        margin: auto;
      }
    </style>
    <body>
      <h1>Centering the Whole Page</h1>
      <div>
        This is some text. It will be in a block
        that is centered on the page. If your browser
        is 1200 pixels wide (on a big wide screen), the
        text will show up in the center of the page, which will tend to look better than having it on the left.
      </div>
    </body>
{%endcapture %}
{%include codeeditor.html content=code %}

**Inline Styles**

In addition to creating style rules for the whole document in the &lt;style&gt; tag, you can add styles directly to any element by using a style *attribute*. Nowadays, people usually avoid style attributes if they can because they are much harder to change (if you change your mind about what colors you like, it's much easier to change one style rule for all elements of a given type than to change a hundred style attributes on individual elements). That said, if what you want is to change just *one* particular element, then the style attribute is your friend. It's also a lot easier to understand for students just starting out.

When you use the *style* attribute, you just include the "rule" part of the style, with no *selector* and no curly brackets {} needed.

```
<tagname style="
  property: value; 
  property: value; 
  property: value;"
>
```

{%capture code %}
<p>This paragraph is normal.</p>
<p style="color: red; font-size: 200%">
  This paragraph is very important
<p>
<p>This paragraph is also normal.</p>

{%endcapture %}
{%include codeeditor.html content=code %}
****Some Useful CSS Properties****


**Fonts**

You can change a lot on a page by changing the fonts up. There are five properties you are likely to want to use to change text.

* color : **Changes the color of text** [in hex code](https://www.google.com/search?q=hex+color+picker&oq=hex+color+picker&aqs=chrome..69i57j0i67j0i512l7.3272j0j1&sourceid=chrome&ie=UTF-8(using hex colors)
* font-size : **Changes the size of text**
* [font-family](https://www.w3schools.com/cssref/pr_font_font-family.asp) **Changes the kind of font**
* font-style : **Changes the slant of font (italic)**
* font-weight : **Changes the weight of font (bold)**
* text-align : **Changes alignment (right, left or center)**

You can use the *body* selector to change the font for your entire document, or you can use specific element selectors (*b*, *i*, *p*, *h3*) to style specific elements.

Here are some quick examples:
{%capture code %}
<html>
<head>
  <style>
    body {
        font-family: Verdana, sans-serif;
        font-size: 11pt; /* base font-size for the page */
        color: #333; /* dark grey */
    }
    h1 {
        color : #0033a0; /* IACS Blue */
        font-weight: normal; /* not bold, like normal */
        font-size: 200%; /* 200% (double) the base font size for this page */
        font-family: Futura;
        text-align: center;
    }
    b {
        color: #c6093b; /* IACS Red */
    }
    i {
        color: #777; /* grey */
    }
  </style>
</head>
<body>
  <h1>The Heading</h1>
  <p>This is a <b>paragraph</b> with some <i>tags</i> within it.
  This is a <b>paragraph</b> with some <i>tags</i> within it.
  This is a <b>paragraph</b> with some <i>tags</i> within it.
  This is a <b>paragraph</b> with some <i>tags</i> within it.
  This is a <b>paragraph</b> with some <i>tags</i> within it.</p>
</body>
</html>
{%endcapture %}
{%include codeeditor.html content=code %}

**Backgrounds and Blocks**

Students often want to make something a certain color. To change the color of a whole page or a section of the page, you use the property
**background-color** (the values are [in hex code](https://www.google.com/search?q=hex+color+picker&oq=hex+color+picker&aqs=chrome..69i57j0i67j0i512l7.3272j0j1&sourceid=chrome&ie=UTF-8(using hex colors)).

Once you're changing background-colors, you likely care about how big a block is. You can specify size of any block element (p, div, li, h1, etc) by using the following:

* width : *the width of an element*
* height : *the height of an element*
* margin : *the space around an element*
* padding : *the space between the edge of an element and the text*

There are many different size units you can use in css: some common units to use are *px* (pixels), *pt* (points - as in font sizes), and *%* (percentage of available space or the default space).

Paragraphs and headers have margins by default in HTML on the top and the bottom, so you'll need to set the margin to 0 if you don't want space around them.

Here is an example using some size units and background colors to add color to a page.

{%capture code %}
<html>
<head>
  <style>
    html {
        background-color: black;
    }
    body {
        width: 400px;
        margin: auto;
        background-color: #cfcfcf;
        color: #222;
    }
    header {
        padding: 10px;
        background-color: #c6093b;
        color: white;
    }
    a {
        font-size: 24px;
        color: white;
    }
    h1 {
        background-color: #0033a0;
        color: white;
        text-align: center;
        padding: 15px;
        margin: 0;
    }
    p {
        padding: 15px;
    }
  </style>
</head>
<body>
  <header>
    <nav>
      <a href="#">Page 1</a>
      <a href="#">Page 2</a>
      <a href="#">Page 3</a>
    </nav>
  </header>
  <h1>The Heading</h1>
  <p>This is a <b>paragraph</b> with some <i>tags</i> within it.
  This is a <b>paragraph</b> with some <i>tags</i> within it.
  This is a <b>paragraph</b> with some <i>tags</i> within it.
  This is a <b>paragraph</b> with some <i>tags</i> within it.
  This is a <b>paragraph</b> with some <i>tags</i> within it.</p>
</body>
</html>
{%endcapture %}
{%include codeeditor.html content=code %}

**Reference Materials**

We will go much more in depth on CSS eventually. For now, if there is something else you want to do to an element, you can try looking through the w3 schools list of [CSS properties](https://www.w3schools.com/cssref/). Be aware that any properties relating to positioning will involve understanding how the browser handles layouts, which is a complex topic we will delve into later and will be hard to grasp just by playing with it (though you're welcome to try!).
