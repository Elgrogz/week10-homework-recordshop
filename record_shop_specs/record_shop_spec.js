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
    assert.equal(0, recordShop.records.length);
  });

  it('bank balance should start at 0', function() {
    assert.equal(0, recordShop.bankBalance);
  });

  it('can add records to inventory', function() {
    recordShop.addRecord(record1);
    assert.equal(1, recordShop.records.length);
  });

  it('should list inventory', function() {
    recordShop.addRecord(record1);
    recordShop.addRecord(record2);
    assert.deepEqual([record1, record2], recordShop.records);
  });

  it('can sell a record', function() {
    recordShop.addRecord(record1);
    recordShop.addRecord(record2);
    recordShop.sellRecord(record1);
    assert.equal(10, recordShop.bankBalance);
    recordShop.sellRecord(record2);
    assert.equal(25, recordShop.bankBalance);
    assert.deepEqual([], recordShop.records)
  });



})