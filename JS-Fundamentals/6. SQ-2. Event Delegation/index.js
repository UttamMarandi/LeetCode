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
