---
order: 4
---

# Mastering Alignment and Sizing in CSS Grid

## Aligning and Justifying Content in Grid

CSS Grid provides a set of properties to control the alignment and distribution of items within the grid container. These properties include:

- `justify-content`: Aligns the grid along the row (horizontal) axis.
- `align-content`: Aligns the grid along the column (vertical) axis.
- `place-content`: A shorthand for setting both `justify-content` and `align-content`.

Experiment with the following interactive grid. Use the dropdown menus to change the `justify-content` and `align-content` properties and observe how the grid items' alignment changes.

<article class="wide grid-alignment-demo" style="border: 1px solid #ccc; padding: 2em; max-width: 600px; margin: auto;">
  <style>
    .grid-alignment { 
      display: grid; 
      grid-template-columns: repeat(3, auto); 
      grid-template-rows: repeat(3, auto); 
      gap: 10px; 
      padding: 10px;
      width: 300px;       
      height: 300px;
      margin: auto;
      background-color: #333;
    }
    .grid-item { 
      background-color: rgba(255, 218, 185, 0.8); 
      border: 1px solid rgba(0, 0, 0, 0.8); 
      display: grid;
      place-content: center;
      width: 50px; height: 50px;
      text-align: center; 
    }
  </style>
  <select id="justify-content-select">
    <option value="start">justify-start</option>
    <option value="end">justify-end</option>
    <option value="center">justify-center</option>
    <option value="space-between">justify-space-between</option>
    <option value="space-around">justify-space-around</option>
  </select>
  <select id="align-content-select">
    <option value="start">align-start</option>
    <option value="end">align-end</option>
    <option value="center">align-center</option>
    <option value="space-between">align-space-between</option>
    <option value="space-around">align-space-around</option>
  </select>
  <div class="grid-alignment" id="grid-alignment-demo">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
     <div class="grid-item">7</div>
    <div class="grid-item">8</div>
    <div class="grid-item">9</div>
  </div>
  <script>
    document.getElementById('justify-content-select').addEventListener('change', function(event) {
      document.getElementById('grid-alignment-demo').style.justifyContent = event.target.value;
    });
    document.getElementById('align-content-select').addEventListener('change', function(event) {
      document.getElementById('grid-alignment-demo').style.alignContent = event.target.value;
    });
  </script>
</article>

## Using alignment properties

It can be handy to set up a grid container so that you can use the alignment and justify
properties on children to decide how to place content within a container.

In the example below, I set up a `.card` grid container which then allows
the children to specify `justify-self` and `align-self` in order to move themselves
within the layout to the left/right/top/bottom of their respective "cell."

{%capture css %}
/* Try playing with the positioning of title/image/text */
.card-title {
    justify-self: center; /* Center-align horizontally */
    font-size: 1.2em;
    font-weight: bold;
}

.card-image {
    width: 100%;
    align-self: center; /* Center-align vertically */
}

.card-text {    
    place-self: end; /* Align to the bottom-right */
    background-color: #222;
    color: white;
    padding: 8px;
    border-radius: 4px;
    
}

.card {
    border: 1px solid #ccc;
    padding: 10px;
    display: grid;
    /* The "card" is just three rows */
    grid-template-rows: auto 1fr auto;
    gap: 10px;
}

.card-grid {
    display: grid;
    /* Try changing the size of the columns */
    grid-template-columns: repeat(auto-fit, 200px);
    gap: 20px;
    padding: 20px;
}

{%endcapture %}

{%capture html %}
<div class="card-grid">
    <div class="card">
        <div class="card-title">Card Title</div>
        <img class="card-image" src="https://picsum.photos/200/250" alt="Card Image">
        <p class="card-text">Label</p>
    </div>
    <div class="card">
        <div class="card-title">Card Title</div>
        <img class="card-image" src="https://picsum.photos/350/350" alt="Card Image">
        <p class="card-text">Label</p>
    </div>
    <div class="card">
        <div class="card-title">Card Title</div>
        <img class="card-image" src="https://picsum.photos/400/250" alt="Card Image">
        <p class="card-text">Label</p>
    </div>
    <!-- Repeat for more cards -->
</div>
{%endcapture%}
{%include editor3.html css=css html=html startTab="css" disableTabs="js" %}


### Centering Content with `place-content`

The `place-content: center` property is incredibly useful for centering content both vertically and horizontally within a grid item. It's a shorthand for `align-content: center` and `justify-content: center`. This property is especially handy for centering text in buttons, headings in hero sections, etc. -- any time you know the height of an element and want to center some content within it.

#### Example Usage:

```css
.hero {
  display: grid;
  place-content: center;
  height: 100vh;
  width: 100vw;  
}

.centered-card {
    display: grid;
    place-content: center;
    height: 200px; /* Height is necessary to see vertical centering */
    width: 300px;
}

.button {
  display: grid;
  place-content: center;
  padding: 10px 20px;
  min-height: 32px;
  min-width: 96px;  
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
}
```

Here's a quick and easy example of a "Hero" section using this trick:

{%capture css %}
.hero {
  display: grid;
  place-content: center;
  text-align: center;
  background-color: #222;
  color: #fafefe;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;    
  font-family: Futura;
  font-size: 28px;
}
{%endcapture %}
{%capture html %}
<div class="hero">
  Hello World
  <br>this
  <br>is
  <br>centered
</div>
{%endcapture %}
{%include editor3.html css=css html=html startTab="all" disableTabs="js" %}
