function minimumBribes(arr = []) {
  
  let ans = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] - (i + 1) > 2) {
      return "Too chaotic";
    }
    for (let j = Math.max(0, arr[i] - 2); j < i; j++)
      if (arr[j] > arr[i]) ans++;
  }
  return ans;
}

let arr = [2, 1, 5, 3, 4];
arr = [2, 5, 1, 3, 4];
arr = [1, 2, 5, 3, 7, 8, 6, 4];

console.log(minimumBribes(arr));