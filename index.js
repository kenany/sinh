'use strict';

module.exports = Math.sinh || function sinh(x) {
  return (Math.exp(x) - Math.exp(-x)) / 2;
};
