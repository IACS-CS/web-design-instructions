---
title: - Scoring right answers
order: 3
---

# Quiz Game: Handling Right Answers

This tutorial assumes you've already completed the set-up in [the quiz game tutorial]('./quizgame.md)

Let's assume that when users get an answer right, we want to:

1. Display feedback to show the user they got the answer right
1. Update a score for the user!

- [Quiz Game: Handling Right Answers](#quiz-game-handling-right-answers)
- [First step](#first-step)
  - [Adding Feedback](#adding-feedback)
    - [Delaying the Feedback](#delaying-the-feedback)
  - [Adding a Score!](#adding-a-score)
  - [Animating the new score!](#animating-the-new-score)
  - [Preventing multiple answers from counting](#preventing-multiple-answers-from-counting)

[Full example here](https://replit.com/@ThomasHinkle/QuizGame-Full#quiz.ts)
# First step

Our first step is simply to give the user some feedback that they got the answer right. We can use code very similar to what we did in for [wrong answers](quizgame-animating-wrong.md) if we like. To make things a bit fancier, I'm going to add a bit of feedback to the screen to complement the user.

## Adding Feedback

I'm going to start by adding some feedback on the screen:

*feedback.ts*
```typescript
export function markCorrect (button) {
  button.classList.add('correct');
  button.innerHTML += `
  <div class="feedback">Way to go!
  `;
}
```

*feedback.css*
```css
.correct {
  /* Allow us to position a custom "stamp" over the button
  position: relative;
  /* Make it bigger! */
  transform: scale(1.2);
}

.correct .feedback {
  position: absolute;
  right: -15px;
  top: 15px;
  transform: rotate(35deg);
  background-color: green;
  color: white;
  padding: 4px;
  font-size: small;
}
```

*quizDisplay.ts*
```typescript
import {markWrong, markCorrect} from './feedback';
// ...
function makeButton (a : string, question: Question) {
  let button = document.createElement('button');
  button.innerText = a;
  button.addEventListener(
    "click",
    function () {
      if (a==question.answer) {
        // handle right answer
        markCorrect(button)
      } else {
        // handle wrong answer
        markWrong(button);
      }
    }
  );
  return button;
}
```

### Delaying the Feedback

To delay the feedback, I can use a `setTimeout`, which allows me to ask the browser to run some code after some time has gone by.

*feedback.ts*

```typescript
export function markCorrect (button) {
  button.classList.add('correct');
  let feedback = 'Way to go!';
  setTimeout(
    function () {
      button.innerHTML += `
        <div class="feedback">${feedback}</div>
        `;
    },
    500 // after 500ms
  )
 
}
```

There are lots of ways you could customize the feedback, including coding custom feedback for each question if you were so inclined.

## Adding a Score!

If we want to add a "score" to our game, we can do so by simply creating a variable to keep track of the score and updating it in our right/wrong answer code.

Here's a simple score module (you could implement your own with your own custom logic).

First, I need to add a place to display the score to my HTML:

*index.html*

```html
<!-- insert this wherever you want to display the score -->
<div id="score"></div>
```

Next, I'll write some simple code for updating the score &mdash; you can decide how you want to handle the display of the scoring for your own quiz.

*score.ts*

```typescript

import './score.css'
let right = 0;
let attempts = 0;

export function addCorrectAnswer () {
  right += 1;
  attempts += 1;
  updateDisplay();
}

export function addIncorrectAnswer () {
  attempts += 1;
  updateDisplay();
}

let scoreDiv = document.querySelector('#score');
function updateDisplay () {
  scoreDiv.innerHTML = `
    Score: ${right}/${attempts}
  `
}
```

*score.css*
```css
#score {
  font-size: small;
}
```

## Animating the new score!

To add a little animation each time the score updates, I can add a new class to the score div each time we update it. We'll then have to *remove* that class once our animation has played. Luckily, there's an event that plays when a transition finishes playing that will let us handle this.

*score.css

```css
#score.new {
  transform: scale(1.2)rotate(360deg);
  transition: transform 500ms;
}
```

*score.ts*

```typescript

scoreDiv.addEventListener(
  'transitionend',
  function () {
    scoreDiv.classList.remove('new');
  }
);
```

## Preventing multiple answers from counting

At this point, we have a score that updates with each click of an answer button.

We now have to decide how we want to handle right answers *after* a wrong answer. There are lots of answers to this -- in my case, I'm going to go ahead and give the user feedback on what's wrong and right, but *not* update the score.

To do this, I'll have to keep track of whether the user has already answered my question.

There are lots of ways to do this -- I'll go ahead and update my *score* module to know what the current question is and check whether it's been answered or not.

First, I have to export the current question number from `quiz.ts`:

*quiz.ts*

```typescript
export let currentQuestionNumber = 0
```

Next, I need to add an object to keep track of answers in `score.ts` which I'll do like this:

```score.ts
let answered = []; // array to map right/wrong answers

export function addCorrectAnswer () {
  if (!answered[currentQuestionNumber]) {
    right += 1;
    attempts += 1;
    answered[currentQuestionNumber] = 'correct';
    updateDisplay();
  }
}

export function addIncorrectAnswer () {
  if (!answered[currentQuestionNumber]) {
    attempts += 1;
    answered[currentQuestionNumber] = 'wrong';
    updateDisplay();
  }
}
```
