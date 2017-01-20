var RecordShop = function(name, city) {
  this.name = name;
  this.city = city;
  this.records = [];
  this.bankBalance = 0;
}

RecordShop.prototype = {
  addRecord: function(record) {
    this.records.push(record);
  },
  // listInventory: function() {
  //   var inventory = this.records.forEach(function(record) {
  //     inventory.push(record);
  //   })
  //   return inventory;
  // }
  sellRecord: function(record) {
    this.bankBalance += record.price;

    var recordToRemove = this.records.indexOf(record);
    this.records.splice(recordToRemove, 1);
  }
}

module.exports = RecordShop;