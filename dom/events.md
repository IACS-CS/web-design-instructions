# DOM Events

Every DOM element can listen for [events](https://www.w3schools.com/jsref/dom_obj_event.asp) and run code when they happen. Events allow you to run code in response to user actions such as typing when an element is in focus, scrolling the page, or moving or clicking the mouse, but also for other actions the browser completes such as loading an image used on a webpage or completing an animation.

In all cases, the basic principle is the same:

```typescript
element.addEventListener(
  'name-of-event',
  function (event) {
    // code here runs when event happens!
  }
)
```

## If Code were Cooking...

Let's imagine you're baking a pie and you set a timer. You could describe your plan using JavaScript syntax as follows:

```javascript
timer.addEventListener(
  'ring',
  function (event) {
    human.removeFromOven(pie);
  }
);
```

Sometimes, you might set up a chain of events. Let's say you need to wait for the oven to pre-heat before you bake your pie. Then you might imagine that chain of events as follows:

```javascript
oven.setTemperature(350);
oven.addEventListener(
  'ready',
  function (event) {
    if (event.temperature==350) {
      human.addToOven(pie);      
      timer.addEventListener(
        'ring',
        function (ev) {
          human.removeFromOven(pie);
          oven.turnOff();
        }
      );
      timer.setTimer(60);
    } else {
      throw Exception('Incorrect temperature?!?!');
    }
  }
)
```

## A Simple Click Handler

Very often, we just want to make elements on the page clickable. In those cases, we simply need to listen for the "click" event (the browser will also fire this event if a user selects the element and activates it with the keyboard).

```javascript
let clickableDiv = document.createElement('div');
clickableDiv.innerText = 'Click me!';

clickableDiv.addEventListener(
  "click",
  function () {
    window.alert("Wow you clicked something!");
  }
)

document.body.appendChild(clickableDiv);
```

## An Event Handler Using the Event Object

In the code above, I did not bother specifying my event listener gets an event argument because I don't need to know any details about the click in order to respond to the click.

In other cases, we *do* care about details from the event, and then we need the event listener.

For example, imagine I wanted to make an element's position depend on where the mouse was -- I could
write code like this, making use of `event.target` (which points to the element that was clicked)
and making use of `event.clientX` and `event.clientY` (which tell me where the element is on the page).

```javascript
let stickyDiv = document.createElement('div');
stickyDiv.innerText = 'I stick to the mouse until you click!';
stickyDiv.style.position = 'fixed';
stickyDiv.addEventListener(
  'mousemove',
  function (event) {
    event.target.style.top = `${event.clientX}px`
    event.target.style.left = `${event.clientY}px`
  }
);
document.body.appendChild(stickyDiv);
```

## Adding and removing listeners

If I want to be able to later *remove* a listener I've added, I need to actually use a *named function* so that I can refer to it later.

In this case, I'll use three steps:

1. Define a function
1. Call `element.addEventListener("event-name",functionName);
1. Call `element.removeEventListener("event-name",functionName);
   
With my "sticky" div above, I could do something like this:

```typescript
function stickToMouse (event) {  
  event.target.style.left = `${event.clientX}px`
  event.target.style.top = `${event.clientY}px`;
}

function startSticking (event) {
  event.target.addEventListener("mousemove",stickToMouse);
  event.target.removeEventListener("click",startSticking);
  event.target.addEventListener("click",finishSticking);
}

function finishSticking (event) {
  event.target.removeEventListener("mousemove",stickToMouse);
  event.target.removeEventListener("click",finishSticking);  
  event.target.addEventListener("click",startSticking);  
}

div.addEventListener(
  "click",
  startSticking
);
div.innerText = "click to move!"
```

Here it is in action:

{% include local.html page="sticky.html" %}