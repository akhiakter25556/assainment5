
1. What is the difference between getElementById, getElementsByClassName, and 

querySelector / querySelectorAll ? 

=> 1. getElementById("id") → selects one element by unique ID.

=> getElementsByClassName("class") → selects all elements with that class; returns a live HTMLCollection.

=> querySelector("selector") → selects first element matching CSS selector.

=> querySelectorAll("selector") → selects all elements matching CSS selector; returns a static NodeList.


2. How do you create and insert a new element into the DOM ?

=> Use createElement() to make a new element.

Use properties like innerText, id, className to set content/attributes.

Use appendChild() or insertBefore() to insert it into the DOM.

or  const el = document.createElement("div");

el.innerText = "Hello";

el.id = "myDiv";

parent.appendChild(el); // or insertBefore(el, referenceNode)


3. What is Event Bubbling and how does it work?

=> Definition: Event Bubbling is a way events propagate from the innermost element outward through its ancestors in the DOM.

How it works:

When an event (like click) happens on a child element, it first triggers handlers on that element.

Then the event “bubbles up” to its parent elements, triggering any handlers on ancestors, all the way up to <html> or document. 

or  <div id="parent">
  <button id="child">Click me</button>
</div>

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});


4. What is Event Delegation in JavaScript? Why is it useful?

Definition: Event Delegation is a technique where you attach a single event listener to a parent element to handle events on its child elements, instead of adding listeners to each child individually.

How it works: The parent catches events that bubble up from its children and determines which child triggered the event using event.target.

or  <ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.innerText);
  }
});


5. What is the difference between preventDefault() and stopPropagation()  methods?

=> `preventDefault()`   Prevents the default browser action  for an event

   Example: stop a link from navigating, prevent form submission   
    
`stopPropagation()`  Stops the event from bubbling or capturing further 

 Example: a click on a child won’t trigger parent’s event handler 


