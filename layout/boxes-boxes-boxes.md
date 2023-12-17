---
order: 0
---

# Boxes, Boxes, Boxes

HTML layout follows what is traditionally called "the box model." When the browser lays out a page, everything is treated as a rectangle and is layed out according to its width and height.

A typical HTML page with no style rules is just layed out top-to-bottom, with boxes stacked on top of each other.

**Block Layout**

The default layout scheme for HTML is the "block" layout, with blocks
being stacked on top of each other top to bottom.

In addition to this, there are "inline" elements, which are stacked left to right and then top to bottom, like words on a page being layed out by a typewriter.

Inline elements typically fill up blocks.

{%capture css %}
  h1,h2,p,div,section,footer {
      border: 1px solid red;
  }
{%endcapture %}
{%capture html %}
<h1>Headings are blocks</h1>
<p>I put a red border around everything on this page so you can
see how the computer thinks of the rectangles.</p>
<h2>Headings have space between them</h2>
<p>So do paragraphs</p>
<div>There are a number of generic tags for blocks that don't have
any margins by default. These include div, header, footer, section, article,
main.</div>
<section>This is a section after a div</section>
<footer>And here is a footer</footer>
{%endcapture%}
{%include editor3.html css=css html=html startTab="html" disableTabs="js" %}

