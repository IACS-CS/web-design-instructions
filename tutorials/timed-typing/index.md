# Timed Typing Effect

We're going to work on making a "typing" widget, like the one you see on the <a href="https://www.yeshidesigns.com/" target="_blank">Yeshi Designs</a> landing page.

When we're done, here's what we'll have created:


<section class="example" style="border: 1px solid #333; padding: 2em; height: 48px">
<table class="console" >
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

</section>
<style>
  .example {
.hidden {
  /*Hide the hidden list*/
  display: none;
}
.console {
  background-color: #222;
  color: lime;
  font-family: Consolas, monospace;
  width: 100%;  
  padding: 16px;
}
.console tr {
  display: block;
}
.console td {
  display: inline-block;
}}
</style>
<script>
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
</script>

There are a few concepts we'll have to learn for this, including...

1. Writing content to a webpage with JavaScript
2. Running JavaScript on a timer to create a smooth effect.
3. Structuring a full page for accessibility and clear data with our cool "list" effect.

## Adding content with JavaScript

Our first step is knowing how to add characters with JavaScript. You may recall that you can update either
`innerHTML` or `textContent` from an element you have in JavaScript to modify its contents. We'll use `textContent` as
its better practice and safer to use (you won't have to worry about special characters in HTML that way).

If we just want to set full text, we begin with:

```javascript
element.textContent = 'Hello World';
```


Here's an example of setting text with JavaScript:
{%capture html %}
<div id="magic-text">Hello?</div>
<button onclick="setText()">Set Text!</button>
{%endcapture %}
{%capture js %}
function setText () {
  document.querySelector("#magic-text")
    .textContent = "Hello World!";
}
{%endcapture %}
{% include editor3.html html=html js=js startTab="js" %}

Next step: [adding a letter at a time!](./one-at-a-time)