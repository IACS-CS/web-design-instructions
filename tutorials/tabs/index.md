# Instructions  

This tutorial is going to walk you through creating a simple tabbed interface.

Our goal is to create a tabbed interface for switching between the three sections on this webpage.

We are following the practice of *progressive enhancement*, meaning that without any JavaScript or CSS, our page will still work: the tabs are just links that bring you to each section of the page.

Once we get our code working well, though, this whole thing will be pretty snazzy.

Before we do anything, we have a plain HTML page with local links, which looks like this:

{% include codepen.html id="yLZWjJp" %}

To make this work, we need links that point to IDs like...

```html

<a href="#section1">Section 1</a>
<a href="#section2">Sectoin 2</a>
...
<section id="section1>...</section>
<section id="section2>...</section>
```

In order to prepare for formatting, we'll do a bit more and wrap those links and out tab content in a container, like this...

```html
<div class="tab-container">
    <ul class="tabs">
        <li><a href="#section1">...</a></li>
        ...
    </ul>
    <main class="tab-content">
        <section id="section1">...</section>
        ...
    </main>
</div>
```

Next up: [adding a little style!](./1-style.md)

