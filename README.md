# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @fwang36/lotide`

**Require it:**

`const _ = require('@fwang36/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: finds the first element of array
* `tail`: outputs the rest of array after the first index
* `middle`: outputs the middle of the array
* `countLetters`: counts the number of letters that is inputted
* `countOnly`: counts the number occurences from provided items
* `findKey`: finds key within object
* `findKeyByValue`: finds key through provided value
* `letterPositions`: returns index of inputted letters
* `map`: outputs new array using given function
* `takeUntil`: outputs new array from beginning until provided end function
* `without`: outputs new array removing provided elements