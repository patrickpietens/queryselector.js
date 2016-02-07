;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Select = factory();
  }
}(this, function() {
'use strict';

/**
 * Returns a Node object that match a specified group of CSS selectors in the document or specific context.
 * If there are more than one matches or `returnList` is set to `true`  it will return a NodeList object instead.
 *
 * @param  {String} selector    	String representing the specific CSS selector
 * @param  {Node} context 			Node object on which the `querySelectorAll` function is invoked.
 * @param  {Boolean} returnList 	If set to true a NodeList object will be returned. Default is `false`
 * @return {Nodelist|Node|null}
 */

function select(selectors, context) {
	var returnList = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	if (typeof selectors !== 'string') {
		throw new Error('Required argument selectors is not a String or undefined');
	}

	var myResult = undefined;
	if (context instanceof Node) {
		myResult = context.querySelectorAll(selectors);
	} else {
		myResult = document.querySelectorAll(selectors);
	}

	if (myResult.length === 0) {
		return returnList ? myResult : null;
	} else if (myResult.length === 1) {
		return returnList ? myResult : myResult[0];
	} else {
		return myResult;
	}
};
return select;
}));
