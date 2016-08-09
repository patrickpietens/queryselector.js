# queryselector.js
Helper function returning all elements in the DOM that matches a specified CSS selector.
Returns null when no elements were found.

## Example
```javascript
import $ from 'queryselector.js';

let myFoo = $('#foo');

// A find method is added to the Node prototype:
let myBar = myFoo.$('.bar');
```

## Installation
```bash
$ npm install --save queryselector.js
```
