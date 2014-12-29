var sinh = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');
var isNaN = require('lodash.isnan');

test('NaN', function(t) {
  t.plan(1);
  t.ok(isNaN(sinh(NaN)));
});

test('+0', function(t) {
  t.plan(1);
  t.equal(sinh(+0), +0);
});

test('-0', function(t) {
  t.plan(1);
  t.equal(sinh(-0), -0);
});

test('INFINITY', function(t) {
  t.plan(1);
  t.equal(sinh(Infinity), Infinity);
});

test('-INFINITY', function(t) {
  t.plan(1);
  t.equal(sinh(-Infinity), -Infinity);
});