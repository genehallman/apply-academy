function insertionSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    var val = arr[i];

    for (var j = i - 1; j > -1 && arr[j] > val; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = val
  }
  return arr;
};