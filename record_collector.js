var RecordCollector = function(name, funds) {
  this.name = name;
  this.funds = funds;
  this.recordCollection = [];
}

RecordCollector.prototype = {
  addRecord: function(record) {
    this.recordCollection.push(record);
  },
  buyRecord: function(record, shop) {
    if (this.funds > record.price) {this.recordCollection.push(record);
      this.funds -= record.price;
      shop.sellRecord(record);
    } else {
      return "Insufficient funds";
    }
  },
  // sellRecord: function() {

  // }
}

module.exports = RecordCollector;