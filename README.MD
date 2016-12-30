# queryselector.js
Helper function returning all elements in the DOM that matches a specified CSS selector.
The function returns a single element when selector starts with a sign character: `#foo`. It returns a NodeList for all other cases.


## Installation
```bash
$ npm i --save queryselector.js
```

## Example
```javascript
import $ from 'queryselector.js';

let myFoo = $('#foo');

// A convenience method is added to the Node and NodeList prototypes:
let myBar = myFoo.$('.bar');
```
