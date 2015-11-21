'use strict';
var filterName = __filename.replace('/test/', '/filters/'),
  filter = require(filterName),
  expect = require('chai').expect;

describe('Filters: ' + filterName, function () {
  it('return undefined on empty', function () {
    expect(filter()).to.equal('undefined');
  });

  it('return "array" on array', function () {
    expect(filter([])).to.equal('array');
  });

  it('return "object" on object', function (done) {
    expect(filter({})).to.equal('object');
    done();
  });
});
