---
order: 2
---

## Events

Most JavaScript runs in response to "events" on the webpage. Events can include things like the user moving the mouse, scrolling the page or clicking part of the page. JavaScript can also respond to non-user-initiated events like an transition or animation in CSS completing, as well as to events like an image or other piece of data loading over the network.

### Inline Event Handlers

The easiest way to write an event handler is to simply put it in your HTML. HTML elements include special attributes starting with the word **on** which give the browser code to run when an event happens. When that code is run, there is an **event** object, which contains information about the event. The **event** object includes the **target** of the event (the HTML element that was clicked), as well as other informaton.

Here are a couple of examples of inline event handlers:

{%capture code%}
<html>
  <div onclick="event.target.innerText = 'Wow I changed'">
     Click me to see me change
  </div>
</html>
{%endcapture%}

{%include codeeditor.html content=code %}



{%capture css %}
.container {
    position: relative;
    width: 100%;
    height: 100px;
    background-color: #002;
    color: #eee;
}
.marker {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: green;
    border-radius: 50%;
    bottom: 0;
}
{%endcapture %}
{%capture html %}
<div 
  class="container" 
  onmousemove="event.target.querySelector('.marker').style.left=event.clientX+'px'"
  >
  <div class="marker"></div>
  Move the mouse over me to move the circle
</div>
{% endcapture %}
{%include editor3.html html=html css=css startTab="html" %}


### Functions

Writing a lot of JavaScript in the middle of your HTML is probably a bad idea -- it gets hard to read and it's hard to troubleshoot long inline handlers, so most programmers create a *function* to handle events.

Here's the same code above written with a function:


{%capture html %}
<div 
  class="container" 
  onmousemove="handleMove(event)"
  >
    <div class="marker"></div>
    Move the mouse over me to move the circle
</div>
{%endcapture %}
{%capture js %}  
  function handleMove (event) {
    var marker = event.target.querySelector('.marker');      
    marker.style.left=event.clientX+'px';
    marker.style.top = event.clientY+'px';      
  }
{%endcapture%}
 {%include editor3.html html=html css=css js=js startTab="all" %} 


### What is a Function?

We can think of a function as a block of code that can all run at once. Usually in JavaScript, we *call* a function (i.e. run that block of code) in response to an event.

So, there are two parts to using a function. 

#### Defining a Function

To define a function, we use the `function` keyword, parentheses naming the parameters the function expects, and then curly braces containing the code to run when we call the function.

```javascript
function doSomethingCool (parameter) {
    // Lines of code
    // that will run
    // at a later time

}
```


#### Calling a function

To call a functon we just use the name of the function followed by parentheses containing any parameters we need to *pass* to our function.

{%capture html %}
<main>
<button 
  style="transition: transform 1s" 
  onclick="makeElementGrow(event)">
  <!-- The line above *calls* the function
  makeElementGrow and *passes* it the click 
  event -->
 Grow Me
</button>
</main>
{%endcapture %}
{%capture js %}

  function makeElementGrow (e) {
     // When I am called, set the variable e to whatever
     // argument I am passed (I expect an event object)
     
     e.target // from the element that was clicked
      .style // grab the style object
      .transform = 'scale(5.0,5.0)'; // and set the transform property
  }
{%endcapture %}
{%capture css %}
  main {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
 {%endcapture %}
{%include editor3.html js=js html=html css=css %}

