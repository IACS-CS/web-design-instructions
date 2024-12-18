# Image Gallery w/ Lightbox

Absolutely! Here's the revised version of the lightbox gallery tutorial with your preferences:

## Lightbox Gallery with Vanilla JS (Updated)

This tutorial will guide you through building a simple lightbox gallery for your portfolio website using vanilla JavaScript, utilizing `document.querySelector` and `for-of` loops for element collections.

**Prerequisites:**

* Basic HTML and CSS knowledge (including selectors)
* Understanding of DOM manipulation in JavaScript (e.g., `querySelector`, `addEventListener`, `for-of` loops)

**Let's get started!**

**1. HTML Structure:**

Create a section for your gallery containing individual image elements:

```html
<section class="gallery">
  <img src="image1.jpg" alt="Image 1">
  <img src="image2.jpg" alt="Image 2">
  <img src="image3.jpg" alt="Image 3">
  ...
</section>

<div id="lightbox" style="display: none;">
  <img id="lightbox-image" src="" alt="">
  <button id="lightbox-close">Close</button>
</div>
```

**2. CSS Styling:**

Style your gallery section and images as desired. You can add a border, spacing, and adjust image size.

```css
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 auto;
}

.gallery img {
  width: 200px;
  height: 150px;
  cursor: pointer;
}

#lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
```

**3. JavaScript Script:**

1. **Access Lightbox and Image Elements:**

Instead of using `document.getElementById`, we can use `document.querySelector`:

```javascript
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const closeButton = document.querySelector('#lightbox-close');
```

2. **Add Event Listeners to Gallery Images:**

Loop through each image in the gallery using a `for-of` loop and add a click event listener:

```javascript
var galleryImages = document.querySelectorAll('.gallery img');

for (const image of galleryImages) {
  image.addEventListener('click', openLightbox);
}
```

3. **Open Lightbox Function:**

Similar to the previous version, this function sets the lightbox image source and displays it:

```javascript
function openLightbox(event) {
  const clickedImage = event.target;
  lightboxImage.src = clickedImage.src;
  lightbox.classList.add('visible')
  lightbox.classList.remove('hidden')
}
```

4. **Close Lightbox Function:**

This function hides the lightbox and clears the image source:

```javascript
closeButton.addEventListener('click', closeLightbox);

function closeLightbox() {
  lightbox.classList.remove('visible')
  lightbox.classList.add('hidden')
  lightboxImage.src = '';
}
```

**Congratulations!** You've successfully built a lightbox gallery using `document.querySelector` and `for-of` loops. Remember to replace the placeholder image paths with your own!

## Complete Working Example
Check out the working example below -- to get this all working in my code editor, I've inlined
the style and script elements which you would have in separate `script.js` and `style.css` files
in a real project.


{%capture css %}
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 auto;
  justify-content: center;
}

.gallery img {
  width: 200px;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
}

#lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: grid;
  place-content: center; 
  transition: opacity 300ms;     
}
#lightbox.visible {
  visibility: visible;
  opacity: 1;
  pointer-events: all;
}
#lightbox.hidden {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
}

#lightbox img {
  max-width: 80vw; /* no wider than 80% of the screen */
  max-height: 80vh; /* no taller than 80% of the screen */
  object-fit: contain; /* Keep aspect ratio */
}

#lightbox-close {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
  position: fixed;
  right: 16px;
  top: 16px;
}
{%endcapture %}
{%capture html %}
<section class="gallery">   
    <img src="https://picsum.photos/800/1200?random=1">
    <img src="https://picsum.photos/1200/800?random=2">
    <img src="https://picsum.photos/800/800?random=3">
    <img src="https://picsum.photos/800/1200?random=4">
    <img src="https://picsum.photos/1200/800?random=5">
    <img src="https://picsum.photos/800/800?random=6">
    <img src="https://picsum.photos/800/1200?random=7">
    <img src="https://picsum.photos/1200/800?random=8">
    <img src="https://picsum.photos/800/800?random=9">
    <img src="https://picsum.photos/800/1200?random=10">
    <img src="https://picsum.photos/1200/800?random=11">
    <img src="https://picsum.photos/800/800?random=12">
    <img src="https://picsum.photos/800/1200?random=13">
    <img src="https://picsum.photos/1200/800?random=14">
    <img src="https://picsum.photos/800/800?random=15">    
</section>

<div id="lightbox" class="hidden">
  <img id="lightbox-image" src="" alt="">
  <button id="lightbox-close">Close</button>
</div>
{%endcapture%}
{%capture js %}
var galleryImages = document.querySelectorAll('.gallery img');
var lightbox = document.querySelector('#lightbox');
var lightboxImage = document.querySelector('#lightbox-image');
var closeButton = document.querySelector('#lightbox-close');

for (let image of galleryImages) {
  image.addEventListener('click', openLightbox);
}

function openLightbox(event) {
  const clickedImage = event.target;    
  lightboxImage.src = clickedImage.src;
  lightbox.classList.add('visible');
  lightbox.classList.remove('hidden');
}

closeButton.addEventListener('click', closeLightbox);

function closeLightbox() {
  lightbox.classList.add('hidden');
  lightbox.classList.remove('visible');
  lightboxImage.src = '';
}


{% endcapture %}
{% include editor3.html html=html js=js css=css startTab="js" height="600px" %}

## Credits
This tutorial was generated with the help of Google Bard -- thanks Large Language Model!
