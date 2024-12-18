---
order: 4
---  

# The DOM

DOM stands for "Document Object Model". It's easiest to think of this as the tree-like
structure that you see in the inspector when you look at the elements in your webpage.

In JavaScript, a common pattern is to want to begin from an element that was clicked
and then modify a nearby element. For example, a button that is in a pop-up window
might need to *close* the pop-up window.

There are two ways to navigate the DOM: by moving directly (i.e. go up one parent, then over to the right) OR by searching (i.e. move up to my nearest parent that is a <section> element)

## Moving Directly from an Element

If you know the structure of your DOM tree exactly, you can move up, down or across it using:
- `element.parentElement`
- `element.children`
- `element.nextElementSibling`
- `element.previousElementSibling`

### Moving Up to Parents

Each element has exactly one parent element, until you reach the top of the tree (the document itself). You can access the parent of any element in JavaScript by using the `parentElement` property.

```javascript
let parent = element.parentElement
```

{%capture html%}
<main>
  <h2>This example has several layers of nesting</h2>
  <div>
     <h3>This is in a div</h3>
     <label>
        Click to add parent to great grand-parent element
        <button onclick="addBorder(event)">Click!</button>
     </label>
  </div>
</main>
{% endcapture %}
{% capture js %}
function addBorder (event) {
    let button = event.target
    let label = button.parentElement;
    let div = label.parentElement;
    let main = div.parentElement;
    main.style.border = '2px solid purple';
}
{% endcapture %}
{%include editor3.html js=js html=html disableTabs="css" defaultTab="all" %}


### Moving down to children

Each element can have any number of children. The children element are accessed as a collection of elements via the `children` property. 

```javascript
let children = element.children;
for (let child of children) {
    // do something with each child
}
```

Here's a live example:
{%capture html %}
<div>
  <button onclick="addBorderToChildren(event.target.parentElement)">
    Add borders
  </button>
  <div>Child 1</div>
  <div>Child 2</div>
  <div>Child 3</div>
</div>
{%endcapture %}
{%capture js %}
  function addBorderToChildren (element) {
    for (let child of element.children) {
        child.style.border = '2px solid green';
    }
  }
{%endcapture %}
{%include editor3.html js=js html=html disableTabs="css" startTab="all" %}

### Moving across to siblings

Each element has a property `element.nextElementSibling` and `element.previousElementSibling` which contains the next/previous sibling in the DOM tree (or null if there is none).

Here's an example of those properties at work:
{%capture html %}
<div>
  
  <ul>
    <li>Item 1 <button class="next">next</button> <button class="prev">prev</button></li>
    <li>Item 2 <button class="next">next</button> <button class="prev">prev</button></li>
    <li>Item 3 <button class="next">next</button> <button class="prev">prev</button></li>
    <li>Item 4 <button class="next">next</button> <button class="prev">prev</button></li>
    <li>Item 5 <button class="next">next</button> <button class="prev">prev</button></li>
    <li>Item 6 <button class="next">next</button> <button class="prev">prev</button></li>
  </div>
  {%endcapture %}
  {%capture js %}
    for (let button of document.querySelectorAll('button.next')) {
        button.addEventListener(
            'click',
            function (event) {
                let li = event.target.parentElement;
                li.style.border = 'none';
                li.nextElementSibling.style.border = '2px solid orange';
            }
        )
    }
    for (let button of document.querySelectorAll('button.prev')) {
        button.addEventListener(
            'click',
            function (event) {
                let li = event.target.parentElement;
                li.style.border = 'none';
                li.previousElementSibling.style.border = '2px solid purple';
            }
        )
    }
{% endcapture %}

{%include editor3.html js=js html=html disableTabs="css" startTab="all" %}

## Searching From an Element

Moving directly around the DOM is nice if your HTML is simple, but often as a project develops, the structure of your HTML might change as you refine your layout, and then your JavaScript will break. You can create more robust code if you use search methods to move up and down the DOM.

### Searching Ancestors

The `closest` method on any element lets you search parents, grandparents, and so on until finding a match.

If, for example, I wanted to make code which added a "close" button which removed items from the DOM, I could define a `closeable` class and then a `closer` class. When the `closer` is clicked, I search up the tree for the nearest `closeable` and remove it.

```javascript
function close (event) {
    let elementToClose = event.target.closest('.closeable');
    elementToClose.remove()
}
function setupClosers () {
    for (let closer of document.querySelectorAll('.closeable .closer')) {
        closer.addEventListener('click',close);
    }
}
```

Here it is in action:
{%capture css %}

  .closeable {
      padding: 15px;
      border: 1px solid #ccc;
      position: relative;
  }
  .closer {
      position: absolute;
      top: 2px;
      right: 2px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      display: grid;
      place-content: center;
  }
{%endcapture %}
{%capture html %}
<ul>
  <li class="closeable">
     Item 1
     <button class="closer">&times;</button>
  </li>
  <li class="closeable">
     Item 2
     <button class="closer">&times;</button>
  </li>
  <li class="closeable">
     Item with Nested Items!
     <ul>
        <li class="closeable">
            Item 1
            <button class="closer">&times;</button>
        </li>
        <li class="closeable">
          Item 1
          <button class="closer">&times;</button>
        </li>
     </ul>
     <button class="closer">&times;</button>
  </li>
</ul>

<div class="closeable" style="background-color: black">
  <section style="background-color: purple; color: green;">
      <header style="position: relative; padding: 15px; background-color: green; color: yellow;">
         <h3>This One has a Different Structure</h3>
         <button class="closer">&times;</button>
      </header>
      <h2>This looks totally different than the other ones</h2>
  </section>
</div>
{%endcapture %}

{%capture js %}
function close (event) {
    console.log('close!')
    let elementToClose = event.target.closest('.closeable');
    elementToClose.remove()
}
for (let closer of document.querySelectorAll('.closeable .closer')) {
    console.log('Add closer!')
    closer.addEventListener('click',close);
}

{%endcapture%}

{%include editor3.html html=html js=js css=css startTab="js"%}


### Searching Children

You've already been searching children throughout this lesson, just all of our examples have started at the root of the HTML document with the `document` element.

The `querySelector` and `querySelectorAll` methods exist on each element, and will let you start your search there and then drill down.

Here's an example of a TODO List that uses querySelector to grab the next todo item inside the button's container. This code would work regardless of the structure of the list.

{%capture css%}

  .todo {
      font-weight: bold;
  }
  .done {
      text-decoration: line-through;
  }
  .highlight {
    background: yellow;
  }
{%endcapture%}
{%capture html%}
<div class="todo-container">
  <header>
    <button onclick="highlightNext(event)">Next Up</button>
    <button disabled onclick="markDone(event)">Mark Done!</button>
  </header>
  <h4>Very Important</h4>
  <ul>
    <li class="todo">Wash the dishes</li>
    <li class="todo">Empty the dishwasher</li>
    <li class="todo">Sweep the floor</li>
    <li>
       Sub-List for Making Dinner
       <ul> 
         <li class="todo">Chop Root Vegetables</li>
         <li class="todo">Chop Herbs</li>
         <li class="todo">Add salt and oil, combine all on roasting sheet</li>
         <li class="todo">Roast veggies for 40 minutes</li>
       </ul>
       <p class="todo">Feel really good about yourself!
    </li>
  </ul>
  <h4>Less Important</h4>
  <ul>
    <li class="todo">Make Guacamole</li>
    <li class="todo">Buy tortilla chips</li>
    <li class="todo">Watch the game</li> 
  </ul>
</div>

<div class="todo-container">
  <h2>This is a Totally Separate List, Just to Show Off How the
  JS Works</h2>
  <header>
    <button onclick="highlightNext(event)">Next Up</button>
    <button disabled onclick="markDone(event)">Mark Done!</button>
  </header>
  <h4>Very Important</h4>
  <ul>
    <li class="todo">Do math homework</li>
    <li class="todo">Study JavaScript</li>
    <li class="todo">Create billion dollar idea web app</li>
  </ul>
  <h4>Less Important</h4>
  <ul>
    <li class="todo">Go on a bike ride</li>
    <li class="todo">Fly a kite</li>
    <li class="todo">Netflix &amp; chill</li> 
  </ul>
</div>
{%endcapture%}
{%capture js%}
  function highlightNext (event) {
     let container = event.target.closest('.todo-container');
     let nextUp = container.querySelector('.todo');
     nextUp.classList.add('highlight');
     // change buttons...
     event.target.disabled = true;
     event.target.nextElementSibling.disabled = false;
  }
  function markDone (event) {
      let container = event.target.closest('.todo-container');
      let highlighted = container.querySelector('.todo.highlight');
      highlighted.classList.remove('todo');
      highlighted.classList.remove('highlight');
      highlighted.classList.add('done');
      event.target.disabled = true;
      event.target.previousElementSibling.disabled = false;
  }

{%endcapture%}
{%include editor3.html html=html js=js css=css startTab="js"%}

