// Event bubbling and capturing are the two ways for event propagation in the dom tree

// Let's say we have nested html elements

// html in html file

//
//// Microsoft encouraged event bubbling and Netscape like event capturing more.
// According to  W3C, it is upto the developer to use whatever they like

// addEvenListener("eventName","callbackMethod","useCapture boolean args")
// example:
// addEventListener("click",onChildClick(),true) // if true, event capturing mode is enabled. default is event bubbling
