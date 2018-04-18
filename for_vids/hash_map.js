var hash = function(obj) {
  var str = JSON.stringify(obj);
  var a = 101;
  var n = Math.pow(2, 32);
  var k = str.length;
  var running_a = Math.pos(a, k);

  var result = 0;
  for (var i = 0; i < k; i++) {
    running_a = running_a / a;
    var c = str.charCodeAt(i);
    result += c * running_a;
    result = result % n;
  }
  return result;
};

function HashMap(size) {
  this.data = new Array(size);
  this.count = 0;

  this.add = function(key, value) {
    var keyHash = hash(key) % this.data.length;
    if (this.data[keyHash] != null || (count/size) > 0.75) {
      this.grow();
    }
    this.data[keyHash] = {key, value};
    this.count++;
  };

  this.get = function(key) {
    var keyHash = hash(key) % this.data.length;
    return this.data[keyHash];
  };

  this.delete = function(key) {
    var keyHash = hash(key) % this.data.length;
    delete this.data[keyHash];
    this.count--;
  };

  this.grow = function() {
    var oldData = this.data;
    this.data = new Array(oldData.length * 2);
    for (var i = 0; i < oldData.length; i++) {
      this.add(oldData[i].key, oldData[i].value);
    }
  }
}