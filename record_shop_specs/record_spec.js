var Record = require('../record');
var assert = require('assert');

describe('Record', function() {

  var record1;
  var record2;

  beforeEach(function() {
    record1 = new Record("Californication", "Red Hot Chili Peppers", 10);
    record2 = new Record("Good Kid, Mad City", "Kendrick Lamar", 15);
  });

  it('should have a title', function() {
    assert.equal("Californication", record1.title);
  });

  it('should have an artist', function() {
    assert.equal("Red Hot Chili Peppers", record1.artist);
  });




})