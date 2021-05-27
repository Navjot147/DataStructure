function minimumSwaps(arr) {
  let sum = 0, visited = {};
  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      let a = i, b = arr[i] - 1, length = 1;
      while (b !== i) {
        visited[b] = true;
        a = b;
        b = arr[b] - 1;
        length++;
      }
      sum = sum + (length - 1);
    }
  }
  return sum;
}

const arr = [7, 1, 3, 2, 4, 5, 6];
console.log(minimumSwaps(arr));