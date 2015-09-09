'use strict';

var test = require('tape');
var request = require('supertest');
var app = require('../../../app');

test('login router', function onAppTest(assert) {
  request(app)
  .get('/api/login')
  .expect(200)
  .end(function onEnd(err) {
    assert.equals(err, null);
    assert.end();
  });
});
