'use strict';

/**
 * Returns a Node or NodeList object that match a specified group of CSS selectors in the document or specific context.
 *
 * @param  {String} selector    	String representing the specific CSS selector
 * @param  {Node} context 			Node object on which the `querySelectorAll` function is invoked.
 * @return {Nodelist|Node|null}
 */
const queryselector = (selectors, context) => {
	if (typeof selectors !== 'string') {
		throw new Error('Required argument selectors is not a String or undefined');
	}

	let myResult;
	if (context instanceof Node) {
        myResult = context.querySelectorAll(selectors);
	} else {
		myResult = document.querySelectorAll(selectors);
	}

	if (myResult.length === 0) {
		return null;
	} else if (myResult.length === 1) {
		return myResult[0];
	} else {
		return myResult;
	}
};

/**
 * Adds a shortcut for finding elements on the page using the querySelectorAll method. Returns the object if only one
 * result was found. Otherwise returning an array containing all found elements.
 *
 * @param  {String} selector    	String representing the specific CSS selector
 */
if (!Node.prototype.find) {
	window.find = Node.prototype.find = function(selector) {
		return queryselector(this, selector);
	};
}

/**
 * Adds a shortcut for finding elements on the page using the querySelectorAll method. Returns the object if only one
 * result was found. Otherwise returning an array containing all found elements.
 *
 * @param  {String} selector    	String representing the specific CSS selector
 */
if (!Node.prototype.$) {
	window.$ = Node.prototype.$ = function(selector) {
		return queryselector(this, selector);
	};
}
