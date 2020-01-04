(function outer(outerArg) {
  var outerVar = "a";
  (function inner(innerArg) {
    var innerVar = "b";
    console.log(outerArg);
    console.log(innerArg);
    console.log(outerVar);
    console.log(innerVar);
  })(456);
})(123);
