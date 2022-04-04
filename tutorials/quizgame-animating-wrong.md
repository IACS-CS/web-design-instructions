# Quiz Game: Animating Wrong Answers

Note, this tutorial assumes you've already completed the steps in [the quizgame tutorial](./quizgame.md).

- [Quiz Game: Animating Wrong Answers](#quiz-game-animating-wrong-answers)
  - [CSS Animations](#css-animations)
  - [Step 1: Adding and Removing Classes with JavaScript](#step-1-adding-and-removing-classes-with-javascript)
  - [Step 2: CSS Transformations](#step-2-css-transformations)
  - [Getting Fancier: Adding elements to our animation](#getting-fancier-adding-elements-to-our-animation)
  - [Using JavaScript to randomize the style a bit!](#using-javascript-to-randomize-the-style-a-bit)

[Full example here](https://replit.com/@ThomasHinkle/QuizGame-Full#quiz.ts)
## CSS Animations

There are various techniques for animation in JavaScript. For *this* tutorial, we'll use CSS, or your style.css, to handle your animations. We'll use the *simplest* version of CSS animations, which is the `transition` which lets you automatically change any property smoothly between one value and another.

The basic concept is this:
1. Use JavaScript to add or remove a `class` to an element in your document.
1. Use CSS rules to change the appearance based on the presence or absence of the *class* in question.
1. Use CSS *transitions* to change between styles.
2. Adding extra elements to make it fancier!

## Step 1: Adding and Removing Classes with JavaScript

It can be difficult to troubleshoot problems with CSS, so to start with, I'm going to do something very obvious and simply make the color of wrong answers change to red, which is very easy to notice.

I'll create a rule for the "wrong" class in my CSS like this:

*feedback.css*

```css
.wrong {
  color: red;
}
```

Next up, I'm going to create a function to mark an answer wrong, like this:

*feedback.ts*
```typescript
import './feedback.css';

export function markWrong (button : HTMLButtonElement) {
  button.classList.add('wrong');
}
```

Now I'll go to where I had written the placeholder `window.alert('Wrong answer!')` in my code and I'll replace it with my new `markWrong` function, like this:

*quizDisplay.ts*

```typescript
import {markWrong} from './feedback';

function makeButton (a : string, question: Question) {
  let button = document.createElement('button');
  button.innerText = a;
  button.addEventListener(
    "click",
    function () {
      if (a==question.answer) {
        // handle right answer
        window.alert('Correct!');
      } else {
        // handle wrong answer
        markWrong(button);
      }
    }
  );
  return button;
}
```

Now, if you run your game and click on the wrong answer, the text of the wrong answer should turn red.

## Step 2: CSS Transformations

There are many effects you can use to change the layout of CSS. I'm going to make wrong answers shrink in place, turn askew, and change colors.

To do so, I'll change my simple `color: red` rule to use the `transform` property, which allows us to do 2 and 3 dimensional transformations of elements efficiently. I'm also going to change the selector so that my new rules apply for all states of the button (this way the button appears "inactive" when the user hovers over it).

I can also add rules for transition and transition-delay to decide how long to animate the transition between property values and how long to wait before making the transition.

_feedback.css_

```css

.wrong,.wrong:active,.wrong:hover {
  transform: scale(0.7)rotate(5deg);
  color: #232323;
  background-color: #efefef;
  /* Take a half second to do the transition */
  transition: all 500ms;
  /* Wait a half second to transition, as if
  we're "thinking" about the answer */
  transition-delay: 500ms;
}

```

## Getting Fancier: Adding elements to our animation

There are lots of ways to get fancier with CSS and HTML. I'm going to create an animated "red X" effect over my wrong answers by using elements and borders.

Here's how the basic idea will work:

{%include local.html page="crossout.html"%}

To implement it, I'll go ahead and add two empty "divs" for my crossouts using JavaScript, then I'll add CSS to animate them.

*feedback.ts*

```typescript

export function markWrong (button : HTMLButtonElement) {  
  button.innerHTML += `
    <div class="x x-top"></div>
    <div class="x x-bottom"></div>    
  `
  button.classList.add('wrong');
}
```

In this case, because I don't have an existing element changing but rather a new element I want animated when it appears, I'll have to use the CSS `animation` property to indicate that I want an animation when the element first appears.

To create CSS animations, I use the special `@keyframes` command which lets me name a new animation, which I can define by making a set of rules to execute at different percentages of the animation playback. In my case, I'm going to play my animation for 1 second -- the first half of which I want nothing to happen, and the second half of which I want the X to be drawn.

I can make a cool little "elastic" effect by making the animation go out further than intended and then "spring" back.

*feedback.css*
```css
.x {
  position: absolute;
  border-bottom: 4px solid red;
  width: 100%;
  top: calc(50% - 2px);
  left: 0;
  animation: draw-x 1000ms;
}

.x-top {
  transform: rotate(20deg);
}

.x-bottom {
  transform: rotate(-20deg);
}

@keyframes draw-x {
  0% {
    width: 0;
    left: 50%;
  }
  50% {
    width: 0;
    left: 50%;
  }
  90% {
    width: 110%;
    left: -5%;
  }
  100% {
    width: 100%;
    left: 0;
  }
}
```

## Using JavaScript to randomize the style a bit!

You can insert values from JavaScript directly into your styles by setting the *style* property directly in JavaScript. Let's imagine we want the wrong answers to all rotate in slightly different directions. What we'll want to do is basically add a rule like this, but with a random value inserted in place of the number:

`transform: rotate(15deg);`

To do this, we'll first need to decide what kind of number we want. I'm going to imagine I want a random number between 10 and 20 degrees in the positive or negative direction:

```typescript
let angle = 10 + Math.random() * 10;
// Give it a 50/50 shot of being negative...
if (Math.random() > 0.5) {
  angle *= -1;
}
```

Next up, I need to put that number into my style rule, which I can do using a template string, like this:

```typescript
`transform: rotate(${angle});`
```

Now I can put it all together like this:

*feedback.ts*
```typescript
export function markWrong (button : HTMLButtonElement) {
  ...
  let angle = 10 + Math.random() * 10;
  // Give it a 50/50 shot of being negative...
  if (Math.random() > 0.5) {
    angle *= -1;
  }
  button.style.transform = `rotate(${angle}deg)`
}
```

