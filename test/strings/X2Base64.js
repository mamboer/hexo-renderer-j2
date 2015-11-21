'use strict';
var filterName = __filename.replace('/test/', '/filters/'),
  filter = require(filterName),
  expect = require('chai').expect;

describe('Filters: ' + filterName, function () {
  it('return undefined on empty', function () {
    expect(filter()).to.be.false;
  });

  it('return item on match', function () {
    expect(filter('a-gray-fox-leaped')).to.equal(new Buffer('a-gray-fox-leaped', 'utf8').toString('base64'));
  });

  it('can be converted back and forth', function () {
    var value = 'yeah √ ',
      fromBase64 = require('../../filters/strings/XFromBase64'),
      toBase64 = require('../../filters/strings/X2Base64');
    expect(fromBase64(toBase64(value))).to.equal(value);
  });
});
