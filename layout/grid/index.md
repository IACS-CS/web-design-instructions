---
order: 3
---
# Grid Layouts

## Introducing CSS Grid

CSS Grid Layout, simply known as Grid, is a powerful layout system optimized for two-dimensional layouts. It's ideal for web pages that require complex, responsive grid-based layouts.

Like [Flexbox](./arranging-with-flexbox.md), CSS Grid always assumes a parent-child relationship, so to create a grid, you will need a parent (the grid) and then children (the cells of the grid).

## Basic Grid Layout

Grid allows for the creation of rows and columns with ease. The `display: grid` property transforms an element into a grid container, with direct children becoming grid items. You can define the rows and columns of the container using the `grid-template-rows` and `grid-template-columns` properties.

{%capture css %}
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px;
    padding: 10px;
  }
  .grid-item {
    background-color: rgba(255, 218, 185, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    text-align: center;
  }
{%endcapture %}

{%capture html %}
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
</div>
{%endcapture%}
{%include editor3.html css=css html=html startTab="html" disableTabs="js" %}

## Creating a Simple Grid

To create a simple grid layout, set the container to `display: grid`, then define the columns (or rows) using `grid-template-columns` (or `grid-template-rows`).

```html
<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
  }
</style>
<div class="grid-container">
  <div>Box 1</div>
  <div>Box 2</div>
  <div>Box 3</div>
</div>
```