'use strict';
var filterName = __filename.replace('/test/', '/filters/'),
  filter = require(filterName),
  expect = require('chai').expect;

describe('Filters: ' + filterName, function () {
  it('return undefined on empty', function () {
    expect(filter()).to.be.false;
  });

  it('return base64', function () {
    var value = 'agrayfoxleaped';
    expect(filter(value)).to.equal(new Buffer(value, 'base64').toString('utf8'));
  });

  it('can be converted back and forth', function () {
    var value = 'YWJjZGVmZw==',
      fromBase64 = require('../../filters/strings/XFromBase64'),
      toBase64 = require('../../filters/strings/X2Base64');
    expect(toBase64(fromBase64(value))).to.equal(value);
  });
});
