import "./module_status";
import "./module_color";
import "./module_context";

var module_main = (function () {
  var state = module_status;
  var color = module_color;
  var context = module_context;

  setInterval(function () {
    var newNumber = state.get("number") + 1;
    state.set("number", newNumber);

    color.render();
    context.render();
  }, 1000)();
})();

module_main();
