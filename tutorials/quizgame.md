# Quiz Game

In this tutorial, I'm going to walk you through creating a Quiz Game in JavaScript.

We will begin once again with the vite template.

Over the course of the tutorial, you'll learn:

- Basic HTML for creating display elements and form elements.
- How to use template strings to put JavaScript and HTML together.
- How to animate HTML elements to make a quiz.
- How to store quiz items as an array of objects in JavaScript.
- How to store user data in the browser so they can save their progress.

## Step 1: Make a Pretty Little Quiz Question

For our first step, we're just going to create a pretty-looking quiz. Here's what we're building first:

{%include local.html page="quiz-static.html" height="800px" %}

## HTML

For step 1 of our tutorial, we'll be writing HTML. HTML is a language that consists of open tags (`<p>`) and close tags (`</p>`) surrounding text to create "elements" like this:

```html
<p>This is a paragraph element.</p>
```

We're going to create our quiz game using only a couple of tags, they are:

- `<div></div>` The generic "div" tag, which we can use for breaking our document into sections and sub-sections.
- `<span></span>` The generic "span" tag, which we can use to change text formatting mid-line if we want to make text bold or a different color.
- `<button></button>` The "button" tag which creates an obviously clickable button.

We can add the attribute `class="name"` to any *start tag* in order to create a new "class" (or type) of tag that we can later add style to using *CSS*. This saves us the work of adding specific style rules to every single tag as we add it to the document.

For our first quiz screen, we'll create the following HTML content (change the quiz content to fit your own tastes!) inside of index.html. This code should get added in place of `<div id="app"></div>` in the generic vite template.

```html
<main class="app">
  <div class="header">
    The <span class="highlight">IACS</span> Quiz
  </div>
  <div class="quiz">
    <div class="question-container">
      <div class="question">
        In what year did IACS graduate its first class of Seniors?
      </div>
      <div class="answers">
        <button>1998</button>
        <button>2007</button>      
        <button>2011</button>
        <button>2015</button>
      </div>
    </div>  
    <div class="controls">
      <button>Next Question</button>
    </div>
  </div>
</main>
```

## CSS

In order to make this code look pretty, we're going to create some basic style rules. Style rules consist of a *selector* and a *ruleset*. To select any element with an attribute like `class="name-of-class"` in the HTML, we write a *CSS* rule that looks like `.name-of-class` (starting with a period).

The *ruleset* for CSS consists of a block of rules delimited with squiggle brackets (`{}`). Each rule consists of a property and a setting, like this `property: value;`. For example, to make a rule that makes my header big and bold, I would do this:

```css
.header {
  font-size: 48pt;
  font-weight: bold;
}
```

You can also make a rule for every instance of an element using just the element name, like this:

```css
button {
  padding: 3em;
  background-color: white;
  color: black;
  border: 3px solid #0033a0;
  border-radius: 10px;
}
```

If you want to learn a ton of CSS, sign up for my web design class. To get you started, here are some rules that will make your basic quiz app look pretty OK (please mess around with these rules to customize this!)

```css
body {
  padding: 0;
  margin: 0;
  background-color: #00114a;
  color: #eeeeef;
}

.app {
  max-width: 800px; /* limit width to 800px */
  margin: auto; /* center on screen */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-bottom: 100px; /* Leave room for controls */
}

/* Set up big text in the header */
.header {
  background-color: #0033a0; /* IACS Blue */
  color: #ffffff;
  font-size: 48pt;
  padding: 8pt;
  text-align: center;
}

.highlight {
  color: #c6093b; /* IACS red */
  text-shadow: 3px 3px white;
  font-weight: bold;
  font-family: Futura;
}
.question {
  padding: 1em;
  font-size: 24pt;
}

/* Space the answers out */
.answers {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 12em;
  font-size: 18pt;
  flex-wrap: wrap;
}

/* Set the controls up fixed at the bottom */
.controls {
  background-color: #00114a;
  border-top: 1px solid #33668a;
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
  font-size: 10pt;
  height: 100px;
  /* Width is either 800px or full width -- whichever is smaller */
  --width: calc(min(800px,100vw));
    /* This left value is calculated to center the controls... */
  left : calc(50vw - var(--width)/2);
  width: var(--width);
  text-align: right;  
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: end;
}

/* Make the buttons stylish */
button {
  padding: 2em;
  background-color: white;
  color: black;
  border: 3px solid #0033a0;
  border-radius: 10px;
  /* The transition line makes all changes
  get animated */
  transition: all 300ms;
  font-size: inherit;
}

/* Change color when the mouse hover */
button:hover {
  background-color: #c6093b;
  color: white;
}

/* Make button grow when clicked */
button:active {
  transform: scale(1.1,1.1);
}
```

When you're all done, you should have a non-functional quiz-game looking pretty in your browser. [Here's an example](https://replit.com/@ThomasHinkle/QuizGame-Pretty).

## Step 2: Data!

You'll notice our quiz game doesn't currently do anything. Our goal eventually is to do the following:

- Represent the quiz itself as an array in JavaScript (a list of questions and answers).
- Use that data to update our webpage with the current question
- Make it so that the "next" button switches us to the next question.

### Creating quiz data

It is very common in JavaScript projects to model data as a list of objects. We're going to create a file with our quiz data where we do just that.

We first need to decide what each question will look like. I'm going to start with something simple like this:

```javascript
{
  question : 'When did the first class graduate from IACS?',
  answer : '2011',
  distractors : [
    '1997',
    '2007','2015'
  ]
}
```

To create a list of questions, we then would simply separate question objects with commas inside of a list (`[]`), like this:

```javascript
export let questions = [
  {
    question : 'When did the first class graduate from IACS?',
    answer : '2011',
    distractors : [
      '1997',
      '2007','2015'
    ]
  },
  {
    question : 'Where was the first IACS high school campus?',
    answer : 'The Old Town Hall in Chelsmford center',
    distractors : [
      'The campus at 72 Tyng Road',
      'The Pheasant Lane Mall',
      'A strip mall in Billerica',
      'A building on Brick Kiln Rd'
    ]
  }
];
```

*Go ahead and create a new file called `questions.ts` with the code above.*

### Using quiz data

Next up, we need to *use* the quiz data we just created, so we'll create a new file called `quiz.ts`

The quiz will be responsible for keeping track of where the user is in the quiz and displaying each question as they move through it.

```
import {questions} from './questions';

let currentQuestionNumber = 0;

