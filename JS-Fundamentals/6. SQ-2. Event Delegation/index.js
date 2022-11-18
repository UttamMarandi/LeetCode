document.querySelector(".category").addEventListener("click", (e) => {
  console.log("category Parent Clicked");
  console.log(e);
  console.log(e.target.classList); // using class to get the element is not a good idea. better use id
  console.log(e.target.id);
  //   window.location.href = `/category/${e.target.id}`;
  console.log(e.target.tagName);
  //    There are chances that we can have nested categories . So change route only when we click on an li element
  if (e.target.tagName === "LI") {
    // tagName comes in capital Letters.ex: "LI","DIV"
    window.location.href = `/category/${e.target.id}`;
  }
});

//  We need to check which category/li item is actully clicked
// Above we are using only one single event listener.
//

// Pros
// We are saving a lot of memory. Only using one event listener
// Mitigating the risk of performance bottlenack
// Writing less code.
// DOM manipulation. If elements are dynamically added then we don't have to add event listener to all the child. But with event delegation we are using only one event listener at parent level

// Cons
// All the events are not bubbled up
// Ex - blur , focus, resizeWindow, scroll
// if e.stopPropagation() is used. The whole event delegation system becomes useless.
