/*jshint node:true */
/*global describe,it,beforeEach */
'use strict';

var chai = require('chai'),
  expect = chai.expect,
  YUI = require('yui').YUI,
  Y = YUI({
    modules: {
      'test/fixtures/1': {
        fullpath: __dirname + '/../build/test/fixtures/1.js'
      },
      'test/fixtures/2': {
        fullpath: __dirname + '/../build/test/fixtures/2.js'
      }
    }
  });

describe('yui-formatter', function() {

  it('should load mod1', function(next) {
    Y.require('test/fixtures/1', function(Y, imports) {
      var mod1 = imports['test/fixtures/1'];
      expect(mod1.default).to.be.a('function');
      expect(mod1.default(1, 2)).to.be.equal(3);
      next();
    });
  });

  it('should load mod2', function(next) {
    Y.require('test/fixtures/2', function(Y, imports) {
      var mod2 = imports['test/fixtures/2'];
      expect(mod2.default).to.be.a('function');
      expect(mod2.default(0)).to.be.equal(false);
      expect(mod2.default(1)).to.be.equal(true);
      expect(mod2.default(2)).to.be.equal(true);
      next();
    });
  });

});
