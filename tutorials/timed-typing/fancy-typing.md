---
order: 4
---
# Magic Typing: Finishing Touches

Ok, in this last step, we will add some finishing touches to our typed-text feature.

## First Up: Structuring my HTML

Rather than having the content of our webpage sitting in JavaScript as code, it would be more elegant to have our HTML list the things we want to be "typed" on the page -- then the JavaScript takes care of the cool presentation, but if JS fails, or if a computer is using a screen reader for a blind user, a user can still access the content as a plain list.

Given that, I'm going to recommend structuring my content like this, which captures the *meaning* in the HTML.
```html
<table class="console">
  <tr>
    <td>I love to: 
    </td>
    <td>
      <ul class="hidden" id="hobby-list">
        <li>Cook</li> 
        <li>Climb Mountains</li>
        <li>Ride bikes</li>
        <li>Write JavaScript</li>
        <li>Design</li>
      </ul>
      <span class="console-entry" id="magic-text">
      </span>
    </td>
  </tr>
</table>
```

Once I've done that, I'll have to...

1. Hide the hidden list with CSS
2. Update my typing and deleting functions to keep track of which item we're typing
3. Grab the text from my list items instead of from JavaScript

Let's step through those elements one at a time:

```css
.hidden {
  /* Hide the hidden list */
  display: none;
}
```

Ok, that was easy. Next up, I'll update my typeHelloOnTimer
function to type the currently active element: 

```javascript

function typeOnTimer () {
  let magicEl = document.querySelector('#magic-text');
  // Get <li class="active"> from <ul id="hobby-list">
  let targetText = document.querySelector('#hobby-list .active').textContent;
  
  // Add the next letter...
  addNextLetter(magicEl,targetText);
  // If our text isn't a match yet, keep adding...
  if (magicEl.textContent !== targetText) {
    setTimeout(
      typeOnTimer, // function to run
      100 // number of milliseconds to wait
    );
  } else {
    waitToDelete();
  }
}
```

Finally, create a function to "switch" the active element
to the next one on the list

```javascript

/* Set the "next" item from list to be active */
function getNextItem () {
  let listContainer = document.querySelector('#hobby-list');
  let currentElement = listContainer.querySelector('.active');
  let nextElement = listContainer.querySelector('li');
  if (currentElement) {
    if (currentElement.nextElementSibling) {
      nextElement = currentElement.nextElementSibling;
    }
  }
  // Remove active class on all items...
  for (let el of listContainer.querySelectorAll('li')) {
    el.classList.remove('active');
  }
  // Add "active" to *next element*
  nextElement.classList.add('active');  
}
```

Finally we put it all together:


{%capture html %}
<table class="console">
  <tr>
    <td>I love to:
    </td>
    <td>
      <ul class="hidden" id="hobby-list">
        <li>Cook</li> <!-- Start here -->
        <li>Climb Mountains</li>
        <li>Ride bikes</li>
        <li>Write JavaScript</li>
        <li>Design</li>
      </ul>
      <span class="console-entry" id="magic-text">
      </span>
    </td>
  </tr>
</table>

{%endcapture %}
{%capture css %}
.hidden {
  /*Hide the hidden list*/
  display: none;
}
.console {
  background-color: #222;
  color: lime;
  font-family: Consolas, monospace;
  width: 100%;
  min-height: 100vh;
  padding: 16px;
}
.console tr {
  display: block;
}
.console td {
  display: inline-block;
}
{%endcapture %}
{%capture js %}
// Function: reset
// Purpose: Reset the animation by clearing text, setting the next item as active.
// And calling waitToType...
function reset() {
  let magicEl = document.querySelector('#magic-text');
  magicEl.textContent = ''; // Clear existing text
  getNextItem(); // Set the next list item as active
  waitToType(); // Start the typing animation
}

// Purpose: Set the next item in the list as active.
function getNextItem() {
  // Select the container of the list
  let listContainer = document.querySelector('#hobby-list');

  // Find the current active element
  let currentElement = listContainer.querySelector('.active');

  // Default to the first item if no active element is found
  let nextElement = listContainer.querySelector('li');
  
  // If there is an active element, move to the next element if it exists
  if (currentElement && currentElement.nextElementSibling) {
    nextElement = currentElement.nextElementSibling;
  }

  // Remove the 'active' class from all list items
  for (let el of listContainer.querySelectorAll('li')) {
    el.classList.remove('active');
  }

  // Add 'active' class to the next element
  nextElement.classList.add('active');  
}


// Wait for a specified time before starting the typing animation.
function waitToType() {
  setTimeout(typeOnTimer, 1000); // Wait 1 second
}

// Function: typeOnTimer
// Purpose: Add letters one by one to the '#magic-text' element.
// using the text in <ul id="hobby-list><li class="active">...</li></ul>
function typeOnTimer() {
  let magicEl = document.querySelector('#magic-text');
  let targetText = document.querySelector('#hobby-list .active').textContent;

  addNextLetter(magicEl, targetText);

  // Continue adding letters if the text doesn't match the target yet
  if (magicEl.textContent !== targetText) {
    setTimeout(typeOnTimer, 100); // Wait 100ms before adding next letter
  } else {
    waitToDelete(); // Once the text matches, start the deletion process
  }
}

// Wait for a specified time before starting the deletion animation.
function waitToDelete() {
  setTimeout(deleteOnTimer, 2000); // Wait 2 seconds
}

// Function: deleteOnTimer
// Purpose: Delete letters one by one from the '#magic-text' element.
function deleteOnTimer() {
  let magicEl = document.querySelector('#magic-text');
  removeLetter(magicEl);

  // Continue deleting letters if there's text remaining
  if (magicEl.textContent.length) {
    setTimeout(deleteOnTimer, 100); // Wait 100ms before deleting next letter
  } else {
    reset(); // Reset the animation once all letters are deleted
  }
}

// Basic functions to add and remove letters

// Function: addNextLetter
// Purpose: Add the next letter of the target text to the element.
function addNextLetter(element, targetText) {
  let currentText = element.textContent;
  let position = currentText.length;

  // Add the next letter if the current text is shorter than the target
  if (position < targetText.length) {
    let nextLetter = targetText[position];
    element.textContent += nextLetter;
  }
}

// Function: removeLetter
// Purpose: Remove the last letter from the element's text content.
function removeLetter(element) {
  if (element.textContent.length) {
    element.textContent = element.textContent.substring(0, element.textContent.length - 1);
  }
}

// Initialize the animation
reset();
{%endcapture %}
{% include editor3.html css=css html=html js=js startTab="js" %}
