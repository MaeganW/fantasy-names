const expect = require('chai').expect;
const fantasyNames = require('./index');

describe('fantasy-names', () => {
  it('it should get all the names', () => {
    const allNames = fantasyNames.all();
    const areAllStrings = allNames.every((name) => {
      return typeof name === 'string';
    });
    expect(areAllStrings).to.be.true;
  });
  it('it should get a random name', () => {
    const isAString = typeof fantasyNames.random() === 'string';
    expect(isAString).to.be.true;
  });
});
