{
  var num = 20;
  var getNumber = function () {
    console.log(num);
    var num = 10;
  };
  getNumber();
}
(function (x) {
  return (function (y) {
    console.log(x);
  })(10);
})(20);
