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

  },
  // sellRecord: function() {

  // }
}

module.exports = RecordCollector;