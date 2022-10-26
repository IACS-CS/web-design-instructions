# Making a Player: Our First Object

So far, we've created functions and variables, and we've *used* objects, but you've likely never created an object before in JavaScript. We're going to create an object for our player using the simplest method possible (there are several ways to do this): the object literal.

An object literal looks lke this:

```javascript
let newObject = {
  property : "value",
  otherProperty : "otherValue",
  method (parameters) {
    // function body
  },
  otherMethod (otherParameter) {
    // function body
  }
}
```

Properties are like variables that are *contained* in the object and *methods* are like functions that are contained in the object.


