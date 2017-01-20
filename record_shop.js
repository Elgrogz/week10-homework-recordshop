var RecordShop = function(name, city) {
  this.name = name;
  this.city = city;
  this.records = [];
  this.bankBalance = 100;
}

RecordShop.prototype = {
  addRecord: function(record) {
    this.records.push(record);
  },
  sellRecord: function(record) {
    this.bankBalance += record.price;

    var recordToRemove = this.records.indexOf(record);
    this.records.splice(recordToRemove, 1);
  },
  getFinancials: function() {
    return this.records.reduce(function(accum, nextRecord) {
      return accum + nextRecord.price
    }, this.bankBalance);
  }
}

module.exports = RecordShop;