---
title: Coding a random password generator API with Node js
subtitle: A fun weekend project to practice fundamentals
published: true
datePublished: 1644222251534
author: Fawaz Sullia
tags:
  - Node js
  - Javascript
  - API
authorPhoto: /img/fawazProfile.jpg
authorTwitter: realfawazsullia
canonicalUrl:
---

Some sites auto generate complex passwords during user signup.

I found this cool and wanted to try building a similar feature.

Instead of turning it into an app, I decided to create a public API, so that anyone could use this in their applications.

### Features:

1. The password by default should have only lower case letters.
2. Users can select if they want to add uppercase letters, numbers and characters to it.
3. Users can select the password length
4. Password should be random with no predictable pattern

So grab your popcorns, this is going to be a detailed one.

For you all super curious folks out there, here's the [link](https://github.com/fawazsullia/password-generator) :)

Now, on with the tutorial.

### Tech requirements

- Nodejs installed
- Express js
- Cors
- dotenv

## The usual server stuff

- Create an empty package.json file inside the directory with npm init
- Next, install dependencies.

We need express to handle the routes, cors to allow cross-origin access and dotenv to access our environment variables.

- `npm i express dotenv cors`

Require all the dependencies and your index.js should look like this:

```
const express = require('express');

const app = express();

const cors = require('cors');

dotenv.configure();

//Defining port

const PORT = process.env.PORT | 5000;

//listen to the server event on PORT

app.listen(PORT)

//Add routes

app.get('/generate', (req, res) => {
//we will come back here later
}
```

## The password generating algorithm

To avoid cluttering, we'll write the main algorithm in a separate file.

Go ahead. Create a file and name it whatever you want.

I’ll create a wrapper function ( generate-password ) and then export it. This function takes in 4 parameters and will return us the password.

### Parameters:

- Length of password (default 8)
- Caps required (default false)
- Number required (default false)
- Special character required ( default false )

Inside this function, I’ll create 4 different functions that generates lower case, upper case, number and a special character respectively. We will use these functions later.

```
//generate number

let generateNumber = () => {
let number = Math.floor(9*Math.random());
return number.toString();
};



//generate a special character

let generateChar = () => {
const charArray = [64, 38, 35, 37, 36, 42, 43];
let index = Math.floor(7*Math.random());
return String.fromCharCode(charArray[index]);
};



//generate capital letters

let generateCaps = ()=>{
return String.fromCharCode(Math.floor(25 * Math.random() + 65));
};



//generate small case letters

let generateSMall = ()=>{
return String.fromCharCode(Math.floor(25 * Math.random() + 97))
};
```

Now, to generate the whole password, we create a new function that takes in the length of the password required as the parameter.

Next, create a global array and set it to empty. We will push the password into this.

We will set the max-number of upper-case letters or special characters or numbers to (password-length)/3. The rest would be small case alphabets.

The password will contain numbers, uppercase letters or special chars only if the users specify it, if not we go with the default false.

Let's create 3 if statements. These will push number, sp.char or uppercase to the password array, depending on the wrapper function parameters.

```
//generate the whole pass

let generate = (len) => {

let turn = Math.floor(len/3);
var rem = len;

if(charRequired){
  let temp = Math.floor(turn * Math.random() + 1);
  for(i=0; i<temp; i++){
    passwordArray.push(generateChar());
    }
  rem = rem - temp;
}

if(numRequired){
  let temp = Math.floor(turn * Math.random() + 1);
  for(i=0; i<temp; i++){
    passwordArray.push(generateNumber());
    }
  rem = rem - temp;
}

if(capsRequired){
  let temp = Math.floor(turn * Math.random() + 1);
  for(i=0; i<temp; i++){
    passwordArray.push(generateCaps());
    }
  rem = rem - temp;
}

for(i=0; i<rem; i++){
  passwordArray.push(generateSMall());
  }

return passwordArray;

};
```

Note that, we just only set the upper limit of the type of character pushed to the password array. The actual value is decided by the Math.random() method.

This pretty much gives us the password, but it's not random enough. Look closely, there's a pattern. The password will always have sp.char, number, uppercase and lowercase in the same order.

Let’s add one more layer of randomness to it.

I made use of a standard shuffling algo to jumble the array.

```

//shuffle Array
function shuffleArray(arr){
for (let i = arr.length - 1; i > 0; i--) {
let j = Math.floor(Math.random() \* (i + 1));
var temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}
return arr;
}

```

We then convert this into string with `array.join()` and return it.

### Back to index.js

Let’s add a basic routing.

I’m using a get method on the “/generate” route.

Remember that we had 4 parameters for the password generating function? We get values to that using query parameters.

Destructure caps, num, char, len from req.parameters object.

Invoke the function with the above password and send the password generated.

```

app.get('/generate', cors(), (req, res)=>{

let {caps, num, char, len} = req.query;

let passtoSend = password(num, char, len, caps);
res.status(200).json({ data : passtoSend}).end();
});

```

That’s all.

The API we just built is accessible at baseURL/generate

You can add query parameters for additional complexity.

## What next?

You can either build a similar backend API or a front end that fetches this API to generate passwords for users.

You can read about accessing the API [here](https://github.com/fawazsullia/password-generator).

If you found this useful, consider connecting with me on [twitter](https://www.twitter.com/realfawazsullia).

See you in the next one!
