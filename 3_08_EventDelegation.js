// * EVENT DELEGATION
// Based on Event bubbling(default way) and handling events in a better way

// With some multiple div's inside page we don't need eventHandler attached to all elements individually - they can hamper page performance- and list of handlers can grow a lot.
// Event Delegation States attaching event to Parent of these element - and handling with some unique id like 'id' of these elements in order to do the operation like adding item to cart or redirecting to other url.
// Event of child will automatically bubble out to the parent and will be handled there accordingly.

document.querySelector("#category")?.addEventListener("click", (e) => {
  console.log(e.target.id);
  window.location.href = "/" + e.target.id;
  // OR we event get tag Name 'LI', 'DIV' and so on
});

/**
 * <div id='form'>
 *      <input type='text' id='name' data-uppercase/> // manually created attribute
 *      <input type='text' id='pan' />
 *      <input type='text' id='mobile'/>
 * </div>
 */
document.querySelector("#form")?.addEventListener("keyup", (e) => {
  console.log(e.target.id);
  if (e.target.dataset.uppercase != undefined) {
    // if that element has uppercase property in the dataset attribute
    // convert value(input box value) to upper case
    e.target.value = e.target.value.toUpperCase();
  }
});
// Now done once, this uppercase behavior can be re-used any number of element just by providing it with the attribute as well

// BENEFITS:
/**
 * 1. Abstraction
 * 2. Less code
 * 3. DOM manipulation
 * 4. No dynamic attachment of n number of event handlers
 */
// All the events are not bubbled up - like blur, focus etc - they have their own risk so they have to be separately dealt with
// Also, to let event delegation work you have to let the propagation happen and NOT use stopPropagation
