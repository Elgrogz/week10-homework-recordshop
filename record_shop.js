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
  
}

module.exports = RecordShop;