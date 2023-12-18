---
order: 3
---

# Responsive Design with CSS Grid

## Understanding `grid-template-areas`

The `grid-template-areas` property allows you to create a visual template for your grid layout using a unique ASCII-art-like syntax. Each string represents a row, and each name within the string represents a column cell. This visual approach makes it easier to design and understand the layout structure.

Using grid-template-areas, we can easily change up layouts. Press the "Change layout" button below
to see how grid-template-areas can quickly create a new layout with just one CSS property.

<article class="wide grid-demo" style="border: 1px solid #ccc; padding: 2em;">
<header style="text-align: center">
<button id="changeLayout" style="display: block; margin: 20px auto; padding: 10px 20px; font-size: 16px; cursor: pointer;">Change Layout</button></header>
  <div style="display:flex; gap: 16px; justify-content: center;">
  <div class="code">
    <h4>CSS</h4>
    <pre  id="gta-code-box" style="margin: auto;">
    
    </pre>
    <h4>HTML</h4>
<pre>
&lt;div class="grid"&gt;
    &lt;nav style="grid-area: nav"&gt;...&lt;/nav&gt;
    &lt;form style="grid-area: login"&gt;...&lt;/form&gt;
    &lt;section style="grid-area: intro"&gt;...&lt;/section&gt;
    &lt;div style="grid-area: cta"&gt;...&lt;/div&gt;
    &lt;div style="grid-area: social"&gt;...&lt;/div&gt;
&lt;/div&gt;
</pre>
</div>
    <div style="display: grid; grid-template-areas: 'nav login' 'intro cta' 'social social'; gap: 10px; max-width: 600px; margin: auto;" id="gta-demo">      
      <div style="grid-area: nav; border: 1px solid; padding: 8px; background-color: #8ED1FC; display: flex; justify-content: space-around; align-items: center;">
  <a href="#" style="text-decoration: none; color: black;">Home</a>
  <a href="#" style="text-decoration: none; color: black;">About Us</a>
  <a href="#" style="text-decoration: none; color: black;">Services</a>
  <a href="#" style="text-decoration: none; color: black;">Portfolio</a>
  <a href="#" style="text-decoration: none; color: black;">Contact</a>
</div>
      <div style="grid-area: login; border: 1px solid; padding: 8px; background-color: #FFD3B6;">
        <form>
          <label>Username</label><br>
          <input type="text" placeholder="username"><br>
          <label>Password</label><br>
          <input type="password" placeholder="password"><br>
          <button type="submit">Login</button>
        </form>
      </div>
      <div style="grid-area: intro; border: 1px solid; padding: 8px; background-color: #FF9F1C; line-height: 1.6;">
        Welcome to our website! Discover a wide range of resources and exciting content. Enjoy browsing through our articles, galleries, and more.
      </div>
      <div style="grid-area: cta; border: 1px solid; padding: 8px; background-color: #FF1654; color: white; text-align: center; display: flex; align-items: center; justify-content: center;">
        <strong style="font-size: 18px;">Subscribe Now!</strong>
      </div>
      <div style="grid-area: social; color: white; border: 1px solid; padding: 8px; background-color: #247BA0;">
        Connect with us: <br>
        <span>[FB]</span> | <span>[TW]</span> | <span>[IG]</span>
      </div>
    </div>
  </div>
  
  <script>
    const cssTemplate = (gridAreas) => {
        return `
.grid {
    display: grid;
    grid-template-areas: 
    ${gridAreas.replace(/"\s*"/g, '"\n    "')};
    /* Add more grid styles if needed */
}
/* Additional CSS for grid items, if necessary */
`;
    };

    const layouts = [
      `"nav login" "intro cta" "social social"`,
      `"nav social"
        "intro login"
        "intro cta"`,
      `"nav  nav"
        "login intro"
        "social intro"
        "cta    cta"`,
      `".     cta   ."
        "intro intro intro"
        "social nav  login"`,
      `"login"
        "cta"
        "intro"
        "social"
        "nav"`              
      // Add more layouts as needed
    ];
    let currentLayout = 0;

    document.getElementById('changeLayout').addEventListener('click', function() {
        currentLayout = (currentLayout + 1) % layouts.length;
        const newLayout = layouts[currentLayout];
        document.getElementById('gta-demo').style.gridTemplateAreas = newLayout;
        document.getElementById('gta-code-box').textContent = cssTemplate(newLayout);
    });

    // Initialize with the first layout
    document.getElementById('gta-code-box').textContent = cssTemplate(layouts[0]);
    
  </script>
</article>




## Example: Creating a Basic Layout

Consider a layout with a header, sidebar, main content area, and footer.

```css
.grid-container {
  display: grid;
   /* Two columns: 1 120px wide, the other the rest of the width */
  grid-template-columns: 120px auto;
  /* Row height fits content */
  grid-template-rows: auto;   
  grid-template-areas: 
    "header header"
    "sidebar content"
    "footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
```

In this CSS, `grid-template-areas` visually maps out the layout:

<div style="display: flex; align-items: center; justify-content: space-around;">
    <div>
        <p><strong>ASCII Art Syntax:</strong></p>
        <pre>
"header  header"
"sidebar content"
"footer  footer"
        </pre>
    </div>
    <div>
        <p><strong>Visual Layout:</strong></p>
        <div style="display: grid; grid-template-areas: 'header header' 'sidebar content' 'footer footer'; border: solid 1px #ccc; width: 200px; text-align: center;">
            <div style="grid-area: header; border: solid 1px #ccc;">Header</div>
            <div style="grid-area: sidebar; border: solid 1px #ccc;">Sidebar</div>
            <div style="grid-area: content; border: solid 1px #ccc;">Content</div>
            <div style="grid-area: footer; border: solid 1px #ccc;">Footer</div>
        </div>
    </div>
</div>

## HTML Structure

Remember that CSS grid works from a parent to a child, so our HTML must have
the grid container as the parent of every element we're laying out in our grid.

```html
<div class="grid-container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```

We then need to use the `grid-area` CSS property to assign each element to its 
grid-area. Note that in the *grid-area* property, you **do not use quotes** around
the area name, so it would look like this:

```css
.header {
  grid-area: header
}
.sidebar {
  grid-area: sidebar;
}
```

and so on.

## Changing Grid Areas

Go ahead and try changing up the grid-areas in the example below:

To get a feel for how grid-template-areas works, go ahead and try changing the grid-template-areas property below. 

For example, you might try:

```
"A B"
"C D"
"E F";
```

OR

```
"A B C D"
"E E F F";
```


{%capture css %}
.grid-container {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas: 
    "A B C"
    "D E F";
  gap: 10px;
  padding: 10px;
}

.grid-item {
  background-color: rgba(255, 218, 185, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  text-align: center;
}
.A { grid-area: A; }
.B { grid-area: B; }
.C { grid-area: C; }
.D { grid-area: D; }
.E { grid-area: E; }
.F { grid-area: F; }
{%endcapture %}

{%capture html %}
<div class="grid-container">
  <div class="grid-item A">A</div>
  <div class="grid-item B">B</div>
  <div class="grid-item C">C</div>  
  <div class="grid-item D">D</div>
  <div class="grid-item E">E</div>
  <div class="grid-item F">F</div>  
</div>
{%endcapture%}

{%include editor3.html css=css html=html startTab="css" disableTabs="js" %}


**Note**: If you create an invalid grid, the property will be "invalid" and not work. 
To be valid, the pattern you "draw" with your ASCII art must be a rectangle and all 
areas must be rectangles as well. 

So, the following would be invalid areas:

L-shaped area: not allowed
```
"A A C E"
"A B D F";
```

Non-rectangle not allowed
```
"A B C D"
"E F";
```

## Responsive Design

A common use-case for these grid areas is responsive design. For example, with
the sidebar layout earlier, a common pattern would be to make a responsive
design so that the layout simplifies to a single column on mobile, like so:

```css
@media (max-width: 800px) {
  .grid-container {
    grid-template-areas:
      "header"
      "sidebar"
      "content"
      "footer";
  }
}
```