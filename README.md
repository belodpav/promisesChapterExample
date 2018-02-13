# Promises usage example. Practicing skills.

Based on an article about promises by google web fundamentals. [Article](https://developers.google.com/web/fundamentals/primers/promises)

### Description

We want to write a prorgamm which will fetch story content.

What we want:

* Start a spinner to indicate loading
* Fetch some JSON for a story, which gives us the title, and urls for each chapter
* Add title to the page
* Fetch each chapter
* Add the story to the page
* Stop the spinner

The main idea of the task is saved but I did a differ implementation.

### Few words about files

dom-utils.js - helpers for working with DOM

utils.js - Fetching functionality made with Promises

view.js - Chapter class for more easily working with DOM elements of a chapter. 

I also used Underscore in order to use html templates. 