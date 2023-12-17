---
order: 3
---

# Using a Grid

If you have side-by-side layouts to achieve, CSS Grid is often the easiest solution.
Basically, a CSS grid lets you specify any number of rows and columns you would like
for a layout.

## A very simple grid

For something like our watch layout, we simply want perfectly even rows and columns and a gap between them.


So we might want something like: 100px by 100px with a 10px gap as a starting point.

For the grid *container* we can specify the number and size of rows using `grid-template-rows` and the number and size of columns by using `grid-template-columns` like this:

```css
grid-template-rows: 100px 100px;
grid-template-columns: 100px 100px;
```

We can then put a gap between items with:
```css
gap: 10px;
```

That creates the "tracks" that content fits into. To make the items fit in the tracks, I'll simply apply CSS to each of my children that makes them fit the available space:

```css
width: 100%;
height: 100%;
```

Here it is all together:
{%capture css %}
.square-grid {
    display: grid;
    grid-template-rows: 100px 100px;
    grid-template-columns: 100px 100px;
    gap: 10px;
}
.square-grid .item {
    background-color: orange;
    width: 100%;
    height: 100%;
}
{%endcapture %}
{%capture html %}
<div class="square-grid">
    <div class="item">Watch 1</div>
    <div class="item">Watch 2</div>
    <div class="item">Watch 3</div>
    <div class="item">Watch 4</div>
</div>
{%endcapture %}
{%include editor3.html html=html css=css disableTabs="js" height="300px"%}

## Complicated layouts

If I look at my full image, I have a more complicated layout to deal with:

![Watch layout](../assets/images/garmin-ad.webp)

I am going to notice that everything is centered top-to-bottom as a start.

Then I'll notice that I have a grey band on one side and a white on the other.

This kind of layout is easiest to achieve with either flexbox or grid or both.

Here's how it might look in HTML

```html
<main>
    <section class="column left grey">
        <div class="text">...text stuff here...</div>
    </section>
    <section class="column right white">
        <div class = "square-grid">
            <div class="item">Watch 1</div>
            <div class="item">Watch 2</div>
            <div class="item">Watch 3</div>
            <div class="item">Watch 4</div>
        </div>
    </section>
</main>
```

Now the sections each have the job of filling all vertical space and centering their children vertically, so we might do something like:

```css
section {
    display: grid;
    justify-content: center;
    height: 100%;
}
```

Put it all together and the outer stuff looks like this:


{%capture css %}
main {
    height: 600px;
    width: 600px;
    display: flex;
    flex-direction: row;
}
section {
    display: grid;
    align-items: center;
    height: 100%;
}
.left {
    width: 38%;
    padding-left: 16px;
}
.right {
    width: 62%;
    justify-content: center;
}
.grey {
    background-color: grey;
}
.white {
    background-color: offwhite;
}
.square-grid {
    display: grid;
    grid-template-rows: 100px 100px;
    grid-template-columns: 100px 100px;
    gap: 10px;
}
.square-grid .item {
    background-color: orange;
    width: 100%;
    height: 100%;
}
{%endcapture %}
{%capture html %}
<main>
    <section class="column left grey">
        <div class="text">...text stuff here...</div>
    </section>
    <section class="column right white">
        <div class = "square-grid">
            <div class="item">Watch 1</div>
            <div class="item">Watch 2</div>
            <div class="item">Watch 3</div>
            <div class="item">Watch 4</div>
        </div>
    </section>
</section>
{% endcapture %}
{%include editor3.html html=html css=css disableTabs="js" height="600px"%}

My last step is positioning my watch precisely where I want it over top of the image and plopping images and text in place of my placeholders in the layout.
