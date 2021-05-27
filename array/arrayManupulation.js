function arrayManipulation(n, queries) {
  let arr = new Array(n);

  for (let i = 0; i < n + 2; i++) {
    arr[i] = 0;
  }

  let max = 0;
  for (let i = 0; i < queries.length; i++) {
    arr[queries[i][0]] = arr[queries[i][0]] + queries[i][2]
    arr[queries[i][1] + 1] = arr[queries[i][1] + 1] - queries[i][2];
  }
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i];
    if (arr[i] > max) max = arr[i];
  }

  return max;
};

// const queries = [[1, 5, 3], [4, 8, 7], [6, 9, 1]];

const queries = [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]]
console.log(arrayManipulation(10, queries));