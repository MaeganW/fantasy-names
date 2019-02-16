(function () {
  "use strict";

  var random = require('unique-random-array');
  var fantasyFemaleNames = require('./female-lotr-names.json');

  function returnAllNames() {
    return fantasyFemaleNames;
  }

  module.exports = {
    randomFC: random(fantasyFemaleNames),
    allFC: returnAllNames
  }
})();