// fn(accumulator, currentValue[, index[, array]]
Array.prototype.customReduce = function(fn, initialValue) {
  if (this === null) {
    throw new TypeError("Array.prototype.reduce called on null or undefined");
  }

  if (typeof fn !== "function") {
    throw new TypeError(fn + " is not a function");
  }

  let k = 0;
  if (arguments.length >= 2) {
    initialValue = arguments[1];
  } else {
    initialValue = this[k++];
  }

  for (var i = k; i < this.length; i++) {
    initialValue = fn.call(this, initialValue, this[i], i, this);
  }

  return initialValue;
};

Array.customOf = function() {
  var output = [];
  for (var i = 0; i < arguments.length; i++) {
    output.push(arguments[i]);
  }
  return output;
};

Function.prototype.debounce = function(fn, wait) {
  let timeout;
  return function(...args) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
};
