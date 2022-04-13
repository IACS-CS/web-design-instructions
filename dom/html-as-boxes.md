# HTML: Nested Boxes
- [HTML: Nested Boxes](#html-nested-boxes)
  - [Heirarchy](#heirarchy)
  - [Creating HTML from a structure](#creating-html-from-a-structure)
  - [Beginning Layout](#beginning-layout)
  - [Next Stop: Layout!](#next-stop-layout)
  
The most basic way to think about any webpage is as an arrangement of elements, which are themselves boxes (rectangles).

Each "box" that a website is made of can contain:

1. Text
2. Media (images, video, audio)
3. A canvas you can draw on with JavaScript
4. Other boxes.

Any simple web application or game you want to create can be seen as a group of nested elements (images, text, etc).

## Heirarchy

The first step in building any website is to think about how to organize the elements of a page into sections. You might think about it like so:

<style>
  #example { border : 2px solid red; padding: 5px; }
  #example * {border : 1px solid red; padding: 5px; margin: 3px; }
  #example main {height: 8em;}
</style>
<div id="example">
  App
  <header>Header</header>
  <main>Body</main>
  <footer>Footer</footer>
</div>

Each of those sections might then contain still more sections, like so:

<style>
  #example2 { border : 2px solid red; padding: 5px; }
  #example2 * {border : 1px solid red; padding: 5px; margin: 3px; }
  #example2 main {height: 8em;}
  #example2 header  {
    display: flex;
  }
  #example2 header  div { margin: auto; }
</style>
<div id="example2">
  App
  <header>
    Header    
    <div>Title</div>
    <a>Button</a>
    <a>Button</a>
    <a>Button</a>
  </header>
  <main>Body</main>
  <footer>Footer</footer>
</div>

## Creating HTML from a structure

In order to create a structure like that, you can use `<div>` elements modified with `class="name"` attributes to make up your own language for the structure of the document (you can also use existing structural elements such as `<header>`, `<footer>` and `<main>`, but if you don't want to have to remember a bunch of tag names, just use `<div>` and then you can't go wrong).

We begin with the outermost shell. You can use `id="name"` for any *unique* element in your app (there can be only one of each ID).

```html
<div id="app">
  NEW CONTENT GOES HERE!
</div>
```

You can then add the next layer of boxes inside of your app:

```html
  <div id="header">
    HEADER GOES HERE    
  </div>
  <div id="main">   
    MAIN GOES HERE 
  </div>
  <div id="footer">
    FOOTER GOES HERE
  </div>
</div>
```

Finally, you can fill in the rest of the details:

```html
<div id="app">
  <div id="header">
    <div id="title">
      Title
    </div>
    <div class="button">Button 1</div>
    <div class="button">Button 2</div>
    <div class="button">Button 3</div>
  </div>
  <div id="main">
    Main
  </div>
  <div id="footer">
    Footer
  </div>
</div>
```

The *default* layout for *all* HTML div elements, is simply to put them on top of each other, taking up as little space as possible (`div`s will grow to fit whatever text or other content goes in them).

## Beginning Layout

There will be some more steps to laying out your content, but a simple starting place is knowing that you can make any div bigger by setting it's *width* and *height* properties in *CSS*. Units for *width* and *height* can be specified either in pixels (px). I also recommend putting some borders on elements as you build them so you can *see* what's happening. Here's an example of some CSS I'd use to build out my basic header/body/footer layout:

```css
#app { 
  border : 1px solid black;
}
#header {
  height: 48px;
  border: 1px solid blue;
}
#footer {
  height: 48px;
  border: 1px solid green;
}
#main {
  height: 400px;
  border: 1px solid purple;
}
```

Here's what it looks like rendered:

<style>
  #e3 #app {
  border : 1px solid black;
}
#e3 #header {
  height: 48px;
  border: 1px solid blue;
}
#e3 #footer {
  height: 48px;
  border: 1px solid green;
}
#e3 #main {
  height: 400px;
}
</style>
<div id="e3">
<div id="app">
  <div id="header">Header
  </div>
  <div id="main">Main
  </div>
  <div id="footer">Footer  
  </div>
</div>
</div>

## Next Stop: Layout!

Next up, check out my [layout how-to's for a few basic layouts](./layouts.md)