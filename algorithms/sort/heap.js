function swap(arr, i, j) {
  // console.log(`  swapping [${i}]${arr[i]} for [${j}]${arr[j]} in ${arr}`);
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  // console.log(`    > ${arr}`);
}

function siftDown(arr, i, len) {
  len = len || arr.length;
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var largest = i;

  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    swap(arr, i, largest);
    siftDown(arr, largest, len);
  }
}

function buildHeap(arr) {
  for (var i = Math.floor(arr.length / 2); i >= 0; i -= 1) {
    siftDown(arr, i);
  }
}

function heapSort(arr) {
    buildHeap(arr);

    // console.log('built heap');
    // console.log(arr);

    for (var i = arr.length - 1; i > 0; i--) {
        // console.log('popping ' + i);
        swap(arr, 0, i);
        siftDown(arr, 0, i);
    }
    return arr;
}

module.exports = exports = {
  "heapSort": heapSort
}
