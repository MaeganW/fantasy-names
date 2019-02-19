'use strict';

var expect = require('chai').expect;
var fantasyNames = require('./index');

describe('fantasy-names', function () {
  it('it should get all the names', function () {
    var allNames = fantasyNames.allFC();
    var areAllStrings = allNames.every(function (name) {
      return typeof name === 'string';
    });
    expect(areAllStrings).to.be.true;
  });
  it('it should get a random name', function () {
    var isAString = typeof fantasyNames.randomFC() === 'string';
    expect(isAString).to.be.true;
  });
});
