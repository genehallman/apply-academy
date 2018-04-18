function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function siftDown(arr, i, len) {
  len = len || arr.length;
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var largest = i;

  if (left<len && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right<len && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest != i) {
    swap(arr, i, largest);
    siftDown(arr, largest, len);
  }
}

function heapify(arr) {
  for (var i = Math.floor(arr.length/2); i >= 0; i--) {
    siftDown(arr, i);
  }
}

function heapSort(arr) {
  heapify(arr);

  for (var i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    siftDown(arr, 0, i);
  }
  return arr;
}