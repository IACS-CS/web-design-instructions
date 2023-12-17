---
order: 11
---

# Layering items
When we use relative or absolute positioning to put items on top of each other, we introduce the concept of layers and stacking order: if two images are on top of each other, which one comes first?

The *default* stacking order in the browser is as follows:

* The items are stacked in order, from first to last, as read.
* Items with absolute/relative/fixed positioning go on *top* of items in the default layout.
* You can override a stacking order by specifying the `z-index` property (the higher the z-index, the further up in the stacking order)

## Default Stacking Order

The example below has no z-index rules, so the fourth item is on top. Try adding z-index: 1 to any of the items to make it move to the top.


{%capture css %}
    li:nth-child(1) {
        top: 0;
    }
    li:nth-child(2) {
        top: -8px;
    }
    li:nth-child(3) {
        top: -16px;
    }
    li:nth-child(4) {
        top: -24px;
    }
    li {
        position: relative;
        height: 20px;
        margin: 0;
        opacity: 0.8;
    }
{%endcapture %}
{%capture html %}
<p>In the list below, the items are relative positioned so they overlap
by 16px each</p>
<ul>
<li style="background-color: #ff88cc">First item</li>
<li style="background-color: #ffff88">Second item</li>
<li style="background-color: #8888ff">Third item</li>
<li style="background-color: #88ff88">Fourth item</li>
{%endcapture%}
{%include editor3.html css=css html=html startTab="css" disableTabs="js" %}

## Customizing Stacking Order

Often for graphic design, we want a foreground and a background layered in special ways. 

For this example, I lined up the "m" in Romeo and the "l" in Juliet to make a straight line pointing at a heart using absolute positioning. I then wanted to set up layering so that "Juliet" was on top of the heart image but underneath the sword. Doing that meant putting special z-index rules on my spans for Juliet, sword, and heart, as follows:

```css
/* Make it go on TOP of heart even though heart comes later
in the HTML */
.juliet {
    z-index: 1;
}
/* Make sword go on top of Juliet even though Juliet has
a z-index set manually */
.sword {
    z-index: 2;
}
```

Note that in the example below I don't have to make special rules to make "Juliet" go over "and" and "and" go over "Romeo" because those follow the normal stacking order (later items go on top of earlier ones).


{%capture css %}
h2 {
    position: relative;
    width: 300px;
    height: 300px;
    font-size: 72px;
    background-color: black;
    color: white;
}

h2 > span {
    position: absolute;
}
h2 .romeo {
    font-family: futura;
    top: 24px;
    left: 24px;
    color: powderblue;
}
h2 .juliet {
    font-family: Papyrus, Lucida Handwriting, cursive;
    top: 108px;
    right: 22px;
    color: pink;
    font-size: 78px;
    z-index: 1;
}
.and {
    left: 58px;
    top: 86px;
    color: #fcfcfc;
}
.sword {
    bottom: 38;
    left: 44px;
    color: silver;
    font-size: 118px;
    z-index: 2;
}
.heart {
    bottom: 38px;
    right: 80px;
}
.romeo,.juliet {
   text-shadow: 2px 2px #4c4c4c;
}
{%endcapture %}
{%capture html %}
<div>
    <h2>
        <span class="romeo">Romeo</span>
        <span class="and">and</span>
        <span class="juliet">Juliet</span>
        <span class="sword">⚔</span>
        <span class="heart">❤️</span>
    </h2>
</div>
{%endcapture%}
{%include editor3.html css=css html=html startTab="css" disableTabs="js" %}
    