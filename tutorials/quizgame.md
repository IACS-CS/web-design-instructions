# Quiz Game

- [Quiz Game](#quiz-game)
  - [Step 1: Make a Pretty Little Quiz Question](#step-1-make-a-pretty-little-quiz-question)
    - [HTML](#html)
    - [CSS](#css)
  - [Step 2: Data!](#step-2-data)
    - [Creating quiz data](#creating-quiz-data)
      - [Adding type hinting](#adding-type-hinting)
    - [Using quiz data](#using-quiz-data)
      - [Selecting Items from an Array](#selecting-items-from-an-array)
    - [Displaying Questions](#displaying-questions)
      - [Using Template Strings](#using-template-strings)
      - [Creating elements one at a time...](#creating-elements-one-at-a-time)
    - [Putting it all together](#putting-it-all-together)
  - [Putting it All Together](#putting-it-all-together-1)
  - [Next Steps](#next-steps)
    - [Animating Wrong Answers](#animating-wrong-answers)
    - [Handling Correct Answers](#handling-correct-answers)

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

### HTML

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

### CSS

In order to make this code look pretty, we're going to create some basic style rules. Style rules consist of a *selector* and a *ruleset*. To select any element with an attribute like `class="name-of-class"` in the HTML, we write a *CSS* rule that looks like `.name-of-class` (starting with a period).

The *ruleset* for CSS consists of a block of rules delimited with squiggle brackets (`{}`). Each rule consists of a property and a setting, like this `property: value;`. For example, to make a rule that makes my header big and bold, I would do this:

```css
.header {
  font-size: 48pt;
  font-weight: bold;
}
```

You can also make a rule for every instance of an element using just the element name, like this:

_style.css_

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

_questions.ts_

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

#### Adding type hinting

Note: in TypeScript, we can also help ourselves out by adding a type definition to our file. This will allow us to add type hinting to our functions later, which makes it easier to let the code editor auto-complete the details of questions for us.

Here's what adding type definitions look like for the file above -- note, if we add a type definition to the questions variable itself we'll also get the editor to warn us if we leave a required part of our question off:

_questions.ts_
```typescript
export type Question = {
  question : string, /* A string */
  answer : string, /* A string */
  distractors : string[], /* A list of strings */
}

export let questions : Question[] = [
  /* ... same code as before can go here ... */
]
```

*Go ahead and create a new file called `questions.ts` with the code above.*

### Using quiz data

Next up, we need to *use* the quiz data we just created, so we'll create a new file called `quiz.ts`

The quiz will be responsible for keeping track of where the user is in the quiz and displaying each question as they move through it.

#### Selecting Items from an Array

In JavaScript, if you have an array of items, such as this:

```javascript
let colors = ['red','blue','green','yellow']
```

you can select an item from the array by using a zero-based numerical index, such as `colors[0]`.

If we want to keep track of which question a user is on, then, we'll want to simply have an index that starts at 0 that we add to and use that index to select the current question.

Here's some simple code to help us move through our list:

_quiz.ts_

```javascript
import {questions} from './questions';

let currentQuestionNumber = 0;
let currentQuestion = questions[currentQuestionNumber];

export function nextQuestion () {  
  currentQuestionNumber += 1;
  currentQuestion = questions[currentQuestionNumber];
}

export function prevQuestion () {
  currentQuestionNumber -= 1;
  currentQuestion = questions[currentQuestionNumber];
}
```

When we display our questions, let's assume we want to randomize the order of the answers. Unfortunately, JavaScript doesn't provide a shuffle function in its built-in library, so we have to implement one. I went ahead and created a little `utils.ts` module to stick it in, like this:

_utils.ts_
```typescript
/* We need to shuffle, and this isn't built in in JavaScript, which
is annoying. This shuffle comes from stackoverflow:
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
```

Now I add a method to my `quiz.ts` which takes a question and returns a shuffled list of answers. To stick arrays together, you can use the *spread* operator (...), which lets you take two arrays and put them together, like this:

```typescript
let songbirds = ['chicadee','wren'];
let waterfowl = ['duck','goose'];
// The spread operator at work...
let birds = [...songbirds,...waterfowl];
```

Here's how we'll use the spread operator to mix the answer with the distractors:

_quiz.ts_

```typescript
import {shuffleArray} from './utils';

function getAnswers (question : Question) {
  let answers = [...question.distractors,question.answer];
  shuffleArray(answers);
  return answers;
}
```

### Displaying Questions

Next up, we need to be able to display our questions. The basic idea will be to reach into our HTML and swap out the portions of code we want to change.

Our function will look like this (I've imported the type definition so that my editor will autocomplete when I type the code):

```typescript
import {Question} from './questions';

function changeQuestion (question: Question) {
  /* More coming soon... read on! */
}
```

We can use template strings, which let us insert variables in the middle of our code, to make it relatively easy to mix HTML and JavaScript.

If we look at our original HTML code, the key part that would have to change looks like this:

```html
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
```

We'll use two different techniques to change up our HTML: 
1. We'll change the contents of "question-container" to give us a blank slate.
2. We'll create buttons for each option and add them to the answer container.

The reason to add the answers separately is because we'll need to hook up event listeners on those objects.

#### Using Template Strings


```typescript
import {Question} from './questions';

function changeQuestion (question: Question) {
  let container = document.querySelector('.question-container');
  container.innerHTML = `
  <div class="question-container">
    <div class="question">
      ${question.question}
    </div>
    <div class="answers">      
    </div>
  </div>
  `;
  // Now add the buttons...
  addAnswerButtons(
    container.querySelector('.answers'), 
    question
  );
}
```

#### Creating elements one at a time...

To create the buttons, we'll add them one at a time using `document.createElement`. We'll do it this way rather than assigning to `innerHTML` because we need a reference to the button objects in JavaScript so we can set up event listeners on the buttons anyway.

```typescript

/* Create a single button with text string for question */
function makeButton (a : string, question: Question) {
  let button = document.createElement('button');
  button.innerText = a;
  button.addEventListener(
    "click",
    function () {
      if (a==question.answer) {
        // handle right answer
        // (this is just a placeholder for now --
        // we should do something better with
        // right answers eventually)
        window.alert('Correct!');
      } else {
        // handle wrong answer
        // (this is just a placeholder for now
        // -- we should do something better with
        // wrong answers eventually)
        window.alert('Wrong!');
      }
    }
  );
  return button;
}

/* Add buttons for answers to container */
function addAnswerButtons (container : HTMLDivElement, question: Question) {
  let answers = getAnswers(question);
  answers.forEach(
    function (a) {
      container.appendChild(
        makeButton(a, question)
      );      
    }
  )
}
```

### Putting it all together

The last step is just to create a working "Next" button and set up our buttons at the stop.

Let's add an ID to our next button to make it easy to grab...

_index.html_
```html
<button id="next">Next</button>
```

_quiz.ts_
```typescript

document
  .querySelector('#next')
  .addEventListener(
    "click",
    function () {
      nextQuestion();
      changeQuestion(currentQuestion);
    }
  )

changeQuestion(currentQuestion);
```

## Putting it All Together

As always, you *can* put everything in one file, but I find it hard to keep track of. For my actual "working" code I broke the code in these examples out into three files:

- questions.ts :  List of questions and Question type
- quiz.ts : Logic for advancing question in the quiz
- quizDisplay.ts : Logic for changing HTML.
- util.ts : Helper functions for shuffling our answers -- lots of projects have an extra file for putting code that doesn't fit elsewhere :)

[Here's the code in a working repl](https://replit.com/@ThomasHinkle/QuizGame-Functioning)

*util.ts*
```typescript
/* We need to shuffle, and this isn't built in in JavaScript, which
is annoying. This shuffle comes from stackoverflow:
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
```

*questions.ts*

```typescript
export type Question = {
  question : string, /* A string */
  answer : string, /* A string */
  distractors : string[], /* A list of strings */
}

export let questions : Question[] = [
  {
    question : 'When did the first class graduate from IACS?',
    answer : '2011',
    distractors : ['1997','2007','2015']
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


*quizDisplay.ts*

```typescript
import {Question} from './questions';
import {shuffleArray} from './utils';

function getAnswers (question : Question) {
  let answers = [...question.distractors,question.answer];
  shuffleArray(answers);
  return answers;
}

export function changeQuestion (question: Question) {
  let container = document.querySelector('.question-container');
  container.innerHTML = `
  <div class="question-container">
    <div class="question">
      ${question.question}
    </div>
    <div class="answers">      
    </div>
  </div>
  `;
  // Now add the buttons by hand...
  addAnswerButtons(
    container.querySelector('.answers'), 
    question
  );
}

/* Create a single button with text string for question */
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
        window.alert('Wrong!');
      }
    }
  );
  return button;
}

/* Add buttons for answers to container */
function addAnswerButtons (container : HTMLDivElement, question: Question) {
  let answers = getAnswers(question);
  answers.forEach(
    function (a) {
      container.appendChild(
        makeButton(a, question)
      );      
    }
  )
}

```

*quiz.ts*

```typescript
import {questions, Question} from './questions';

let currentQuestionNumber = 0;
let currentQuestion = questions[currentQuestionNumber];

function nextQuestion () {  
  currentQuestionNumber += 1;
  currentQuestion = questions[currentQuestionNumber];
}

function prevQuestion () {
  currentQuestionNumber -= 1;
  currentQuestion = questions[currentQuestionNumber];
}


document
  .querySelector('#next')
  .addEventListener(
    "click",
    function () {
      nextQuestion();
      changeQuestion(currentQuestion);
    }
  )

changeQuestion(currentQuestion);
```

At this point, you should have a basic working game that pops up a window for right and wrong answers and lets you choose the next question!

## Next Steps

There are various next steps you might want to take.

### [Animating Wrong Answers](./quizgame-animating-wrong)
### [Handling Correct Answers]('./quizgame-right-answers)