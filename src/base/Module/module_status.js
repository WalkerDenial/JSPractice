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

export default module_status;
