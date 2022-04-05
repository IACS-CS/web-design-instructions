---
order: 4
title: 1. Quiz Game - (4) Adding images & other data to questions
---

# Quiz Game: Expanding Question Types

This tutorial assumes you've already complete [the Quizgame tutorial](quizgame.md).

Remember that our program fundamentally looks at the data in `questions.ts` and then uses it to create buttons in `quizDisplay.ts`. That means that any customization we want to do to questions, such as adding images into the responses or adding custom feedback for certain answers, will mean customizing our questions.ts type.

I'm going to imagine that I'm expanding my quiz to allow the following new features:

1. Custom feedback (special text based on each answer).
2. Custom colors for buttons
3. Using images for answers.
   
Remember that in my original design, each answer is just a string of text, which means I have no way to encode this other answer. So my first step is going to be to convert my answers into objects that can contain more information. I'm going to define a type for the answer in `questions.ts` and I'm going to include a new feature of TypeScript: optional properties, which allow me to indicate properties that may or may not be included (I'm assuming not every question uses every feature I defined).

- [Quiz Game: Expanding Question Types](#quiz-game-expanding-question-types)
  - [Custom Feedback](#custom-feedback)
  - [Adding Images](#adding-images)

[Full example here](https://replit.com/@ThomasHinkle/QuizGame-Full#quiz.ts)

*questions.ts*

```typescript

export type Answer = {
  text : string,
  imageURL? : string,
  color? : string,
}

export type Question = {  
  question : string,
  distractors : Answer[],
  answer : Answer,
}
```

As soon as I update those types, I should see my editor underlining errors in my questions definition, since my old questions no longer fit my new data type. I now have to update questions to look like this:

```typescript
export let questions : Question[] = [
  {
    question : 'When did the first class graduate from IACS?',
    answer : {text:'2011'},
    distractors : [
      {text:'1997'},
      {text:'2007'},{text:'2015'}
    ]
  },
  {
    question : 'Where was the first IACS high school campus?',
    answer : {text:'The Old Town Hall in Chelsmford center'},
    distractors : [
      {text:'The campus at 72 Tyng Road'},
      {text:'The Pheasant Lane Mall'},
      {text:'A strip mall in Billerica'},
      {text:'A building on Brick Kiln Rd'}
    ]
  }
];
```

At this point, I've just made my life harder, but soon I'll be able to show off my newfound abilities.

First, let me go into my quizDisplay.ts and just fix the lines where it currently points to an `answer` and make them point to `answer.text`.

What was:
`button.innerText = a`

Becomes:
`button.innerText = a.text;`

## Custom Feedback

Next up, I can add some custom feedback to some of my answers -- I'll pass the answer object into my calls to `markCorrect` and `markIncorrect` so that I can use the custom feedback there, like so:

*quizDisplay.ts*

```typescript
function makeButton (a : string, question: Question) {
  let button = document.createElement('button');
  button.innerText = a.text;
  button.addEventListener(
    "click",
    function () {
      if (a==question.answer) {
        // handle right answer
        markCorrect(button,a)
        addCorrectAnswer();
      } else {
        // handle wrong answer
        markWrong(button, a);
        addIncorrectAnswer();
      }
    }
  );
  return button;
}
```

*feedback.ts*

```typescript
import type {Answer} from './questions';

export function markWrong (button : HTMLButtonElement, answer: Answer) {
  button.classList.add('wrong');
  /// ...
  if (answer.feedback) {
    button.innerHTML += `
      <div class="feedback">
        ${answer.feedback}
      </div>
    `;
  }
}

export function markCorrect (button, answer: Answer) {
  button.classList.add('correct');
  let feedback = 'Way to go!'
  if (answer.feedback) {
    feedback = answer.feedback;
  }
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

## Adding Images

To add images, I'll need to get image URLs into my data type. In Vite, we can import those by pointing directly to images we upload, so I'll need to:

1. Add an images folder to my repl
1. Upload images into that folder
1. Import the image URLs into my questions.ts file, pointing to the images
1. Add the image URLs into the answers in question
1. Add some statements to makeButton to add images to my document if there
   are images.

Here's what my quizDisplay.ts now looks like:

Here's what questions.ts looks like now...
```typescript
```


```typescript
function makeButton (a : Answer, question: Question) {
  let button = document.createElement('button');
  button.innerText = a.text;
  if (a.imageURL) {
    button.style.backgroundImage = `url(${a.imageURL})`;
    button.style.color ='white';
    button.style.textShadow = '1px 1px black';
    button.style.height = '300px';
    button.style.backgroundSize = 'cover';
  }
  button.addEventListener(
    "click",
    function () {
      if (a==question.answer) {
        // handle right answer
        markCorrect(button,a)
        addCorrectAnswer();
      } else {
        // handle wrong answer
        markWrong(button, a);
        addIncorrectAnswer();
      }
    }
  );
  return button;
}
```
