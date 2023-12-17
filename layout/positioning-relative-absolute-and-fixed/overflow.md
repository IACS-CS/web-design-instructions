## Exceeding the Frame

A common graphic design trick is making an image "exceed the frame." Sometimes this means using part of an image that comes into the frame some the side, and sometimes it means having a square and another item entering the frame from the edge.

## Hiding part of an image

If you have an item and want it partly hidden, the trick is to us the `overflow` property on the parent, which lets you control what happens when you ask a parent to be smaller than its content.

Here's an example showing the default behavior (showing everything) vs. what happens when you use `overflow: hidden`

{%capture content %}
<section style="display:flex; justify-content: space-around">
<div style="height:50px;width:50px;background-color:#eee;border:2px solid black;">
  Default: My text is bigger than my size
</div>
<div style="overflow:hidden;height:50px;width:50px;background-color:#eee;border:2px solid black;">
  Overflow hidden: My text is bigger than my size
</div>
</div>
{%endcapture %}
{%include codeeditor.html content=content %}

Here's an example using an absolute positioned child:


{%capture css %}
div {
    overflow: hidden;
    height: 300px;
    width: 300px;
    position: relative;
    padding: 60px;
    border: 3px solid black;
}
div img {
    position: absolute;
    width: 200px;
    top: -60px;
    right: -60px;
}
{%endcapture %}
{%capture html %}
<div>
<img src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png">
This image has dice coming in from the side
</div>
{%endcapture%}
{%include editor3.html css=css html=html startTab="css" disableTabs="js" %}