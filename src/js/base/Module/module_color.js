import "./module_status";

var module_color = (function () {
  var state = module_status;
  var colors = ["orange", "#ccc", "pink"];

  function render() {
    var color = colors[status.get("number") % 3];
    console.log(color);
    // document.body.style.backgroundColor = color;
  }

  return {
    render: render,
  };
})();

export default module_color;
