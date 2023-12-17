---
order : 3 
---

# Looping through Elements

Sometimes, we will get a *collection* of elements, either by using 
`querySelectorAll` or by using an attribute like the `children`
attribute.

In those cases, we usually want to *iterate over* the elements, running some code for each item.

The easiest way to do that is using the `for... of...` construction in JavaScript, which lets us
run code for each item that is in a collection.

The structure of a simple loop over items in JavaScript is as follows:
```javascript
for (let singularVariableOfMyChoosing of collectionOfItems) {
    // This code runs once per item in collection
}
```

In practice, it would often look like this:

```javascript
for (let li of document.querySelector('li.magic')) {
    addMagic(li);
}
```

Or it might look like this:
```javascript
for (let child of document.querySelector('#magicParent').children) {
    addMagic(child);
}
```

Here is some real code using this structure:

{%capture html %}
<div id="magic">
   <div style="background-color:green;color:white;">
     I am a magic page click for the next page.
   </div>
   <div style="background-color:orange;color:white;">
     I am a magic page #2. This is pretty cool!
   </div>
   <div style="background-color:purple;color:white;">
     I am the third magic page. After me there will be nothing more!
   </div>
 </div>
 {%endcapture %}
 {%capture css %}
 #magic > div {
  width: 200px;
  height: 200px;
  display: grid;
  place-content: center;
  padding: 1em;
 }
 {%endcapture %}
 {%capture js %}
   for (let child of document.querySelector('#magic').children) {
       child.style.display = 'none';
       child.addEventListener(
          'click',
          function (event) {
              event.target.style.display = 'none';
              event.target.nextElementSibling.style.display = 'block';
          }
       )
   }
   // Make the first one display
   document.querySelector('#magic > *')
     .style.display = 'block';
     
{%endcapture %}
{%include editor3.html js=js html=html css=css startTab="all"%}