# Step 1: A Little Style

Before we jump into JavaScript, let's make this page look a little bit nicer.

Here's some basic code to make our tabs look like tabs.

Make the `<ul class="tabs">` element stick to the top of the page as a header.

```css
.tabs {  
  display: flex;
  list-style: none;
  gap : 5px;
  padding: 0;
  /* Make it stick to the top of the page */
  position: sticky;
  top: 0;
  /* Need background-color or text will show when
  it scrolls underneath */
  background-color: white;
}
```

Make each item in the tabs list look like a tab.

```css
.tabs li a {
  /* Make all tabs the same width */
  width: 150px;
  height: 40px;
  /* Quick and easy centering */
  display: grid;
  place-content: center;
  /* Background and border colors */
  background-color: #efefef;
  border: 1px solid grey;
  /* set radius on top-left/top-right
     so it looks like a tab */
  border-radius: 20px 20px 0 0;
  /* Remove the underline and blue color */
  text-decoration: none;
  color: black;
}

```

## Step 2: Set up classes for toggling sections

We are going to make it so when you click on "Section 2", the Section 1 content disappears and the "Section 2" content shows up in its place.

To do this, we can use CSS classes to hide sections that aren't active and to show the active section. Then we can use JavaScript to add or remove classes from elements.

We will use the class `active` to indicate both which link is active and which section is active.

*Update* your HTML as follows, adding `class="active"` to the link to Section 1 and to Section 1 itself (you're not copying and pasting the code below, but changing the existing code):
```html
<ul>
  <li >
    <a href="#Secton1" class="active">Section 1</a>
  </li>
  ...
</ul>
<main>
  <section class="active">
    ...
  </section>
  ...
</main>
```

Next, let's use CSS to make the default section hidden and to make the active section display.
```css
/* Hide inactive sections */
section {
  display: none;
}
section.active {
  display: block;
}
```

We can also make the active tab look different so it's clear which tab is selected.
```css
.tabs li a.active {
  background-color: black;
  color: white;
}
```

At this point, our page *looks* right but doesn't work, like this:

{% include codepen.html id="abXrGBP" tabs="html,css,result" %}