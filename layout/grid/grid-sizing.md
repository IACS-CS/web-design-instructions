---
order: 2
---

# Sizing in CSS Grid

## Introduction to Grid Sizing

Sizing in CSS Grid is a fundamental aspect that determines how grid items are displayed within the container. Key concepts include:

- `fr` unit: Represents a fraction of the available space in the grid container.
- Fixed sizing: Specifying sizes in pixels (`px`), ems (`em`), and other fixed units.
- `auto`: Size based on the content or the container's dimensions.

## Fractional Units (`fr`)

Fractional units offer flexibility and responsiveness in grid layouts.

### Example: Creating a Fluid Layout

```css
.fluid-layout {
    display: grid;    
    grid-template-columns: 1fr 2fr 1fr;
    gap: 10px;
}
```

In this layout, the second column is twice the width of the first and third columns, adapting fluidly to the container's width.

## Fixed and Flexible Sizing

Combining fixed and flexible sizing can yield versatile layouts.

### Example: Fixed and Fluid Columns

```css
.mixed-layout {
    display: grid;
    grid-template-columns: 200px 1fr 3fr;
    gap: 10px;
}
```

This grid uses a fixed-width first column and two fluid columns that adjust their sizes relative to each other.


{%capture css %}
.flexible-layout {
    display: grid;
    /* Try changing the column sizes to see 
    how the fixed and fluid sizes interact */
    grid-template-columns: 200px 1fr 2fr;
    gap: 10px;
}
.grid-item {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
}
{%endcapture %}

{%capture html %}
<div class="flexible-layout">
    <div class="grid-item">first</div>
    <div class="grid-item">second</div>
    <div class="grid-item">third</div>
</div>
{%endcapture%}
{%include editor3.html css=css html=html startTab="css" disableTabs="js" %}

## Auto-Filling Rows and Columns

The `auto-fill` and `auto-fit` keywords enable responsive grid layouts without media queries.

### Example: Auto-Fitting Gallery

```css
.auto-fit-gallery {
    display: grid;
    /* Try changing the minimum size under minmax and see how
    the grid responds */
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
}
```

The gallery adjusts the number of columns based on the viewport size, maintaining a minimum width of 100px for each item.

This example demonstrates a responsive grid gallery. Modify the CSS in the editor to see how the gallery responds to different grid configurations.

{%capture css %}
.responsive-gallery {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
gap: 10px;
}
.gallery-item {
border: 1px solid #ccc;
background-size: cover;
padding-bottom: 100%; /* Maintain aspect ratio */
}
{%endcapture %}

{%capture html %}

<div class="responsive-gallery">
    <div class="gallery-item" style="background-image: url('https://picsum.photos/150/150?random=1');"></div>
    <div class="gallery-item" style="background-image: url('https://picsum.photos/150/150?random=2');"></div>
    <div class="gallery-item" style="background-image: url('https://picsum.photos/150/150?random=3');"></div>
    <div class="gallery-item" style="background-image: url('https://picsum.photos/150/150?random=4');"></div>
    <div class="gallery-item" style="background-image: url('https://picsum.photos/150/150?random=5');"></div>
    <div class="gallery-item" style="background-image: url('https://picsum.photos/150/150?random=6');"></div>
    <!-- Additional gallery items here -->
</div>
{%endcapture%}
{%include editor3.html css=css html=html startTab="css" disableTabs="js" %}

## Sizing Grid Rows

Grid rows can be sized similarly to columns, providing control over the vertical layout.

### Example: Varied Row Heights

```css
.varied-rows {
    display: grid;
    grid-template-rows: 100px auto 50px;
    gap: 10px;
}
```

This grid has a fixed-height top row, a flexible middle row, and a smaller bottom row.

## The Role of `minmax()`

The `minmax()` function is crucial for creating responsive layouts that adapt while maintaining certain size constraints.

### Example: Responsive Columns with `minmax()`

```css
.responsive-columns {
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    gap: 10px;
}
```

Each column in this grid has a minimum width of 100px and grows proportionally to fill the available space.

Here's a full example:



{%capture css %}
.auto-fit-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
}
.grid-item {
    border: 1px solid #ccc;
    padding: 20px;
    text-align: center;
}
{%endcapture %}

{%capture html %}
<div class="auto-fit-layout">
    <div class="grid-item">Item 1</div>
    <div class="grid-item">Item 2</div>
    <div class="grid-item">Item 3</div>
    <!-- Add more items if needed -->
</div>
{%endcapture%}
{%include editor3.html css=css html=html startTab="css" disableTabs="js" %}



