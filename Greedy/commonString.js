
// // // function commonChild(s1, s2) {
// // //   const M = s1.length;
// // //   const N = s2.length;
// // //   // int[M+1][N+1];
// // //   const arr = new Array(M + 1).fill(0).map(() => new Array(N + 1).fill(0));
// // //   for (let i = M - 1; i >= 0; i--) {
// // //     for (let j = N - 1; j >= 0; j--) {
// // //       if (s1.charAt(i) == s2.charAt(j))
// // //         arr[i][j] = arr[i + 1][j + 1] + 1;
// // //       else
// // //         arr[i][j] = Math.max(arr[i + 1][j], arr[i][j + 1]);
// // //     }
// // //   }
// // //   let i = 0, j = 0;
// // //   let count = 0;
// // //   while (i < M && j < N) {
// // //     if (s1.charAt(i) == s2.charAt(j)) {
// // //       count++;
// // //       i++;
// // //       j++;
// // //     }
// // //     else if (arr[i + 1][j] >= arr[i][j + 1]) i++;
// // //     else j++;
// // //   }

// // //   return count;

// // // }

// // // commonChild("abcdefghijk", "SALLY");













// // const getAbsoluteUrl = (url, rPath) => {
// //   let urlSplits = url.split("//");
// //   const protocol = urlSplits[0];
// //   urlSplits = urlSplits[1].split('?');
// //   const query = urlSplits[1];
// //   let wholeUrl = urlSplits[0];
// //   wholeUrl = wholeUrl[wholeUrl.length - 1] !== '/' ? `${wholeUrl}/` : wholeUrl;
// //   let paths = wholeUrl.split('/');
// //   let base = paths[0];
// //   paths = paths.slice(1);
// //   // console.log(protocol, query, base, paths, wholeUrl);

// //   if (rPath) {
// //     if (rPath.includes('..')) {
// //       const rPaths = rPath.split('/');
// //       let count = 0;
// //       for (let i = 0; i < rPaths.length; i++) {
// //         const item = rPaths[i];
// //         if (item == '..') count++;
// //         else {
// //           paths[paths.length - count - 1] = item;
// //         }
// //       }
// //     } else if (rPath.includes("//")) {
// //       base = rPath.split('//')[1];
// //     } else {
// //       paths[paths.length - 1] = rPath;
// //       paths.push("");
// //     }
// //   }

// //   const finalUrl = `${protocol}//${base}/${paths.join('/')}${query ? `?${query}` : ''}`;
// //   return finalUrl;

// // };


// // // getAbsoluteUrl('https://vwo.com/ecommerce-ab-testing?q=navjot', '../test');
// // // getAbsoluteUrl('https://vwo.com/ecommerce-ab-testing?q=navjot', '../test');

// // // // getAbsoluteUrl('https://vwo.com/ecommerce-ab-testing?q=navjot', '//google.com');


// // // getAbsoluteUrl('https://vwo.com?q=hello')   //=> https://vwo.com/?q=hello"
// // // getAbsoluteUrl('https://vwo.com/ecommerce-ab-testing/', 'test')      //=> https://vwo.com/ecommerce-ab-testing/test
// // // getAbsoluteUrl('https://vwo.com/ecommerce-ab-testing/student-detail', '../test/../test1');   //=> https://vwo.com/test
// // // getAbsoluteUrl('https://vwo.com/ecommerce-ab-testing/', '//google.com')   //=> https://google.com
// // // getAbsoluteUrl(document.baseURI, 'test')    //=> https://vwo.com/test (Assuming you are running this function on https://vwo.com)


// // // const getInterpolatedString = (str, obj) => {
// // //   let finalString = '';
// // //   let matched = false;
// // //   let tempStr = '';
// // //   const len = str.length;
// // //   for (let i = 0; i < len; i++) {
// // //     const char = str[i];
// // //     if (char == '{' && str[i + 1] == '{') {
// // //       matched = true;
// // //       i = i + 1;
// // //     } else if (char == '}' && str[i + 1] == '}') {
// // //       matched = false;
// // //       finalString =  obj[tempStr] ? finalString + obj[tempStr] : finalString;
// // //       tempStr = '';
// // //       i = i + 1;
// // //     } else if (matched) {
// // //       tempStr = tempStr + char;
// // //     } else {
// // //       finalString = finalString + char;
// // //     }
// // //   }

// // //   return finalString;

// // // }


// // // getInterpolatedString('Hi {{name}} from {{company}} Address {hous}}', { name: 'Nitish', company: 'Wingify', hous: 'navjot' })



// // // function sortByLength(arr = []) {
// // //   const swap = (i, j) => {
// // //     const temp = arr[i];
// // //     arr[i] = arr[j];
// // //     arr[j] = temp;
// // //   }


// // //   const partition = (l, h) => {
// // //     const pivot = arr[l].length;
// // //     let i = l, j = h;

// // //     while (i < j) {
// // //       i = i + 1;
// // //       while (arr[i].length <= pivot) { i++; }
// // //       while (arr[j].length > pivot) { j--; }
// // //       if (i < j) {
// // //         swap(i, j);
// // //       }
// // //     }

// // //     swap(l, j);
// // //     return j;
// // //   }

// // //   const QuickSort = (l, h) => {
// // //     if (l < h && arr[l].length !== arr[h].length) {
// // //       const pivot = partition(l, h);
// // //       QuickSort(l, pivot);
// // //       QuickSort(pivot + 1, h);
// // //     }
// // //   }

// // //   QuickSort(0, arr.length - 1);

// // //   return arr;
// // // }


// // // sortByLength(['You', 'are', 'an', 'amazing', 'engineer']);



// // const memoize = (fn) => {
// //   const cacheMap = {};

// //   return function () {
// //     const args = Array.from(arguments);
// //     const key = args.join("_");
// //     if (cacheMap[key]) {
// //       return cacheMap[key];
// //     } else {
// //       const result = fn(...args);
// //       cacheMap[key] = result;
// //       return result;
// //     }
// //   }
// // }

// // const getDoubleOfNumber = function (number) { return 2 * number; }

// // const memoizedGetDoubleOfNumber = memoize(getDoubleOfNumber);

// // const result = memoizedGetDoubleOfNumber(4);
// // memoizedGetDoubleOfNumber(8);
// // memoizedGetDoubleOfNumber(12);
// // memoizedGetDoubleOfNumber(4);
// // memoizedGetDoubleOfNumber(8);
// // console.log(result);
















// var reverseWords = function (s) {
//   s = s.join('').split(' ');
//   let start = 0, end = s.length - 1;
//   while (start <= end) {
//     const temp = s[start];
//     s[start] = s[end];
//     s[end] = temp;
//     start++; end--;
//   }
//   s = s.join(' ').split('');
//   console.log(s);
// };


// var lengthOfLongestSubstring = function (s) {
//   let temp = '', arr = [], map = {}, len = s.length, MAX_LENGTH = 0;

//   for (i = 0; i < len; i++) {
//     const char = s[i];
//     if (map[char]) {
//       arr.push(temp);
//       while (map[char] !== undefined) {
//         delete map[temp[0]];
//         temp = temp.substring(1);
//       }
//     }
//     temp = temp + char;
//     map[char] = 1;
//   }
//   arr.push(temp);

//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     if (item.length > MAX_LENGTH) {
//       MAX_LENGTH = item.length;
//     }
//   }
//   return MAX_LENGTH;
// };


// var maxArea = function (height) {
//   const len = height.length;
//   let i = 0, j = len - 1, max_water = 0;

//   while (i < j) {
//     let area = 0;
//     if (height[i] <= height[j]) {
//       area = height[i] * (j - i);
//       i++;
//     } else if (height[j] <= height[i]) {
//       area = height[j] * (j - i);
//       j--;
//     }
//     max_water = area > max_water ? area : max_water;
//   }

//   return max_water;
// };

// // console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));


// var romanToInt = function (s) {
//   let sum = 0, len = s.length;
//   const map = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
//   };
//   for (let i = 0; i < len; i++) {
//     const char = s[i];
//     if (map[char] < map[s[i + 1]]) {
//       sum = sum + map[s[i + 1]] - map[char];
//       i = i + 1;
//     } else {
//       sum = sum + map[s[i]];
//     }
//   }
//   return sum;
// };
// // console.log(romanToInt("III"));


// var threeSum = function (nums) {
//   const len = nums.length, list = [], map = {};
//   nums = nums.sort((a, b) => { if (a < b) return -1; if (a > b) return 1; if (a == b) return 0; });
//   for (let i = 0; i < len; i++) {
//     const num = nums[i];
//     let l = i + 1, h = len - 1;
//     while (l < h) {
//       let sum = nums[l] + nums[h] + num;
//       if (sum > 0) h--;
//       else if (sum < 0) l++;
//       else {
//         const arr = [num, nums[l++], nums[h--]];
//         const key = arr.join('_');
//         if (!map[key]) {
//           list.push(arr);
//           map[key] = 1;
//         }
//       }
//     }
//   }
//   return list;
// };


// var threeSumClosest = function (nums, target) {
//   const len = nums.length, list = [];
//   let closest = Infinity;
//   nums = nums.sort((a, b) => { if (a < b) return -1; if (a > b) return 1; if (a == b) return 0; });
//   for (let i = 0; i < len; i++) {
//     const num = nums[i];
//     let l = i + 1, h = len - 1;
//     while (l < h) {
//       let sum = nums[l] + nums[h] + num;
//       if (Math.abs(sum - target) < Math.abs(closest - target)) closest = sum;
//       if (sum > target) h--;
//       else l++;
//     }
//   }
//   return closest;
// };

// // console.log(threeSumClosest([-1, 2, 1, -4], 1));


// // public List < List < Integer >> fourSum(int[] nums, int target) {
// //   Arrays.sort(nums);
// //   return kSum(nums, target, 0, 4);
// // }
// // public List < List < Integer >> kSum(int[] nums, int target, int start, int k) {
// //   List < List < Integer >> res = new ArrayList <> ();
// //   if (start == nums.length || nums[start] * k > target || target > nums[nums.length - 1] * k)
// //     return res;
// //   if (k == 2)
// //     return twoSum(nums, target, start);
// //   for (int i = start; i < nums.length; ++i)
// //   if (i == start || nums[i - 1] != nums[i])
// //     for (var set: kSum(nums, target - nums[i], i + 1, k - 1)) {
// //       res.add(new ArrayList <> (Arrays.asList(nums[i])));
// //       res.get(res.size() - 1).addAll(set);
// //     }
// //   return res;
// // }



// // function twoSum(nums, target, start) {
// //   const res = [];
// //   const s = {}
// //   for (let i = start; i < nums.length; ++i) {
// //     const num = nums[i];
// //     if (s[target - num]) {
// //       res.push([(target - num), num]);
// //     }
// //     s[num] = true;
// //   }
// //   return res;
// // }

// // console.log(twoSum([6, 4, 3, 5, 7, 5], 10, 0));

// var findSubstring = function (s, words) {
//   const oneWordLength = words[0].length, slen = s.length;
//   const ans = [];
//   let tempWords = [...words];
//   for (let i = 0; i < slen; i++) {
//     let j = i;
//     while (tempWords.length || (j + oneWordLength) < slen) {
//       const word = s.substr(j, oneWordLength);
//       const sIndex = tempWords.findIndex(item => item === word);
//       if (sIndex > -1) {
//         tempWords.splice(sIndex, 1);
//         j = j + oneWordLength;
//       } else {
//         break;
//       }
//     }
//     if (!tempWords.length) ans.push(i);
//     tempWords = [...words];
//   }
//   return ans;
// };


// // console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"]));


// var spiralOrder = function (matrix) {
//   let res = [];

//   if (matrix.length == 0) {
//     return res;
//   }

//   let rowBegin = 0;
//   let rowEnd = matrix.length - 1;
//   let colBegin = 0;
//   let colEnd = matrix[0].length - 1;

//   while (rowBegin <= rowEnd && colBegin <= colEnd) {
//     //right
//     for (let i = colBegin; i <= colEnd; i++) {
//       res.push(matrix[rowBegin][i])
//     }
//     ++rowBegin;
//     //bottom
//     for (let i = rowBegin; i <= rowEnd; i++) {
//       res.push(matrix[i][colEnd])
//     }
//     --colEnd;
//     //scan bottom right to left
//     if (rowBegin <= rowEnd) {
//       for (let i = colEnd; i >= colBegin; i--) {
//         res.push(matrix[rowEnd][i])
//       }
//     }
//     --rowEnd;
//     //scan left to top
//     if (colBegin <= colEnd) {
//       for (let i = rowEnd; i >= rowBegin; i--) {
//         res.push(matrix[i][colBegin])
//       }
//     }
//     ++colBegin;
//   }

//   return res;
// }


// // console.log(spiralOrder([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));

// var findDisappearedNumbers = function (nums) {
//   const len = nums.length;

//   for (let i = 0; i < len; i++) {
//     const newIndex = Math.abs(nums[i]) - 1;
//     if (nums[newIndex] > -1) {
//       nums[newIndex] *= -1;
//     }
//   }
//   const result = [];
//   for (let i = 1; i <= nums.length; i++) {
//     const num = nums[i - 1];

//     if (num > 0) result.push(i)

//   }
//   return result;
// };

// // console.log(findDisappearedNumbers([1, 1]));

// var largeGroupPositions = function (s) {
//   const res = [];
//   let temp = [0];

//   for (let i = 1; i < s.length; i++) {
//     const char = s[i];
//     if (char === s[i - 1]) temp.push(i);
//     else { res.push(temp); temp = [i]; }
//   }
//   res.push(temp);
//   return res.filter(arr => arr.length >= 3).map(arr => [arr[0], arr[arr.length - 1]]);

// };

// // console.log(largeGroupPositions("aaa"));


// ///////////////// LINKED LIST ///////////////////////////
// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }
// var addTwoNumbers = function (l1, l2) {
//   const head = new ListNode(0);
//   const p = l1, q = l2, obj = head;
//   let carry = 0;
//   while (p !== null || q !== null) {
//     let sum = carry + (q.val || 0) + (p.val || 0);
//     carry = sum / 10;
//     obj.next = new ListNode(sum % 10);
//     if (p != null) p = p.next;
//     if (q != null) q = q.next;
//     obj = obj.next;
//   }

//   if (carry > 0) {
//     obj.next = new ListNode(carry);
//   }
//   return head.next;

// }


// // function dos() {
// //   return new Promise((res, rej)=>{
// //     rej();
// //     res();
// //   });
// // }

// // dos().then(()=>{
// //   console.log('t1')
// // }).catch(()=>{
// // console.log('catch1')
// // }).then(()=>{
// //   console.log('t11')
// // })



// // var x = 1;
// // var foo = {
// //   x: 2,
// //   foo: {
// //     x: 1,
// //     foo: function () {
// //       return this.x;
// //     }
// //   }
// // }

// // var go = foo.foo.foo;

// // console.log(go(), foo.foo.foo());


// var longestPalindrome = function (s) {
//   var dp = []; //dp[i][j] -> is s[i:j] a palindromic string
//   for (var i = 0; i < s.length; i++) {
//     dp[i] = Array(s.length).fill(false);
//     dp[i][i] = true;
//   }
//   console.log(dp);
//   var left = 0;
//   var right = 0;
//   for (var i = s.length - 1; i >= 0; i--) {
//     for (var j = i + 1; j < s.length; j++) {
//       if (s[i] === s[j]) {
//         if (j - i === 1 || dp[i + 1][j - 1]) {
//           dp[i][j] = true;
//           if (j - i > right - left) {
//             right = j;
//             left = i;
//           }
//         }
//       }
//     }
//   }
//   return s.slice(left, right + 1);
// };

// // console.log(longestPalindrome('amksaabccba'));

// 5 - '2kg'
// 17 - '1kg'

// function gemstones(arr) {
//   // Write your code here
//   const map = {};

//   function addToMap(char, k) {
//     if (map[char]) {
//       const { index, count } = map[char];
//       if (index !== k) {
//         map[char].count = count + 1;
//         map[char].index = k;
//       }
//     } else {
//       map[char] = { count: 1, index: k };
//     }
//   }

//   for (let k = 0; k < arr.length; k++) {
//     const str = arr[k];
//     let i = 0, j = str.length - 1;
//     while (i <= j) {
//       const char = str[i];
//       addToMap(char, k);
//       if (i !== j) {
//         const char = str[j];
//         addToMap(char, k);
//       }
//       i++; j--;
//     }
//   }
//   const keys = Object.keys(map);
//   let count = 0;
//   for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     if (map[key].count === arr.length) {
//       count++;
//     }
//   }
//   return count;
// }

// // const s = ['abcdde', 'baccd', 'eeabg'];
// // ['abc', 'abc', 'bc'];
// // console.log(gemstones(s));


// function beautifulBinaryString(b) {
//   // Write your code here
//   if (b.length < 3) return 0;
//   const pattern = '010';
//   let index = b.indexOf(pattern);
//   let i = 0;
//   while (index > -1) {
//     i++;
//     b = b.split('');
//     b[index + 2] = '1';
//     b = b.join('');
//     index = b.indexOf(pattern);
//   }
//   return i;
// }


// function theLoveLetterMystery(s) {
//   // Write your code here
//   let i = 0, j = s.length - 1;
//   let count = 0;
//   while (i < j) {
//     if (s[i] !== s[j]) {
//       const n1 = s[i].codePointAt();
//       const n2 = s[j].codePointAt();
//       if (n2 > n1) {
//         const diff = (n2 - n1);
//         count = count + diff;
//         // s[j] = String.fromCharCode(n2 - diff);
//       } else {
//         const diff = (n1 - n2);
//         count = count + diff;
//         // s[i] = String.fromCharCode(n1 - diff);
//       }
//     }
//     i++;j--;
//   }
//   return count;
// }

// console.log(theLoveLetterMystery('abcba'));