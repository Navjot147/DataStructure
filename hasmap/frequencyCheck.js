function freqQuery(queries) {

  const arr = [];
  const map = {};
  const freqMap = {};

  queries.forEach(item => {
    const cond = item[0];
    const num = item[1];

    switch (cond) {
      case 1:
        {
          freqMap[map[num]] = freqMap[map[num]] ? freqMap[map[num]] - 1 : 0;
          const val = map[num] ? map[num] + 1 : 1;
          map[num] = val;
          freqMap[val] = freqMap[val] ? freqMap[val] + 1 : 1;
          break;
        }

      case 2:
        {
          freqMap[map[num]] = freqMap[map[num]] ? freqMap[map[num]] - 1 : 0;
          const val = map[num] ? map[num] - 1 : 0;
          map[num] = val;
          freqMap[val] = freqMap[val] ? freqMap[val] + 1 : 1;
          break;
        }

      case 3:
        {
          freqMap[num] ? arr.push(1) : arr.push(0);
          break;
        }

    }
  });

  return arr;
}


const queries = [
  [1, 3], [2, 3],
  [3, 2], [1, 4],
  [1, 5], [1, 5],
  [1, 4], [3, 2],
  [2, 4], [3, 2]
];

const result = freqQuery(queries);
console.log(result);