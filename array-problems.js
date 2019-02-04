function minOfNPosition(arr, m) {
  let values = { minIndex: -1, min: arr[0] };
  for (let i = 0; i <= m; i++) {
    values = findMin(values.minIndex, arr[0], arr);
  }
  return values;
}

function findMin(minIndex, min, arr) {
  let _min = min;
  let _minIndex = minIndex;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < _min) {
      _min = arr[i];
      _minIndex = i;
    }
  }
  arr.splice(_minIndex, 1);
  return { min: _min, minIndex: _minIndex, arr };
}

// How many valleys crosses by taking steps
// Sample: valleyString = 'DDUUDUDU'
// D -> Step Down, U -> Step Up
function countingValleys(valleyString) {
  let arr = valleyString.split("");
  let level = 0;
  let valleyCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "D") --level;
    if (arr[i] === "U") ++level;
    if (level === 0 && arr[i] === "U") ++valleyCount;
  }
  return valleyCount;
}

// count the a's in infinite repeated string when given value of certain number
// Sample: str = 'aba', number = 10
function repeatedString(str, number) {
  let orgArr = str.split("");
  let arr = str.split("");
  arr.length = number;
  let numberOfA = 0;
  for (let i = 0; i < number; i++) {
    if (!arr[i]) {
      let pickUpIndex = i % orgArr.length;
      arr[i] = orgArr[pickUpIndex];
    }
    if (arr[i] === "a") ++numberOfA;
  }
  return numberOfA;
}
