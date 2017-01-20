var Record = require('../record');
var RecordShop = require('../record_shop');
var assert = require('assert');

describe('Record', function() {

  var record1;
  var record2;
  var recordShop;

  beforeEach(function() {
    record1 = new Record("Californication", "Red Hot Chili Peppers", 10);
    record2 = new Record("Good Kid, Mad City", "Kendrick Lamar", 15);
    recordShop = new RecordShop("GG's Records", "Dunfermline");
  });

  it('should have a name', function() {
    assert.equal("GG's Records", recordShop.name);
  });

  it('should have a city', function() {
    assert.equal("Dunfermline", recordShop.city);
  });
  
  it('records array should start empty', function() {
    assert.deepEqual([], recordShop.records);
  });

  it('bank balance should start at 0', function() {
    assert.equal(0, recordShop.bankBalance);
  });



})