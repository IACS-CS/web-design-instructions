# Timed Typing Effect

We're going to work on making a "typing" widget, like the one you see on the <a href="https://www.yeshidesigns.com/" target="_blank">Yeshi Designs</a> landing page.

There are a few concepts we'll have to learn for this, including...

1. Writing content to a webpage with JavaScript
2. Running JavaScript on a timer to create a smooth effect.
3. Structuring a full page for accessibility and clear data with our cool "list" effect.

## Adding content with JavaScript

Our first step is knowing how to add characters with JavaScript. You may recall that you can update either
`innerHTML` or `textContent` from an element you have in JavaScript to modify its contents. We'll use `textContent` as
its better practice and safer to use (you won't have to worry about special characters in HTML that way).

If we just want to set full text, we begin with:

```javascript
element.textContent = 'Hello World';
```


Here's an example of setting text with JavaScript:
{%capture html %}
<div id="magic-text">Hello?</div>
<button onclick="setText()">Set Text!</button>
{%endcapture %}
{%capture js %}
function setText () {
  document.querySelector("#magic-text")
    .textContent = "Hello World!";
}
{%endcapture %}
{% include editor3.html html=html js=js startTab="js" %}

Next step: [adding a letter at a time!](./one-at-a-time)