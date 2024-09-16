# mango-array-utils

A utility package to extend JavaScript arrays with additional methods.

## Features

- **chunk()**: Splits an array into chunks of the specified size.
- **flatten()**: Flattens a nested array into a single array.
- **unique()**: Removes duplicate values from an array.
- **shuffle()**: Randomly shuffles the elements of an array.

## Installation

You can install `mango-array-utils` via npm:

```bash
npm install mango-array-utils

Usage
Here are some examples of how to use the methods provided by mango-array-utils:

chunk()
javascript
const { chunk } = require('mango-array-utils');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunked = chunk(array, 3);

console.log(chunked);
// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flatten()
javascript
const { flatten } = require('mango-array-utils');

const nestedArray = [1, [2, [3, [4, 5]]]];
const flat = flatten(nestedArray);

console.log(flat);
// Output: [1, 2, 3, 4, 5]
unique()
javascript
const { unique } = require('mango-array-utils');

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 4, 5];
const uniqueArray = unique(arrayWithDuplicates);

console.log(uniqueArray);
// Output: [1, 2, 3, 4, 5]
shuffle()
javascript
const { shuffle } = require('mango-array-utils');

const array = [1, 2, 3, 4, 5];
const shuffled = shuffle(array);

console.log(shuffled);
// Output: [3, 1, 4, 2, 5] (order may vary)
API
chunk(array, size)
array: The array to split.
size: The size of each chunk.
flatten(array)
array: The nested array to flatten.
unique(array)
array: The array from which to remove duplicates.
shuffle(array)
array: The array to shuffle.
Contributing
Contributions are welcome! Please submit issues and pull requests on the GitHub repository.

License
This package is licensed under the MIT License.