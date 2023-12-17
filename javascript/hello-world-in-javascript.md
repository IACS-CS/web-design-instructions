---
order: 1
---

# About JavaScript

## What is JavaScript
If HTML creates the bones of a webpage and CSS provides the clothing, JavaScript is the muscle that enables us to turn static webpages into moving, interactive sites and applications.

### Hello World in JavaScript

```javascript
var divToChange = document.querySelector('#changeme');
divToChange.innerHTML = `
    <b>Hello JavaScript!</b>
    <em>Holy smokes!</em>
    <br>This content changed! My oh my!
  `;
```

{%capture html %}
<div id="changeme">
    Hello World
</div>

{%endcapture %}
{%capture js %}
  var divToChange = document.querySelector('#changeme');
  divToChange.innerHTML = `
    <b>Hello JavaScript!</b>
    <em>Holy smokes!</em>
    <br>This content changed! My oh my!
  `;
{%endcapture %}
{%capture css %}
 div { font-size: 32px }
{% endcapture %}
{% include editor3.html html=html css=css js=js startTab="all" %}

Let's go over each line of the code above.

#### var variable = value

The first thing we did was create a variable called `divToChange`
```html
var divToChange = ...
```

`divToChange` is a variable -- we could have written just about any word there and the code would work the same.
Variables make it easy for a programmer to keep track of what they're doing. In our JavaScript code, we will usually be using variables to represent parts of the webpage we want to modify.

The *single equal sign* in JavaScript, like in most programming languages, is an *assignment operator*: it *assigns* (or sets) the value on the right to the item on the left.

We also used *assignment* to set the *innerHTML* of the div in the second line above.

### document.querySelector("selector")

The second thing in our code was the code to grab an element. The method `querySelector` will look inside of any
HTML element (in this case, the whole `document`) and `return` the first matching element (or `null` if there is no matching element).

If we just wrote `document.querySelector("some-valid-selector")` on its own line, it would have no effect. Usually, we will *either* save the result in a variable, as we did above with the `let` statement, *or* we will use *dot notation* to do something write away with the result.


### Dot notation and *chaining*

In JavaScript, elements of a webpage and many other things are represented as *objects.* Objects are items which have a collection of **attributes** and **methods** that we can access using *dot notation*. For example, when we called `document.querySelector` earlier, we were invoking the `querySelector` *method* of the `document` *object*.

Then, in the next line, we changed the `innerHTML` *attribute* of the `divToChange` element, which effectively changed the contents of the div. We changed the value by using *assignment*, which is what the equal sign does in JavaScript.

Generally, we can always read `A.B` as *the B of A*, so `div.innerHTML` is read as *the innerHTML of the div*, or we could read `A.B()` as `Do B from A` so `div.addEventListener('click',clickHandler)` we could read as *addEventListener for click from div*.

Sometimes, programmers will skip saving an element in a variable and instead immediately call a method or change an attribute  of the element they're looking for.

We could rewrite the code above to save a little space like this (note: when using multiple instances of 
dot notation it's common in JavaScript to start each one on a new line, but this is entirely optional
and depends on your formatting preference):

```javascript
document
    .querySelector('#changeme')
    .innerHTML = `
        <b>Hello JavaScript!</b>
        <em>Holy smokes!</em>
        <br>This content changed! My oh my!
    `;
```

{%capture html %}
<div id="changeme">
    Hello World
</div>

{%endcapture %}
{%capture js %}
  document
    .querySelector('#changeme')
    .innerHTML = `
        <b>Hello JavaScript!</b>
        <em>Holy smokes!</em>
        <br>This content changed! My oh my!
    `;
{%endcapture %}
{%capture css %}
{% endcapture %}
{% include editor3.html html=html css=css js=js startTab="all" %}

A risk of *chaining* is that if any part of your chain fails, you will get an error that is somewhat confusing. Let's say that we made a typo in our selector above so there was no element with the selector in question. In that case, the error we'd get would happen not when the browser looked for the element, but when the browser tried to set the innerHTML property of the non-existent element. Check this out:

{%capture html %}
<div id="changeme">
    Hello World
</div>

{%endcapture %}
{%capture js %}
  document
    .querySelector('#changemewithatypo')
    .innerHTML = `
        <b>Hello JavaScript!</b>
        <em>Holy smokes!</em>
        <br>This content changed! My oh my!
    `;
{%endcapture %}
{%capture css %}
{% endcapture %}
{% include editor3.html html=html css=css js=js startTab="all" %}

The first thing you'll notice is that the code no longer works. If you look in the `console` of the inspector, you will see the following error: `Uncaught TypeError: Cannot set properties of null (setting 'innerHTML') at index.html:8`