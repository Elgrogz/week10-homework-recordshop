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
    recordShop = new RecordShop("GG's records", "Dunfermline");
  });



})