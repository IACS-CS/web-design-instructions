---
order : 4
---

# Defining an Event Listener in Code

In addition to using the `onclick` attribute and other related attributes in you HTML, you can also add an event
listener directly in JavaScript using the `addEventListener` method of any object.

That function has the following structure:
`element.addEventListener('event-name', eventListener)`

In practice, event-name is a string with the name of any valid JavaScript event, and eventListener is a function that will be passed the event object. You can either name the function and hand it in by name, or you can define the function directly when you add the listener.

Here is a list of the many kinds of events that can be listened to using JavaScript in the browser: [mozilla docs](https://developer.mozilla.org/en-US/docs/Web/Events) or [w3schools docs](https://www.w3schools.com/jsref/dom_obj_event.asp)

I often find it useful to think of the code in this way (it can even be helpful to write line-by-line
comments as you get started so you can understand the code clearly)

```javascript

element
   .addEventListener(
      'click',                  // when the user clicks element
      function (event) {        // do this:
          let el = event.target // set el to the item they clicked
          el                    // from the element
            .classList          // grab the list of classes
            .add(               // and add...
              'selected'        // the selected class
            )
      }
    );
```

You could do the same thing above with a *named function* like this:

```javascript
element
   .addEventListener(
      'click',         // when the user clicks element
      addSelectedClass // run addSelectedClass
    );

function addSelectedClass (event) { // define the function addSelectedClass
  let el = event.target // set el to the item they clicked
  el                    // from the element
    .classList          // grab the list of classes
    .add(               // and add...
      'selected'        // the selected class
    )
}
```

This kind of thing could be useful if you wanted to add the same event listener to lots of items, as in the following example:

{%capture html %}
<h2>Click to cross off the items</h2>
<ul class="todo">
   <li>Fold the laundry</li>
   <li>Do math homework</li>
   <li>Walk the dog</li>
   <li>Learn JavaScript</li>
</ul>

{%endcapture %}
{%capture js %}
  function addSelectedClass (event) { // Define addSelectedClass
    var el = event.target; // set el to the item they clicked
    el                     // from el
      .classList           // grab the list of classes
      .add("selected");    // and add the selected class              
  } // end function definition

  // For every todo list item...
  for (let li of document.querySelectorAll('.todo li')) {
       li
           .addEventListener(
              'click',                  // when the user clicks element
              addSelectedClass          // run the addSelectedClass function
           );
  } 
{%endcapture %}
{%capture css %}

   todo li {
       font-weight: bold;
   }

  .todo li.selected {
      text-decoration: line-through;
      color: #777;
      font-weight: normal;
  }


{% endcapture %}

{% include editor3.html html=html css=css js=js startTab="js" %}

