var RecordCollector = require('../record_collector');
var Record = require('../record');
var RecordShop = require('../record_shop');
var assert = require('assert');

describe('Record', function() {

  var collector;
  var record1;
  var record2;
  var record3;
  var recordShop;

  beforeEach(function() {
    collector = new RecordCollector("Gregor", 12);
    record1 = new Record("Californication", "Red Hot Chili Peppers", 10);
    record2 = new Record("Good Kid, Mad City", "Kendrick Lamar", 15);
    record3 = new Record("A.M", "Arctic Monkeys", 20);
    recordShop = new RecordShop("GG's Records", "Dunfermline");
    recordShop.addRecord(record1);
    recordShop.addRecord(record2);
    collector.addRecord(record3);
  });

  it('should have a name', function() {
    assert.equal("Gregor", collector.name);
  });

  it('should have funds', function() {
    assert.equal(12, collector.funds);
  });

  it('can add record', function() {
    assert.deepEqual([record3], collector.recordCollection);
  });

  it('can buy record', function() {
    collector.buyRecord(record1, recordShop);
    assert.deepEqual([record3, record1], collector.recordCollection);
    assert.equal(2, collector.funds);
  });

  it('cannot buy record if insufficient funds', function() {
    assert.equal("Insufficient funds", collector.buyRecord(record2));
  });

})