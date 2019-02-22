(function () {
  const random = require('unique-random-array');
  const fantasyFemaleNames = require('./female-lotr-names.json');

  function returnAllNames() {
    return fantasyFemaleNames;
  }

  module.exports = {
    random: random(fantasyFemaleNames),
    all: returnAllNames
  }
})();