var RecordCollector = function(name, funds) {
  this.name = name;
  this.funds = funds;
  this.records = [];
}

RecordCollector.prototype = {
  addRecord: function(record) {
    this.records.push(record);
  },
  buyRecord: function(record, shop) {
    if (this.funds > record.price) {
      this.records.push(record);
      this.funds -= record.price;
      shop.sellRecord(record);
    } else {
      return "Insufficient funds";
    }
  },
  sellRecord: function(record) { 
    this.funds += record.price;
    var recordToRemove = this.records.indexOf(record);
    this.records.splice(recordToRemove, 1); 
  }
}


module.exports = RecordCollector;