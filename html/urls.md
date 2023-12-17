--- 
order : 5
---

# URLs

On the page before, we used a URL for a src attribute on an image. It looked like this:

```html
<img 
   src="https://www.w3schools.com/html/img_girl.jpg"
>
```

URL stands for "Universal Resource Locator." The URL is what you see in the URL bar of your web browser that shows you where a webpage is.

Every image you see on a webpage, the code for every webpage you load, and every file you download comes from a URL. The URL is how one computer knows how to *download* a file from another. The *browser* on your phone or laptop has to *download* all of the files that make up a webpage via URL in order to show the webpage.

On a complicated website, such as Google Docs or an Amazon search, your browser downloads hundreds of different files (code and images) that it uses to create a working website. Each of those files has a unique URL.

**Full URLs**

The *full URL* is what you see in your browser's URL bar and it directs users to a resource *anywhere in the world*. The full URL consists of the following parts which can be understood as directions for your browser:

```
https://www.w3schools.com/html/img_girl.jpg
```
* **protocol** ```https://``` *- use a secure (encrypted) hypertext transfer protocol*
* **domain** ```www.w3schools.com``` * - go to the server owned by w3schools.com*
* **path** ```/html/``` *- look in the folder* **html** *on that server*
* **filename** ```img_girl.jpg``` *- download the file called * **img_girl.jpg**

If you leave off the filename, servers will look for the file called
**index.html** and serve that, which is why the default name of an HTML file when you start a new project on a repl.it is ```index.html```.

A link with a full URL looks like this:
```html
<a href="https://www.w3schools.com/html/img_girl.jpg">
```

**Relative URLs**

If you leave out the protocol and the domain, the web browser will look on the same server as the page that you are serving. So typically a web server will refer to files via *relative URL* which makes it so that if you move the files of a webpage somewhere new, the links will all still work.

A link with a relative URL looks like this (look in the same folder as this file for the file called img_girl.jpg):
```html
<a href="img_girl.jpg">
```

Or, if you are looking in a different folder on the same server, it might look like this (from the root level, look in the folder ```html``` for the file ```img_girl.jpg```):
```html
<a href="/html/img_girl.jpg">
```


If you are creating links between multiple pages or creating images for a webpage, it is best to upload them to your webserver and refer to them via relative URL so that if your webpage moves your links will all still work.

