'use strict';

const sinh = require('../');
const test = require('tape');
const isFunction = require('lodash.isfunction');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(sinh));
});
