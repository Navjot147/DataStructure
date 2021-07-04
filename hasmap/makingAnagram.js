function makeAnagram(a, b) {
  // Write your code here

  const map = {};
  let deletedCount = 0;
  for (let i = 0; i < a.length; i++) {
    const item = a[i];
    if (map[item]) map[item] = map[item] + 1;
    else map[item] = 1;
  }

  for (let i = 0; i < b.length; i++) {
    const item = b[i];
    if (map[item]) {
      map[item] = map[item] - 1;
    }
    else {
      deletedCount++;
    }
  }

  const keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (map[key]) deletedCount = deletedCount + map[key];
  }

  return deletedCount;

}

// console.log(makeAnagram('bacdc', 'dcbac'));

// console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'));




function alternatingCharacters(s) {
  // Write your code here
  let newStr = '';
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (item === newStr[newStr.length - 1]) count++;
    else newStr = newStr + item;
  }

  return count;
}

// console.log(alternatingCharacters('ABABABAB'));


function isValid(s) {
  // Write your code here
  // SOLUTION PSEDUO: maintain two maps for frquency and values, and check length of freq for anagram.
  const map = {};
  const freq = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) {
      map[char] = map[char] + 1;
    }
    else {
      map[char] = 1;
    }
  }

  const keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (freq[map[key]]) {
      freq[map[key]] = freq[map[key]] + 1;
    }
    else {
      freq[map[key]] = 1;
    }
  }

  let freq_keys = Object.keys(freq);
  if (freq_keys.length == 1) return 'YES';
  if (freq_keys.length > 2) return 'NO';
  freq_keys = freq_keys.map(item => parseInt(item));
  if (freq_keys.some(item => item == 1) && freq[1] == 1) return 'YES';
  if (Math.max(...freq_keys) - Math.min(...freq_keys) == 1) {
    if (freq_keys.some(item => item == 1)) {
      if (freq[1] > 1) {
        return 'NO';
      }
      return 'YES';
    }
    return 'YES';
  }

  return 'NO';

}


// console.log(isValid('ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd'));
// console.log(isValid('aaaaabc'));
// console.log(isValid('xxxaabbccrry'));
// console.log(isValid('aabbcd'));
// console.log(isValid('aabbccddeefghi'));
// console.log(isValid('abcdefghhgfedecba'));

const allSame = (s) => {
  const char = s[0];
  for (let i = 0; i < s.length; i++) {
    const _char = s[i];
    if (_char != char) return false;
  }
  return true;
}




function substrCount(n, s) {
  // SOL: make two array left and right and check min freq in that and update count.
  const larr = new Array(n);
  const rarr = new Array(n);
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (i == 0) larr[i] = 1;
    else {
      if (s[i] == s[i - 1]) larr[i] = larr[i - 1] + 1;
      else larr[i] = 1;
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    if (i == (n - 1)) rarr[i] = 1;
    else {
      if (s[i] == s[i + 1]) rarr[i] = rarr[i + 1] + 1;
      else rarr[i] = 1;
    }
  }


  for (let i = 0; i < n; i++) {
    count++;
    if (i > 0 && i < n - 1) {

      if (s[i] == s[i - 1]) count = count + larr[i] - 1;
      else if (s[i + 1] == s[i - 1] && s[i] != s[i - 1]) {
        count = count + Math.min(larr[i - 1], rarr[i + 1]);
      }
    }

    if (i == n - 1 && s[i] == s[i - 1]) {
      count = count + larr[i] - 1;
    }
  }

  return count;

}

// console.log(substrCount(4, 'aaaa'));

