## Step 2: Add some JavaScript to the links!

By default, links with a hashtag will jump to the anchor
which is why this page works without any javascript. But our goal is to hide the content we're not using and
show only the content we are looking at at a given moment.

We're going to add a function to each link which grabs the section in question and adds the active class.

Put this code into script.js:

```javascript
function onTabSelected (event) {
  /* Remove currently active classes */
  // From the document
  document
    // Grab the currently active link
    .querySelector('a.active')
    // Get its list of classes
    .classList
    // Remove active
    .remove('active');
  document
    // Grab the currently active section
    .querySelector('section.active')
    // Get its list of classes
    .classList
    // Remove active
    .remove('active');

  // Get the element that was clicked  
  let linkElement = event.target;
  
  linkElement.classList.add('active');
  // Grab the id from the HREF attribute of
  // the link that was clicked.  
  let id = event.target.getAttribute('href');  
  // Grab the element pointed to by the link, and add
  // active to its classList
  document.querySelector(id)
    .classList.add('active');

}
```

Now in our HTML, we have to add click handlers to the
link elements so they run this code when they are clicked.

This time, we're going to add the argument `event` inside the parentheses in our onclick function. This will allow us to access the JavaScript clicking event, which will tell us important informatoin like *which* link the user clicked. It will also let us override the default browser action, which is to jump to the link.

```html
<ul class="tabs">
		<li><a href="#section1" class="active" onclick="onTabSelected(event)">
				Section 1
			</a>
		</li>
		<li>
			<a href="#section2"  onclick="onTabSelected(event)">
				Section 2
			</a>
		</li>
		<li>
			<a href="#section3"  onclick="onTabSelected(event)">
				Section 3
			</a>
		</li>
	</ul>
  ```

  ## Step 3: Make it usable

  When we add interactivity to a page, we want to make sure there are clear "affordances." That means, we want to make it clear to a user how to interact with the page.

  One way to do that is to add CSS for when the mouse 
  hovers over an item.

  ```
  .tabs a:hover {
    background-color: #cccccc;
  }
  ```
  
  ## Step 3: Make it beautiful

  For some finishing touches, we can use the 
  transition property in CSS, which lets us 
  add transitions to any property. Transitions
  are just animations from one numeric value to
  another, and they can apply to anything we put
  a number or a color on.

  ```css
/* Make the hover effect animate */
.tabs a {
  transition: all 300ms;
}

/* Make active/hovered tabs a little bigger 
We use transform instead of width/height so
the browser does not have to re-flow the rest of
the content.
*/

.tabs a:hover,.tabs a.active {
  transform : scale(106%,106%)translateY(-3%);
}
.tabs a.active {
  background-color: black;
  color: white;
}
```

Finally, instead of the `display: none`, `display : block` transition we initially did on our sections, we can improve it so that new elements fade in and the 
old ones drop away.

First, we'll need to absolute position the elements
on top of one another.

 ```css
 /* Make main the reference point for section
 absolute positioning */
 main {
   position: relative;
 }
 /* Absolute position all of the sections on top
 of one another */
 main > section {
   position: absolute;
   top: 0;
   left: 0;
 }
 main > section.active {
  /* Let the active section be positioned normally
  so the tabbed content actually takes up vertical
  space */
   position: relative;
 }
 ```

 Once we have the elements on top of each other, we can
 set up a nice cross-fade transition or whatever
 else we dream up.

 ```css
 /* Make all sections invisible by default */
 section {
   opacity: 0; /* see through */   
   /* This makes it so we don't absorb mouse events
   by mistake -- a good practice is to always add
   pointer-events: none if you are setting opacity
   to 0 */
   pointer-events: none;
   transition: all 500ms;
 }
 section.active {
   opacity : 1;
   pointer-events: all; 
 }

When all is said and done, we have a page like this:

{% include codepen.html id="WNPBJxj" tabs="css,js,html" %}