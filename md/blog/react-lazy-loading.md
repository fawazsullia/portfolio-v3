---
title: Lazy loading React components with Suspense
subtitle: Decrease initial load speed of react add with code splitting
published: true
datePublished: 1645105643115
author: Fawaz Sullia
tags:
  - React
  - Javascript
  - Front End
authorPhoto: /img/fawazProfile.jpg
authorTwitter: realfawazsullia
canonicalUrl:
---

When I pushed a front end portfolio project to production, I noticed that there was a delay when the web app loaded for the first time.

Being a beginner, I started researching why. Here's what I found out:

React is based on components ( obviously ) and it makes use of bundlers like webpack to bundle up all the imports ( components, views etc) into a single file, which is then loaded when the user first opens the app.

This means, even if the user never visits a particular component, it is still loaded.

How do we solve this? By code splitting.

The solution is to dynamically import components depending on the route or components the user is trying to access. This results in only those components loading, thereby reducing the load time.

Here's how the syntax is;

Without lazy, `import About from './about'`

With lazy, `const About = React.lazy(()=> {import './about'}`

Additionally, we use Suspense, which allows us to use a fallback when the components are loading.

Example:

`<Suspense fallback={<p>Loading></p>}> <App /> </Suspense>`

For a detailed explanation on this, visit https://reactjs.org/docs/code-splitting.html
