function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, pivot, left, right) {
  var pivotValue = arr[pivot],
      partitionIndex = left;

  for (var i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}


function quickSort(arr, left, right) {
  left = left == undefined ? 0 : left;
  right = right == undefined ? arr.length-1 : right;

  if (left < right) {
    var pivot = right;
    var partitionIndex = partition(arr, pivot, left, right);
    
   //sort left and right
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}


module.exports = exports = {
  "quickSort": quickSort
}
