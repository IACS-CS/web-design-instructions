# Keyboard Events

Often times you'll want to respond to keyboard events. Keyboard events can only be listened for when the element you select is in focus -- for this reason, it's often worthwhile to select a top level element, such as the *window*, to listen for keyboard events on.

The main keyboard events you can listen for are:

- `keypress` One keypress
- `keydown` When the key is pushed down
- `keyup`  When the key comes up.

Here's a quick live example to show you key events in action:

{% include local.html page="keys.html" %}

You have to listen for *all* key events and then write if statements to act on the ones you care about: you can't just listen for a certain key.

Here's some example code...

```javascript

window.addEventListener(
  'keydown',
  function (event) {
    if (event.key == 'l') {
      goLeft();
    } else if (event.key=='j') {
      goRight();
    }
  }
)
```

Note: if we alternate keys, we can use an or bar, like this:


```javascript

window.addEventListener(
  'keydown',
  function (event) {
    if (event.key == 'l' || event.key=='a') {
      goLeft();
    } else if (event.key=='j' || event.key=='d') {
      goRight();
    }
  }
)
```

Another good technique is to make a map of key commands, like this:

```javascript

let keyCommands = {
  a : goLeft,
  d : goRight,
  w : goUp,
  s : goDown
}
window.addEventListener(
  'keydown',
  function (event) {
    if (keyCommands[event.key]) {
      keyCommands[event.key]()
    }
  }
)
```

