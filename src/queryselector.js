'use strict';

/**
 * Returns a Node or NodeList object that match a specified group of CSS selectors in the document or specific context.
 *
 * @param  {String} selector    	String representing the specific CSS selector
 * @param  {Node} context 			Node object on which the `querySelectorAll` function is invoked.
 * @return {Nodelist|Node}
 */
const queryselector = (selector, context) => {
	if (typeof selector !== 'string') {
		throw new Error('Required argument selector is not a String or undefined');
	}

    const result = context.querySelectorAll(selector);

    if (result.length !== 0 && [...selector.split(' ')].pop().charAt(0) === '#') {
        return result[0];
    }

    return result;
};

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
