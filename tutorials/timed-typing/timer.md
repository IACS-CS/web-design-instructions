---
order: 3
---
# Running Code on a Timer

JavaScript will let you run code either over and over again on a timer or on a delay. You can use this code for any number of cool effects, but we'll use it at first just to run code on a timer to add and remove text.

The core concept here is that we can run any **function** we like after any **delay** we set. So conceptually what we're going to do is say something like...

1. Wait a split second, then add a letter
2. Repeat step 1 until the word is complete
3. When the word is complete, start deleting the word...
4. Wait until the word is gone, then go back to the beginning.

That's a lot of steps, so we'll break it down.

Step 1:
Define our letter adder...

```javascript
let magicEl = document.querySelector('#magic-text');
let targetText = 'Hello World: I am magically typing';
function typeHelloOntimer () {
  // Add the next letter...
  addNextLetter(magicEl,targetText);
  // If our text isn't a match yet, keep adding...
  if (magicEl.textContent !== targetText) {
    setInterval(300, typeHelloOnTimer);
  }
}

magicEl.textContent = ''; // make sure we start empty
typeHelloOnTimer(); // start our magic!
```


Here's an example of setting text with JavaScript:
{%capture html %}
<div id="magic-text"></div>
<button onclick="reset()">Reset</button>
{%endcapture %}
{%capture js %}
function typeHelloOnTimer () {
  let magicEl = document.querySelector('#magic-text');
  let targetText = 'Hello World: I am magically typing';

  // Add the next letter...
  addNextLetter(magicEl,targetText);
  // If our text isn't a match yet, keep adding...
  if (magicEl.textContent !== targetText) {
    setTimeout(
      typeHelloOnTimer, // function to run
      300 // number of milliseconds to wait
    );
  }
}

function reset () {
  let magicEl = document.querySelector('#magic-text');
  magicEl.textContent = ''; // make sure we start empty
  typeHelloOnTimer(); // start our magic!
}

reset();

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

## Adding and Removing

We can use this `setTimeout` logic to do any sort of timer-based magic we want.
To get a neat effect, I'm going to go ahead and "type" my message, then leave it 
for a second, then erase it, then type it again.

To do this, I'll need to define some different "steps":

1. Wait to type 
2. Type letter
3. Wait to delete
4. Delete letters

Here goes:

{%capture html %}

<div>
  Magic Text: <span style="font-weight: bold" id="magic-text"></span>
</div>

{%endcapture %}
{%capture js %}

function waitToType () {
  // wait a full second before typing...
  setTimeout(typeHelloOnTimer,1000);
}
function waitToDelete () {
  // wait two seconds before deleting...
  setTimeout(deleteHelloOnTimer,1000);
}

function deleteHelloOnTimer () {
  let magicEl = document.querySelector('#magic-text');
  removeLetter(magicEl);
  if (magicEl.textContent.length) {
    // wait 100ms before deleting next letter
    setTimeout(deleteHelloOnTimer,100);
  } else {
    reset();
  }
}

function typeHelloOnTimer () {
  let magicEl = document.querySelector('#magic-text');
  let targetText = 'Hello World -- I am magic!';

  // Add the next letter...
  addNextLetter(magicEl,targetText);
  // If our text isn't a match yet, keep adding...
  if (magicEl.textContent !== targetText) {
    setTimeout(
      typeHelloOnTimer, // function to run
      100 // number of milliseconds to wait
    );
  } else {
    waitToDelete();
  }
}

function reset () {
  let magicEl = document.querySelector('#magic-text');
  magicEl.textContent = ''; // make sure we start empty
  waitToType(); // start our magic!
}

reset();

function addNextLetter (element, targetText) {
  let currentText = element.textContent;
  let position = currentText.length;
  // Select the correct letter to add...
  if (position < targetText.length) {
    let nextLetter = targetText[position];  
    element.textContent += nextLetter;
  }
}

function removeLetter (element) {
  if (element.textContent.length) {
    element.textContent = element.textContent.substring(
        0,
        element.textContent.length - 1);
  }
}
{%endcapture %}
{% include editor3.html html=html js=js startTab="js" %}
