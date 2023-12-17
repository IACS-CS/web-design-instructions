**Introducing Flexbox**

If you want to do more than stack boxes on top of each other, you need something better than block layouts. Luckily, HTML introduced *flexbox*, a system for arranging boxes in rows or columns.

**Row Layouts**

The default "flex" layout is in a row, with items being layed out
from left to right. You can use the **justify-content** property to decide how the elements get distributed. They default to all stacking on the left-hand side (flex-start). Other useful values are:

* flex-end: start packing at the end (right in a row-based layout)
* center: center the content
* space-between: Put the content at the edges, with space between evenly
* space-evenly: Space content out evenly, including space at the edges

```html.run
<style>
  section {
      display: flex;
  }
  section {
      border: 1px solid grey;
      padding: 2px;
      margin-bottom: 3px;
  }
  div {
      border: 1px solid red;
      padding: 3px;
  }
</style>

<section>
    <div>flex-start (default)</div>
    <div>box 2</div>
    <div>box 3</div>
</section>
<section style="justify-content: center">
    <div>center</div>
    <div>box 2</div>
    <div>box 3</div>
</section>
<section style="justify-content: flex-end">
    <div>flex-end</div>
    <div>box 2</div>
    <div>box 3</div>
</section>
<section style="justify-content: space-between">
    <div>space-between</div>
    <div>box 2</div>
    <div>box 3</div>
</section>
<section style="justify-content: space-evenly">
    <div>space-evenly</div>
    <div>box 2</div>
    <div>box 3</div>
</section>
```

**Creating Flex Layouts**

To use "flexbox", you need at a minimum to set the CSS property of
the container to
```
display:flex
```

You can do that using a style rule in a stylesheet or style tag, like this:
```
<style>
   section {
       display: flex
   }
</style>
<section><p>Wow</p><p>Flex box is cool</p></section>
```

Or you could use inline styles:
```html.run
<section style="
    display: flex; 
    justify-content: flex-end;
">
  <div>Wow</div> <div>Cool is flexbox</div>
</section>
```

**Column Layouts**
If you change the ```flex-direction``` to **column**, then everything in the row layout just gets rotated by ninety degrees.

```html.run
<style>
  body {
      display: flex;
  }
  section {
      display: flex;
      flex-direction: column;
      height: 300px;
  }
  section {
      border: 1px solid grey;
      padding: 2px;
      margin-bottom: 3px;
  }
  div {
      border: 1px solid red;
      padding: 3px;
  }
</style>
<body>
<section>
    <div>flex-start (default)</div>
    <div>box 2</div>
    <div>box 3</div>
</section>
<section style="justify-content: center">
    <div>center</div>
    <div>box 2</div>
    <div>box 3</div>
</section>
<section style="justify-content: flex-end">
    <div>flex-end</div>
    <div>box 2</div>
    <div>box 3</div>
</section>
<section style="justify-content: space-between">
    <div>space-between</div>
    <div>box 2</div>
    <div>box 3</div>
</section>
<section style="justify-content: space-evenly">
    <div>space-evenly</div>
    <div>box 2</div>
    <div>box 3</div>
</section>
</body>
```




