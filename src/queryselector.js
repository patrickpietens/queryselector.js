'use strict';

/**
 * Returns a Node or NodeList object that match a specified group of CSS selectors in the document or specific context.
 *
 * @param  {String} selector    	String representing the specific CSS selector
 * @param  {Node} context 			Node object on which the `querySelectorAll` function is invoked.
 * @return {Nodelist|Node|null}
 */
const queryselector = (selector, context) => {
	if (typeof selector !== 'string') {
		throw new Error('Required argument selector is not a String or undefined');
	}

	let result;
	if (context instanceof Node) {
        result = context.querySelectorAll(selector);
	} else {
		result = document.querySelectorAll(selector);
	}

	if (result.length === 0) {
		return null;
	} else if (result.length === 1) {
		return result[0];
	} else {
		return result;
	}
};

/**
 * Adds a shortcut for finding elements on the page using the querySelectorAll method. Returns the object if only one
 * result was found. Otherwise returning an array containing all found elements.
 *
 * @param  {String} selector    	String representing the specific CSS selector
 */
if (!Node.prototype.find) {
	window.find = Node.prototype.find = NodeList.prototype.find = function(selector) {
		return queryselector(selector, this);
	};
}

/**
 * Adds a shortcut for finding elements on the page using the querySelectorAll method. Returns the object if only one
 * result was found. Otherwise returning an array containing all found elements.
 *
 * @param  {String} selector    	String representing the specific CSS selector
 */
if (!Node.prototype.$) {
	window.$ = Node.prototype.$ = NodeList.prototype.$ = function(selector) {
		return queryselector(selector, this);
	};
}
