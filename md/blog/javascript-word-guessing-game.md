---
title: Build a word guessing game with pure javascript
subtitle: Just html,css, javascript and pure fun
published: true
datePublished: 1644222251534
author: Fawaz Sullia
tags:
  - Javascript
authorPhoto: /img/fawazProfile.jpg
authorTwitter: realfawazsullia
canonicalUrl:
---

I wanted to build something fun for my portfolio. After spending sometime thinking, I decided to code a game that was popular in my childhood.

**Hangman**

Players will have to fill the dashes with letters, until they guess the word. The game ends if the player guesses the correct word or if he chooses the wrong letter 5 times.

Here’s how the game looks:

![hangman2.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1621783901513/3zLMxFv1_.png)

Before we start building, let's see what the game needs to do.

1. Generate a random word
2. Generate dashes for the players to fill letters
3. Provide letters for the players to choose
4. End the game when the player loses or wins

Now, with that sorted, lets start building.

Also, you might want to keep [the game](https://fawazsullia.github.io/guesstheword.github.io/game.html) and the [source code](https://github.com/fawazsullia/guesstheword.github.io) open for reference.

## HTML:

The basic structure of the game is quite simple.

1. A section for the title : This section contains the title and the number of chances a player has left

2. A section for the word: The blank space for the word is displayed here. We will dynamically display this, depending on the word length

3. A section for the letters: English alphabet to select will be displayed here. You can create a span tag for each letter, but it is much easier to do this with Javascript.

## Styling

Styling entirely depends on your preferences, but to get started, here’s the link to my [stylesheet](https://github.com/fawazsullia/guesstheword.github.io/blob/master/game.css).

## The dynamics of the game ( Javascript )

As I said earlier, we need to create a **section of alphabets** that the players can select.

Steps:

1. Create an array of alphabets, from a - z
2. Map through this array with array.map
3. For each alphabet on the array, create a span node, set the id to the alphabet and set a common classname ("alphabet")
4. Create a text node with the letter as the inner text
5. Append the textnode to the span and the span to our div ( alphabet section)

It should look something like this ( after styling )

![alphabetsection.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1621784019540/4QeRUjBH6.png)

### Fetching a random word.

I’m sure you have heard about the acronym **API** before. We will be using an API called ‘**Random word Api**’ by M C Naveen, to generate a random word.

The endpoint we are going to use is https://random-words-api.vercel.app/word.

Steps:

1. Fetch request at endpoint
2. Resolve the promise with .then.
3. Resolve the json promise returned
4. Inside the callback, invoke a function that adds functionality to the game. By doing this, we make sure that the game becomes functional only after the fetch is successful

### The game function:

Let’s split the fetched word into an array and store it.

To create empty spaces for the players to fill in, we use a similar method we used to create alphabets, but instead of an alphabet, the textnode will be an empty string.

Let’s then append it to the div called word section.

It should look like this.

![hangman.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1621783855935/gy7kUDoDa.png)

Also, using foreach, we add an event listener to each alphabet.

We now define a call back for the event listener (click) we added in each letter, so that whenever a player clicks a letter, the call back is executed.

### Inside the callback

1. Select the letter with event.taget.innertext
2. Check if the letter is in the word we fetched with array.includes
3. Mark the letter as selected in the DOM ( for styling )

Now, the conditional. We have 2 conditions. \
a. The selected letter is in the word fetched.
b. The selected letter isn’t.

### Selected letter is in the word

1. Check where the selected letter is in the word and store it in an array(indexes). This lets us store multiple values.
2. With DOM manipulation, add the letter in position stored in the array indexes
3. Store the number of elements in the indexes array in a variable.
4. If the variable becomes equal to word length, the player wins the game.

### Selected letter is not in the word

1. Increase the false count by 1
2. When false count is 5, game over

That’s it! You successfully created a Word Game.

Feel free to build this on your own and modify it as you see fit.

If you have questions or improvements, feel free to ping me [here](https://www.linkedin.com/in/fawazsullia/).
