// fn(accumulator, currentValue[, index[, array]]
Array.prototype.customReduce = function (fn, initialValue) {
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

Array.customOf = function () {
  var output = [];
  for (var i = 0; i < arguments.length; i++) {
    output.push(arguments[i]);
  }
  return output;
};

Function.prototype.debounce = function (fn, wait) {
  let timeout;
  return function (...args) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
};

Promise.prototype.customAll = function (promises = []) {
  return new Promise((resolve, reject) => {
    const results = [];
    const checkDone = () => {
      if (results.length === promises.length) resolve(results);
    }
    promises.forEach(promise => {
      promise.then(result => {
        results.push(result);
      }, reject).then(checkDone);
    })
  });
};


function PromisePolyFill(executor) {

  let onResolve, onReject, value, fullfiled, rejected, called, callbacks = [], values = [];

  function resolve(result) {
    value = result;
    values.push(result);
    fullfiled = true;
    if (typeof onResolve === 'function') {
      console.log("I am in resolve block");
      onResolve(value);
      called = true;
    }
  }

  function reject(reason) {
    rejected = true;
    value = reason;

    if (typeof onReject === "function") {
      onReject(value);
      called = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;
    callbacks.push(callback);
    if (fullfiled && !called) {
      console.log('I am in then');
      called = true;
      onResolve(value);
    }
    return this;
  }

  this.catch = function (callback) {
    onReject = callback;

    if (rejected && !called) {
      called = true;
      onReject(value);
    }
    return this;
  }

  try {
    executor(resolve, reject);
  } catch (error) {
    console.log(error);
    reject(error);
  }

  return this;
};

// PromisePolyFill((res, rej) => {
//   setTimeout(() => {
//     res(1000);
//   }, 1000);
//   // res(1000);
// }).then((val) => { console.log("outer then 1"); console.log(val) });


new Promise((res, rej) => {
  setTimeout(() => {
    res(1000);
  }, 2000);

  // setTimeout(() => {
  //   rej(1000);
  // }, 0);

}).then((val) => { console.log("outer then 1"); console.log(val) }).catch((val) => { console.log("outer catch 1"); console.log(val) }).then((val) => { console.log("outer then 2"); console.log(val) }).catch((val) => { console.log("outer catch 2"); console.log(val) });
