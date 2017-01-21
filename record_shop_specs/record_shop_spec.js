var Record = require('../record');
var RecordShop = require('../record_shop');
var RecordCollector = require('../record_collector');
var assert = require('assert');

describe('Record', function() {

  var record1;
  var record2;
  var recordShop;
  var collector;


  beforeEach(function() {
    record1 = new Record("Californication", "Red Hot Chili Peppers", 10);
    record2 = new Record("Good Kid, Mad City", "Kendrick Lamar", 15);
    record3 = new Record("A.M", "Arctic Monkeys", 20);
    recordShop = new RecordShop("GG's Records", "Dunfermline");
    collector = new RecordCollector("Gregor", 12);
    collector.addRecord(record3);
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

  it('bank balance should start at 100', function() {
    assert.equal(100, recordShop.bankBalance);
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
    assert.equal(110, recordShop.bankBalance);
    recordShop.sellRecord(record2);
    assert.equal(125, recordShop.bankBalance);
    assert.deepEqual([], recordShop.records)
  });

  it('can get total financial assets of shop', function() {
    recordShop.addRecord(record1);
    recordShop.addRecord(record2);
    assert.equal(125, recordShop.getFinancials());
  });

  it('shop can buy record', function() {
    recordShop.addRecord(record1);
    recordShop.addRecord(record2);
    recordShop.buyRecord(record3, collector);
    assert.deepEqual([record1, record2, record3], recordShop.records);
    assert.equal(80, recordShop.bankBalance);
  });



})