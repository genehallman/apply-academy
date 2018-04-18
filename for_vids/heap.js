function swap(arr, i1, i2) {
  var t = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = t;
}

function getLeftIdx(idx) {
  return 2*idx + 1;
}

function getRightIdx(idx) {
  return 2*idx + 2;
}

function getParentIdx(idx) {
  return Math.floor((idx-1)/2);
}

function Heap() {
  this.elements = [];

  this.insert = function(value) {
    var idx = this.elements.length;
    this.elements.push(value);
    while (idx > 0 && this.elements[idx] > this.elements[getParentIdx(idx)]) {
      swap(this.elements, idx, getParentIdx(idx));
      idx = getParentIdx(idx);
    }
  };

  this.peek = function() {
    return this.elements[0];
  };

  this.pop = function() {
    var idx = 0;
    swap(this.elements, 0, this.elements.length - 1);
    var finished = false;

    while (!finished) {
      var max = idx;
      if (this.elements.length > getLeftIdx(max) &&
          this.elements[max] < this.elements[getLeftIdx(max)]) {
        max = getLeftIdx(max);
      }
      if (this.elements.length > getRightIdx(max) &&
          this.elements[max] < this.elements[getRightIdx(max)]) {
        max = getRightIdx(max);
      }

      if (max != idx) {
        swap(this.elements, max, idx);
        idx = max;
      } else {
        finished = true;
      }
    }

    var res = this.elements[this.elements.length - 1];
    this.elements.length--;
    return res;
  };
}