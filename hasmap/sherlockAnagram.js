function sherlockAndAnagrams(str) {
  const map = {};
  let len = str.length;
  for (let i = 0; i < len; i++) {
    let a = 0;
    while (a < len - i) {
      const sub = str.substr(a, i + 1);
      const sortedStr = sub.split('').sort().join('');
      if (map[sortedStr]) map[sortedStr] = map[sortedStr] + 1;
      else map[sortedStr] = 1;
      a++;
    }
  }


  const keys = Object.keys(map);
  len = keys.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    const value = map[keys[i]];
    count = count + (value * (value - 1)) / 2;
  }
  return count;
};

const str = 'abcd';
console.log(sherlockAndAnagrams(str));