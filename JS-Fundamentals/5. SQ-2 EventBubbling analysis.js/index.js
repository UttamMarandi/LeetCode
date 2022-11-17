{
  document.querySelector("#grandparent").addEventListener("click", () => {
    console.log(" Grand Parent Clicked !");
  });

  document.querySelector("#parent").addEventListener("click", () => {
    console.log("Parent Clicked");
  });

  document.querySelector("#child").addEventListener("click", () => {
    console.log("Child Clicked");
  });

  // By default , Event Bubbling
  // If clicked on child div
  // logs in this order
  // Child clicked
  // Parent Clicked
  // Grand Parent clicked

  // If clicked on parent div
  // logs in this order
  // parent div
  // grandparent clicked

  // child div callback will not executed.
}

{
  document.querySelector("#grandparent").addEventListener(
    "click",
    () => {
      console.log(" Grand Parent Clicked !");
    },
    true
  ); // event capturing set to true

  document.querySelector("#parent").addEventListener(
    "click",
    () => {
      console.log("Parent Clicked");
    },
    true
  );

  document.querySelector("#child").addEventListener(
    "click",
    () => {
      console.log("Child Clicked");
    },
    true
  );

  // Everything will happen opposite of event bubbling
}

//  Event bubblind and event trickling/capturing is a very expensive process

// Both event bubbling and event trickling will cause event chains
// That's why it's important to stop the propagation at some time.

//  Playing with event capture boolean value

{
  document.querySelector("#grandparent").addEventListener(
    "click",
    () => {
      console.log(" Grand Parent Clicked !");
    },
    true
  ); // event capturing set to true

  document.querySelector("#parent").addEventListener(
    "click",
    () => {
      console.log("Parent Clicked");
    },
    false
  ); //  bubbling

  document.querySelector("#child").addEventListener(
    "click",
    () => {
      console.log("Child Clicked");
    },
    true
  ); // capturing

  // There are two cycles , first the capturing cycle and then the bubbling cycle.
  // If for grandparent , capturing is set to true , then grandparent logs

  // capturing cycle => top to bottom
  // grandparent => capture => true => logs grandparent
  // parent => capture =>false => skipped
  // chiled => captur => true => logs child

  // bubbling cycle => bottom to top
  // child => capture true => skipped
  // parent => capture false => logs parent
  // grandparent => capture true => logs child
}

{
  document.querySelector("#grandparent").addEventListener(
    "click",
    () => {
      console.log(" Grand Parent Clicked !");
    },
    true
  ); // event capturing set to true

  document.querySelector("#parent").addEventListener(
    "click",
    () => {
      console.log("Parent Clicked");
    },
    false
  ); //  bubbling

  document.querySelector("#child").addEventListener(
    "click",
    () => {
      console.log("Child Clicked");
    },
    false
  ); // bubbling

  // captuing cycle => top to bottom
  // grandparent => capture => true, so grandparent logs
  // parent => capture => false => skipped on capturing cycle
  // child => capture => false => skipped on capturing cycle

  // bubbling cycle => bottom to top
  // child => capture => false => logs children
  // parent => capture => false => logs parent
  // grandparent => capture => true => ignored/skipped
}

//  How to stop propagation

// The callback method passed to eventlistener has access to event object.
// we can use this event object to prevent event bubbling and capturing using
// event.stopPropagation

// Bubling along with .stopPropagation()
{
  document.querySelector("#grandparent").addEventListener(
    "click",
    () => {
      console.log(" Grand Parent Clicked !");
    },
    false
  ); // event capturing set to true

  document.querySelector("#parent").addEventListener(
    "click",
    (e) => {
      e.stopPropagation();
      console.log("Parent Clicked");
    },
    false
  ); //  bubbling

  document.querySelector("#child").addEventListener(
    "click",
    () => {
      console.log("Child Clicked");
    },
    false
  ); // bubbling

  //   Propagation cycle stops when it encounters  e.stopProapgation

  // capturing cylcle
  // grandparent => false => skipped
  // parent => false => skipped
  // child => false => skipped

  // bubbling cycle
  // child => false => logged
  // parent => false => logged =>
  // e.stopPropagation() is encounterd. so event chaining stops
}

// Bubbling with stopPropagation at child level
{
  document.querySelector("#grandparent").addEventListener(
    "click",
    () => {
      console.log(" Grand Parent Clicked !");
    },
    false
  ); // event capturing set to true

  document.querySelector("#parent").addEventListener(
    "click",
    (e) => {
      e.stopPropagation();
      console.log("Parent Clicked");
    },
    false
  ); //  bubbling

  document.querySelector("#child").addEventListener(
    "click",
    () => {
      console.log("Child Clicked");
    },
    false
  ); // bubbling

  //   Propagation cycle stops when it encounters  e.stopProapgation

  // capturing cylcle
  // grandparent => false => skipped
  // parent => false => skipped
  // child => false => skipped

  // bubbling cycle
  // child => false => logged
  // e.stopPropagation() is encounterd. so event chaining stops
}

// capturing with stopPropagation
{
  document.querySelector("#grandparent").addEventListener(
    "click",
    () => {
      console.log(" Grand Parent Clicked !");
    },
    true
  ); // event capturing set to true

  document.querySelector("#parent").addEventListener(
    "click",
    (e) => {
      console.log("Parent Clicked");
    },
    true
  ); //  bubbling

  document.querySelector("#child").addEventListener(
    "click",
    (e) => {
      e.stopPropagation();
      console.log("Child Clicked");
    },
    true
  ); // bubbling

  //   Propagation cycle stops when it encounters  e.stopProapgation

  // capturing cylcle
  // grandparent => true => logged
  // parent => true => logged
  // child => true => logged
  // encounters e.stopPropagation(). event chaining stops

  // bubbling cycle
  //
}

// capturing with stopPropagation in grandparent
{
  document.querySelector("#grandparent").addEventListener(
    "click",
    (e) => {
      e.stopPropagation();
      console.log(" Grand Parent Clicked !");
    },
    true
  ); // event capturing set to true

  document.querySelector("#parent").addEventListener(
    "click",
    (e) => {
      console.log("Parent Clicked");
    },
    true
  ); //  bubbling

  document.querySelector("#child").addEventListener(
    "click",
    () => {
      console.log("Child Clicked");
    },
    true
  ); // bubbling

  //   Propagation cycle stops when it encounters  e.stopProapgation

  // capturing cylcle
  // grandparent => true => logged
  // encounters e.stopPropagation(). event chaining stops

  // bubbling cycle
  //
}
