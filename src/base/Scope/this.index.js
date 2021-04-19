var a = 20;
var obj = {
  a: 10,
  getA: foo,
  active: active,
};

function foo() {
  console.log(this.a);
}

function active(fn) {
  fn();
}

active(obj.getA); // 输出的值是多少？
obj.active(obj.getA); // 输出的值是多少?

var n = "window";
var object = {
  n: "object",
  getN: function () {
    return function () {
      return this.n;
    };
  },
};

console.log(object.getN()()); // 输出的结果是多少？
