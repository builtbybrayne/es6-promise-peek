"use strict";

// Create a tap on Promise objects
if (!Promise.prototype.peek) {
  Object.defineProperty(Promise.prototype, 'peek', {
    value: function(fn) {
      if (this === null) {
        throw new TypeError('Promise.peek() called on null or undefined');
      }
      if (typeof this.then !== 'function') {
        throw new TypeError("Promise.peek() called on a a non-Promise object");
      }
      if (typeof fn !== 'function') {
        throw new TypeError(fn + ' is not a function');
      }

      return this.then(val => {
        fn(val);
        return val;
      });
    }
  });
}