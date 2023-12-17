# Accessing Elements in the DOM

The DOM stands for the "Document Object Model" and its the browser's internal model of the HTML that makes up a webpage. That HTML + the style rules defined in HTML and in CSS determine how a webpage is displayed.

There are two main ways to access elements in the DOM via JavaScript:

- [Accessing Elements in the DOM](#accessing-elements-in-the-dom)
  - [Selecting Elements](#selecting-elements)
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
  var div = document.querySelector('#there-can-be-only-one');
  ```

2. The **class** selector is prefixed with a **.** and is meant to indicate a new "type" of thing.

HTML

```html
<div class="menu-item"></div>
```

JavaScript

```javascript
var div = document.querySelector('.menu-item');
```

3. The **element** selector is just the name of the element.
   
```html
<canvas></canvas>
```

JavaScript

```javascript
var div = document.querySelector('canvas');
```

Note: if there are multiple elements, querySelector will just select the *first*. You can also use `querySelectorAll` to get a collection of all elements, which you can loop through like this:

```javascript
for (let div of document.querySelectorAll('.some-class')) {
  // write some code to run for each element...
  // e.g. turn the div red when clicked...
  div
    .addEventListener(
      "click",
      function (e) {
        e.target.style.backgroundColor = 'red';
      }
    )
}
```



## Modifying elements

Usually you'll want to do something with the elements you access, such as add or remove a class, or put text in them or set attributes.

### Adding/Removing Classes
The easiest way to handle this with minimal JavaScript is just to add or remove a class, like this...

```javascript
var myDiv = document.querySelector('div');
myDiv.classList.add('active');
```

You can also remove a class with ```myDiv.classList.remove('active')``` or toggle a class on or off with ```myDiv.classList.toggle('active')```

### Adding/Removing HTML or Text

The *easiest* way to add content to an element is just to set it's innerHTML property -- then you can write HTML as a string, like this:

```javascript
var div = document.createElement('div');
div.innerHTML = `
<h2>Wow a heading</h2>
<p>My amazing bit of JavaScript-generated HTML</p>
`;
```

Note: if you are accepting data from users and inserting it into your web application, it's not a great idea to use the innerHTML method, since code inserted this way could include e.g. a `<script>` tag which could contain malicious code. You can use the `innerText` to set text with no markup included, which is usually what you want to do if you're setting text from a user, like this:

```javascript
var div = document.createElement('div');
div.innerText = textFromUser;
```

