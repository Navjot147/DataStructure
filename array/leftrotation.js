function rotateLeft(arr = [], rotNum = 2) {
  const finalArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let diff = i - rotNum;
    if (diff < 0) diff = arr.length + diff;
    finalArr[diff] = arr[i];
  }
  return finalArr;
};


const arr = [1, 2, 3, 4, 5];
console.log(rotateLeft(arr, 2));