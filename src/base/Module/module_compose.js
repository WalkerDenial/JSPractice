var module_status = (function () {
  var status = {
    number: 0,
    color: null,
  };
  var get = function (prop) {
    return status[prop];
  };
  var set = function (prop, value) {
    status[prop] = value;
  };
  return {
    get: get,
    set: set,
  };
})();

var module_color = (function () {
  var state = module_status;
  var colors = ["orange", "#ccc", "pink"];

  function render() {
    var color = colors[state.get("number") % 3];
    console.log(color);
    // document.body.style.backgroundColor = color;
  }

  return {
    render: render,
  };
})();

var module_context = (function () {
  var state = module_status;

  function render() {
    console.log(state.get("number"));
    // document.body.innerHTML = "this Number is " + state.get("number");
  }
  return {
    render: render,
  };
})();

var module_test = (function () {
  return {
    testfn1: function () {},
    testfn2: function () {},
  };
})();

var module_main = (function () {
  var state = module_status;
  var color = module_color;
  var context = module_context;

  setInterval(function () {
    var newNumber = state.get("number") + 1;
    state.set("number", newNumber);

    color.render();
    context.render();
  }, 1000);
})();
