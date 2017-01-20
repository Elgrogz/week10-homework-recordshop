var RecordCollector = require('../record_collector');
var Record = require('../record');
var RecordShop = require('../record_shop');
var assert = require('assert');

describe('Record', function() {

  var collector;
  var record1;
  var record2;
  var recordShop;

  beforeEach(function() {
    collector = new RecordCollector("Gregor", 12);
    record1 = new Record("Californication", "Red Hot Chili Peppers", 10);
    record2 = new Record("Good Kid, Mad City", "Kendrick Lamar", 15);
    recordShop = new RecordShop("GG's Records", "Dunfermline");
    recordShop.add(record1);
    recordShop.add(record2);
  });

})