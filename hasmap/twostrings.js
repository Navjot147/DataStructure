function twoStrings(s1, s2) {
  const map = {};

  for (let i = 0; i < s1.length; i++) {
    map[s1[i]] = 1;
  }
  let result = 'NO';
  for (let i = 0; i < s1.length; i++) {
    if (map[s2[i]]) { result = 'YES'; break; }
  };

  return result;

};

// const s1 = 'hello', s2 = 'world';
const s1 = 'hi', s2 = 'world';
console.log(twoStrings(s1, s2));