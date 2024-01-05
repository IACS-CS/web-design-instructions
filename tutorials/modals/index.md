---
order: 1
---
# Creating and Managing Modal Dialogs

In this lesson, we will create a simple modal dialog using vanilla JavaScript, focusing on using CSS selectors effectively. A "modal" in user interface design refers to a user interface where you *stop* everything else the user is doing and make them interact with your interface before continuing with the webpage. Pop-up ads sometimes use this pattern in an annoying way, but it can also be used legitimately for things like login windows, "lightboxes" (highlighting one piece of media) or other elements where you want the user to interact with a single element before continuing on with the rest of the page.

## Step 1: HTML Structure for the Modal

First, let's set up our HTML. There will be two parts of the "modal" -- the dialog itself, which you typically want near the top level of your HTML to avoid problems with nested layers, and then the "trigger" that the user interacts with to open the dialog. Both of these can be styled later, but to begin with, let's link them together. I'll use a common pattern where I use an internal link for my element  -- that way in a non-javascript environment, my "modal" will still work.

Here's a bare-bones example with the three elements we'll need: an open trigger, a dialog, and a close button.

```html

<a href="#my-modal" class="modal-trigger">Open Modal</a>

...


<div id="my-modal" class="modal-container">
  <div class="dialog">
    Modal content here!
    <button class="modal-close">&times;</button>
  </div>
</div>
```

Here's some bare-bones CSS to hide our modal dialog initially and to style our link like a simple button:

```css
.modal-container {
  display: none; /* Initially hide the modal */
  position: fixed; /* Fixed position to stay in place */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Semi-transparent background */
  z-index: 1000; /* Ensure it's on top */
}

.dialog {
  background-color: white;
  width: 50%;
  margin: 10% auto; /* Center the dialog */
  padding: 20px;
  border-radius: 5px;
}

.modal-trigger {
  display: inline-block;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal-close {
  float: right;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
}
```

## Step 2: JS to Open and Close

Next, we'll need to add JavaScript to do the following:

1. Find all links in our page with the class "modal-trigger"
2. Attach a "click handler" to them to run JavaScript
3. When the user clicks, find the associated modal dialog.
4. Trigger an "active" class on the modal dialog.

Here's the basics:

```js
// Attach click handlers to all modal triggers
for (const trigger of document.querySelectorAll('.modal-trigger')) {
  trigger.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    const modalId = this.getAttribute('href'); // Get the href attribute value as modal ID
    const modal = document.querySelector(modalId); // Select the modal using the ID
    modal.style.display = 'block'; // Show the modal
  });
}

// Attach click handlers to all close buttons in modals
for (const closeButton of document.querySelectorAll('.modal-close')) {
  closeButton.addEventListener('click', function() {
    this.closest('.modal-container').style.display = 'none'; // Close the modal
  });
}

// Optional: Close modal on clicking outside of it
window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal-container')) {
    event.target.style.display = 'none';
  }
});
```

Finally, here's our "bare-bones" dialog working all together:

{%capture html %}
<a href="#my-modal" class="modal-trigger">Open Modal</a>

<div id="my-modal" class="modal-container">
  <div class="dialog">
    Modal content here!
    <button class="modal-close">&times;</button>
  </div>
</div>
{%endcapture %}
{%capture css %}
.modal-container {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
}

.dialog {
  background-color: white;
  width: 50%;
  margin: 10% auto;
  padding: 20px;
  border-radius: 5px;
}

.modal-trigger {
  display: inline-block;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal-close {
  float: right;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
}
{%endcapture %}
{%capture js %}
for (const trigger of document.querySelectorAll('.modal-trigger')) {
  trigger.addEventListener('click', function(event) {
    event.preventDefault();
    const modalId = this.getAttribute('href');
    const modal = document.querySelector(modalId);
    modal.style.display = 'block';
  });
}

for (const closeButton of document.querySelectorAll('.modal-close')) {
  closeButton.addEventListener('click', function() {
    this.closest('.modal-container').style.display = 'none';
  });
}

window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal-container')) {
    event.target.style.display = 'none';
  }
});
{%endcapture %}
{% include editor3.html css=css html=html js=js startTab="js" %}
