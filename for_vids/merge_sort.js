function merge(left, right) {
  var result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left.splice(0, left.length))
               .concat(right.splice(0, right.length));
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  var mid = Math.floor(arr.length / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}