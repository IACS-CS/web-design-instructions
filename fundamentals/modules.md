# Modules

- [Modules](#modules)
  - [Why Modules](#why-modules)
  - [Following the "import" chain...](#following-the-import-chain)
    - [Standard Vite Template](#standard-vite-template)
  - [Exports](#exports)
    - [Named Exports (and Imports)](#named-exports-and-imports)
    - [Default Exports (and Imports)](#default-exports-and-imports)
  - [Troubleshooting: Circular Imports](#troubleshooting-circular-imports)
    - [Problem](#problem)
    - [Solution](#solution)

Modules are a core way that programmers organize code, but a relatively new "official" feature of JavaScript, so if you google for information about "import" and "export" in JavaScript, you'll find sometimes conflicting information, based in the different systems that have existed over the past decade plus of development.

In our class, so far, we've been using Vite as a development server, which automatically takes care of handling modules, bundling, and other elements of shipping JavaScript code (you don't have to care about these details, for now!).

This help file will describe modules as they exist in the development environment we're using -- this will not work everywhere (yet), but what we are using is now standard, and my hope is that by the time you're writing grown-up applications in the world, what you learn in this class will serve you well!

## Why Modules

Even simple web applications are complicated things, with many moving parts and different elements to keep track of. Programmers tend to find it easier to split problems into pieces and solve one problem at a time. Breaking your code into different modules is a way to keep your thinking organized and make it easier to understand your code. A good design goal is to try to break your code into modules and keep each module as simple as possible.

That said, there's nothing magical about modules: you could write all the code you put in modules in one very large file and it would still work; it just is a bit harder to navigate through your code and understand it as a programmer.

## Following the "import" chain...

The basic way that modules work is that one part of a web application "imports" another. All websites begin with a simple HTML file. JavaScript is included in that file by means of a `<script>` tag, which can either contain JavaScript in it directly or contain a link to a file via a `src=` attribute. If you want to know what code is being run, start at `index.html`, which is the default "home page" for your application and look for the `<script>`. 

In all cases, the *target* of an import is a URL or a **path**, which is either the name of a file, the name of a folder (ending with a slash), or the location of the file as a combination of folders and files. Paths that start with a `/` start at the "root" of the file tree; paths that start with `./` start in the same folder as the current file, and paths with a `../` go *up* one folder.

Here are some sample paths:
- './assets/snowflake.png'  The file `snowflake.png` in the folder `assets` which is in the folder the current file is in.
- '/style.css'  The file `style.css` in the root folder of the website
- 'canvas.ts' (or './canvas.ts') The file `canvas.ts` in the same folder as I'm currently in.
- '../assets/images/ball.jpg' The file `ball.jpg` which is in the images folder in the assets folder which is stored one folder up from the current file.

### Standard Vite Template

In our standard Vite template, the standard `index.html` is set to import `main.js`

**index.html**
```html
  <script src="/main.js">
```

If you look at main.js, we typically then import a folder:

**main.js**
```javascript
  import './app/'
```

When you import a folder, you are really importing the `index` file from that folder, so the call above would direct us to look at the file `index.js` or `index.ts` in the folder `app`. It's good practice to make sure that `index` file imports everything you need.

You might then expect something like this in the app file:

**index.ts**
```typescript
import {runGame} from './game/'

document.addEventListener('load',runGame)
```

That would say to import the function called runGame from the module game, and then to run that function once the document has loaded.

## Exports

In order to import a specific object or value from a file, you need to export it.

### Named Exports (and Imports)

The simplest way to export things from a file is to add the word `export` before a variable or function declaration.

**game.js**
```typescript
export function runGame () {
  ...
}

export let player = {
  name : 'Bob',
  score : 24
}
```

You can then import those items in another file, like so:
**index.ts**
```typescript
import {runGame} from './game';
```

Or...
**playerStats.ts**
```typescript
import {player} from './game';
...
```

### Default Exports (and Imports)

Another pattern is to export a "default" value, which you can then import without any squiggly brackets. Often modules export a default *object* which then has everything that is needed for the file.

Here's an imaginary "image" module with a default export:

**images.ts**
```typescript
// Imagine there's code above that creates 
// a bunch of images and puts them in variables
// named catImage, yarnImage, mouseImage, etc.
export default {
  catImage, mouseImage, yarnImage, 
}
```

You could then import the "default" value from that file using any name you like in your other files, like so:

**game.ts**
```typescript
import Images from './images';

...
ctx.drawImage(Images.catImage,100,100,100,100);
```

Since the default export was an object, we can refer to its properties using *dot notation.* This is a handy way to code because your editor will give you good autocompletion based on the exported object -- if you forget what you named your images, all you would have to do is type `images.` and your editor would suggest all the different images you'd exported from that module in the default export.

You can name the object whatever you want when you import it, so I could rewrite the code above like so if I was so inclined:

```typescript
// I am a lazy programmer who hates typing...
import ii from './images';

ctx.drawImage(ii.catImage,100,100,100,100);
```

## Troubleshooting: Circular Imports

Generally, you want to structure all of your files so that imports flow in one direction. It can be easy to accidentally set up a system where you have a "circular import" which means File A import File B but File B imports File A.

For example, imagine a project organized like this:

**Problem Structure**
- `app/`
  - `canvas.ts`: Code to set up a canvas and draw animation. Exports canvas, width, height, etc.
  - `images.ts`: Code to provide image assets
  - `player.ts`: Code to draw a player on the screen.
  - `enemies.ts`: Code to draw enemies on the screen.
  
When the programmer goes to implement animations, the `animate` function needs to have access to the player and enemy drawing code, so `canvas.ts` would have to import `enemies.ts` and `players.ts`. But, alas, `enemies.ts` and `player.ts` need access to the canvas to draw, so they would need to import canvas.ts. We have a circular import on our hands!

### Problem

  - `enemies.ts` imports `canvas.ts` (so it can draw on the canvas)
  - `canvas.ts` imports `enemies.ts` (so it can add the enemy to the canvas animation)

### Solution
One way to solve this problem is to move the animation code into its own module, like so:

- `app` (correct structure)
  - `canvas.ts`: Code to set up a canvas. Exports canvas, width, height, etc.
  - `images.ts`: Code to provide image assets
  - `player.ts`: Code to draw a player on the screen.
  - `enemies.ts`: Code to draw enemies on the screen.
  - `animation.ts`: Imports canvas, images, player, enemies.

**Typically the correct solution to a circular import is to make your code more highly modularized**.




