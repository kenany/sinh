'use strict';

const test = require('tape');
const isFunction = require('lodash.isfunction');

const sinh = require('../');

test('exports a function', (t) => {
  t.plan(1);
  t.ok(isFunction(sinh));
});
