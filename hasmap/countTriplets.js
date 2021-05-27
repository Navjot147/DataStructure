function countTriplets(arr, r) {
  const before = {};
  const after = {};
  let tripletsCount = 0;
  arr.forEach(item => {
    after[item] = after[item] ? after[item] + 1 : 1;
  });

  arr.forEach(item => {
    after[item] = after[item] - 1;
    if (before[item / r] && after[item * r] && item % r === 0) {
      tripletsCount = tripletsCount + (before[item / r] * after[item * r]);
    }
    before[item] = before[item] ? before[item] + 1 : 1;
  });

  return tripletsCount;
}


// const arr = [3, 9, 27];
// const r = 3;

// const arr = [1, 4, 16, 64];
// const r = 4;

// const arr = [1, 2, 2, 4];
// const r = 2;

const arr = [1, 3, 9, 9, 27, 81];
const r = 3;

// const arr = [1, 5, 5, 25, 125];
// const r = 5;

console.log(countTriplets(arr, r));