/**
 * Returns DOM element by selector
 * wrapper on querySelector
 * @param {String} selector
 * @param {Node} scope
 */
function qs(selector, scope) {
  return (scope || document).querySelector(selector);
}
/**
 * Adds text within element
 * @param {Node} element
 * @param {Sting} element
 */
function addTextToElement(element, text) {
  element.innerText += text;
}
/**
 * Adds html to the end of the element
 * @param {Node} element
 * @param {Sting} element
 */
function addHTMLToElement(element, html) {
  element.innerHTML += html;
}