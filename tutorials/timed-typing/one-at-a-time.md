---
order: 2
---
# Adding One Letter at a Time

If we want to add one letter at a time, our life gets a little
bit more complicated. We'll need a few handy JavaScript methods that let us look at:

1. What is the current text?
2. What is the text we *want* to show
3. What letter do we need to add?

Assuming we know the target, we could define a function like this:

```javascript
function addNextLetter (element, targetText) {
  let currentText = element.textContent;
  let position = currentText.length;
  // Select the correct letter to add...
  let nextLetter = targetText[position];  
  element.textContent += nextLetter;  
}
```

This code relies on the fact that JavaScript uses something called 0-based indexing to refer to items from a sequence. So, for example, if we have the text `"hello world"` and we
ask for the item at index `0`, we will get the *first* letter, which is `"h"`. Since we are *adding* text, we can just ask "how long is our text so far?" and then use that as
the index, so when the text is 0 characters long, it will add
the "h" (index 0), and when it's one character long, it will add the "e" (index 1) and so forth.


Here's an example of setting text with JavaScript:
{%capture html %}
<div id="magic-text">Hel</div>
<button onclick="addLetterToHello()">Add a letter</button>
{%endcapture %}
{%capture js %}
function addLetterToHello () {
  let element = document.querySelector("#magic-text");
  addNextLetter(element,"Hello World! This text is magical!");    
}

function addNextLetter (element, targetText) {
  let currentText = element.textContent;
  let position = currentText.length;
  // Select the correct letter to add...
  if (position < targetText.length) {
    let nextLetter = targetText[position];  
    element.textContent += nextLetter;
  }
}
{%endcapture %}
{% include editor3.html html=html js=js startTab="js" %}

We can also remove a letter in very similar fashion, but we'll need to use JavaScript's `substring` method to take
a portion of the string, like this...

```javascript
function removeLetter (element) {
  if (element.textContent.length) {
    element.textContent = element.textContent.substring(
        0,
        element.textContent.length - 1);
  }
}
```

{%capture html %}
<div><span id="magic-text">Hel</span></div>
<button onclick="addLetterToHello()">Add a letter</button>
<button onclick="removeLetterFromHello()">Remove a letter</button>
{%endcapture %}
{%capture js %}
function addLetterToHello () {
  let element = document.querySelector("#magic-text");
  addNextLetter(element,"Hello World! This text is magical!");
}

function removeLetterFromHello () {
  let element = document.querySelector("#magic-text");
  removeLetter(element);
}


function removeLetter (element) {
  if (element.textContent.length) {
    element.textContent = element.textContent.substring(
        0,
        element.textContent.length - 1);
  }
}

function addNextLetter (element, targetText) {
  let currentText = element.textContent;
  let position = currentText.length;
  // Select the correct letter to add...
  if (position < targetText.length) {
    let nextLetter = targetText[position];  
    element.textContent += nextLetter;
  }
}
{%endcapture %}
{% include editor3.html html=html js=js startTab="js" %}
