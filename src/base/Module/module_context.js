import "./module_status";

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

export default module_context;
