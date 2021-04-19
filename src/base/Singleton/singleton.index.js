var singletonObject = (function () {
  var instance = null;
  var name = "Walker";
  var age = 99;

  function initial() {
    return {
      getName: function () { // 通过对外暴露方法的方式，保证 name、age 字段的安全
        return name;
      },
      getAge: function () {
        return age;
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = initial();
      }
      return instance;
    },
  };
})();

var s1 = singletonObject.getInstance();
var s2 = singletonObject.getInstance();

console.log(s1 === s2)