var a = 20;
var object = { a: 40 };

function fn(num1, num2) {
  return this.a + num1 + num2;
}

console.log(fn(10, 10));

console.log(fn.call(object, 10, 10));
console.log(fn.apply(object, [10, 10]));

var _fn = fn.bind(object, 1, 2);
console.log(_fn === fn);
console.log(_fn());
console.log(_fn(1, 4));
