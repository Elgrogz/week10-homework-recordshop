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
  // showRecord: function(recordTitle) {
  //   for (var record of this.records) {
  //     if (record.name === recordTitle) {
  //       return record;
  //     }
  //   }
  // },
  getFinancials: function() {
    return this.records.reduce(function(accum, nextRecord) {
      return accum + nextRecord.price
    }, this.bankBalance);
  },
  buyRecord: function(record, seller) {
    if (this.bankBalance > record.price) {this.records.push(record);
      this.bankBalance -= record.price;
      seller.sellRecord(record);
    } else {
      return "Insufficient funds";
    }
  }
}

module.exports = RecordShop;