'use strict';

const test = require('tape');
const isNaN = require('lodash.isnan');

const sinh = require('../');

test('NaN', (t) => {
  t.plan(1);
  t.ok(isNaN(sinh(NaN)));
});

test('+0', (t) => {
  t.plan(1);
  t.equal(sinh(+0), +0);
});

test('-0', (t) => {
  t.plan(1);
  t.equal(sinh(-0), -0);
});

test('INFINITY', (t) => {
  t.plan(1);
  t.equal(sinh(Infinity), Infinity);
});

test('-INFINITY', (t) => {
  t.plan(1);
  t.equal(sinh(-Infinity), -Infinity);
});
