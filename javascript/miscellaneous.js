const makeClassGroups = (arr = [], seq = []) => {
  const map = {};
  const gVal = seq[seq.length - 1];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const val = item[gVal];
    map[val] = map[val] ? map[val].concat([item]) : [item];
  }
  const keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const arr = map[key];
    if (seq.length - 1)
      map[key] = makeClassGroups(arr, seq.slice(0, seq.length - 1));
  }
  return map;
}
const arr = [{ name: "abc", section: '10A', class: 10 }, { name: "ba", section: '9B', class: 9 }, { name: 'ls', section: '10A', class: 10 }, { name: 'yy', section: '10B', class: 10 }, { name: 'rr', section: '9A', class: 9 }, { name: 'afs', section: '5A', class: 5 }, { name: 'bds', section: '5B', class: 5 }, { name: 'tt', section: '10C', class: 10 }];
const seq = ['section', 'class'];
console.log(JSON.stringify(makeClassGroups(arr, seq)));


const result = {
  10: {
    '10A': [{name: 'abc'}],
    '10B': [{name: 'yy'}]
  },
  9: {
    '9A': [{name: 'rr'}],
    '9B': [{name: 'ba'}]
  }
}

