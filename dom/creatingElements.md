# Accessing Elements in the DOM

The DOM stands for the "Document Object Model" and its the browser's internal model of the HTML that makes up a webpage. That HTML + the style rules defined in HTML and in CSS determine how a webpage is displayed.

There are two main ways to access elements in the DOM via JavaScript:

- [Accessing Elements in the DOM](#accessing-elements-in-the-dom)
  - [Selecting Elements](#selecting-elements)
  - [Creating Elements](#creating-elements)
    - [Creating the Element](#creating-the-element)
    - [Appending an Element to the Document](#appending-an-element-to-the-document)
    - [Modifying elements](#modifying-elements)

## Selecting Elements

To select elements, you can use the `querySelector` method of any DOM element, including the top level `document`  element, which lets you search an element's children for elements that match the [selector](https://www.w3schools.com/cssref/css_selectors.asp).

For our purposes, there are three types of selectors you're likely to need:

1. The **ID** selector is prefixed with a **#**: meant for *unique* elements on a webpage, can select an *id* attribute which can be added to any HTML element.

  HTML

  ```html
  <div id="there-can-be-only-one"></div>
  ```

  JavaScript

  ```javascript
  let div = document.querySelector('#there-can-be-only-one');
  ```

2. The **class** selector is prefixed with a **.** and is meant to indicate a new "type" of thing.

HTML

```html
<div class="menu-item"></div>
```

JavaScript

```javascript
let div = document.querySelector('.menu-item');
```

3. The **element** selector is just the name of the element.
   
```html
<canvas></canvas>
```

JavaScript

```javascript
let div = document.querySelector('canvas');
```

Note: if there are multiple elements, querySelector will just select the *first*. You can also use `querySelectorAll` to get a collection of all elements, which you can loop through like this:

```javascript
for (let div of document.querySelectorAll('.some-class')) {
  // write some code to run for each element...
}
```

## Creating Elements

There are two steps to creating an element:

1. Create the element
2. Add it to the document.

You will need *somewhere* to add the document, so usually creating an element *still* requires you to [select an element](#selecting-elements), though if you're feeling particularly lazy, `document.body` should point to the toplevel body element on the page, so, presuming your page at least has a body, you can always just use `document.body.appendChild` to add to an element to a page (this can be useful if you want to just add a pop-up window on top of the page, for example).

### Creating the Element

To create a new empty element, you simply call `document.createElement` with the name of the element you want to create as a string, as in `document.createElement('a')` or `document.createElement('canvas')`.

You will then need to save a reference to that new element in a variable so you can do something with it, like this:

```html
let canv = document.createElement("canvas");
```

### Appending an Element to the Document

To add an element to a document, you can call `appendChild` from any dom element -- this will tack your element on after any other children belonging to that element.

```javascript
// Create a new canvas
let canv = document.createElement('canvas');
// Add it to the body
document.body.appendChild(canv);
```

The JavaScript above would transform HTML that looked like this:

```html
<html> 
  <head>...</head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

into HTML like this:

```html
<html> 
  <head>...</head>
  <body>
    <h1>Hello World</h1>
    <canvas></canvas>
  </body>
</html>
```

There are various other methods for adding HTML to a page which you might occasionally want, such as 
 [insertBefore](https://www.w3schools.com/jsref/met_node_insertbefore.asp) and [replaceChild](https://www.w3schools.com/jsref/met_node_replacechild.asp). You might also find [insertAdjacentHTML](https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp) handy from time to time.

### Modifying elements

Usually you'll want to do something with the elements you create, such as put text in them or set attributes.

The *easiest* way to add content to an element is just to set it's innerHTML property -- then you can write HTML as a string, like this:

```javascript
let div = document.createElement('div');
div.innerHTML = `
<h2>Wow a heading</h2>
<p>My amazing bit of JavaScript-generated HTML</p>
`;
```

Note: if you are accepting data from users and inserting it into your web application, it's not a great idea to use the innerHTML method, since code inserted this way could include e.g. a `<script>` tag which could contain malicious code. You can use the `innerText` to set text with no markup included, which is usually what you want to do if you're setting text from a user, like this:

```javascript
let div = document.createElement('div');
div.innerText = textFromUser;
```

