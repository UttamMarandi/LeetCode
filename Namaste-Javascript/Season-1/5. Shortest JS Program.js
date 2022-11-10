//The shortes javascript program is the empty file.
//
//Whenever a js file runs , a global execution context is created which sets up the memory space.
// It also creates an window object
// Js also creates a this keyword. this in global execution context refers to the global window
//Window is the global object which is created along with the global exectution context

// Global object in case of browser is known as the window object
// JS not only runs on browsers but also on other os and servers. For them the global object name is different.
//
//At global level , this keyword is equal to the global object
//this === window // returns true
// A global space is the space where any code that you write outside a function resides.
// so any global space code and variables will get attached to the global object

var a = 10;

function b() {
  var x = 10;
}
console.log(a);
console.log(b);

console.log(window.a); // here quokka returns window is not defined b.c we are not running this code in browser.
// if we run the code in browser and check the console than we will get value a set to 10.
console.log(window.x); // this is cause an error in browser also because x is not a global object.
console.log(this.a); // returns 10 , this represents the window object in global space.
