function swap(arr, i, j) {
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var minIdx = i;

    for (var j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      } 
    }
    swap(arr, i, minIdx);
  }
  return arr;
}

module.exports = exports = {
  "selectionSort": selectionSort
}
