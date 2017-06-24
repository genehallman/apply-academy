function swap(a, b, arr) {
    console.log(`  swapping ${a} for ${b} in ${arr}`);
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    console.log(`    > ${arr}`);
}


function moveZeros(array) {
    var zeroCounter = array.length - 1;
    for (var i = 0; i < array.length && i < zeroCounter; i++) {
        while (array[zeroCounter] === 0) {
          zeroCounter--;
          console.log("decrementing zeroCounter to " + zeroCounter);
        }
        if (array[i] === 0) {
          swap(i, zeroCounter, array);
        }
        console.log("incrementing i to " + (i+1));
    }
    return array;
}


input = [1,0,0,4,5,0,9]
// output = [1,4,5,9,0,0,0]
console.log(moveZeros(input));

