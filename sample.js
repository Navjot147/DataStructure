// Array.prototype.customReduce = function (cb, initialValue = 0) {
//   const len = this.length;
//   let accumulator = initialValue;

//   for (let i = 0; i < len; i++) {
//     const item = this[i];
//     accumulator = cb(item, accumulator);
//   }

//   return accumulator;
// };


// const arr = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(arr.myReduce(reducer));


// Promise.prototype.customAll = function (arr = []) {
//   const responses = [];
//   return new Promise((res, rej) => {

//     const checkDone = () => responses.length === arr.length;

//     for (let i = 0; i < arr.length; i++) {
//       const promise = arr[i];
//       promise.then((data) => {
//         responses.push(data);
//         if (checkDone()) { res(responses); }
//       }).catch((err) => {
//         rej(err);
//       });
//     };
//   });
// };

// console.log(Promise.prototype);

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// const promise2 = 42;

// const promise1 = Promise.resolve(3);

// Promise.customAll([promise1, promise3, promise2]).then((values) => {
//   console.log(values); // after 100ms => [3,42,’foo’]
// }).catch(error => {
//   console.log(error);
// });




// function outer(fn) {
//   const map = {};
//   return function () {
//     if (map[arguments]) return map[arguments];
//     else fn(arguments);
//   }
// }


// const memoFn = outer(fn);

// memoFn(1,2); // 100ms
// memoFn(3,4); // 100ms
// memoFn(3,4); // 10ms



// console.log("hello");

// setTimeout(() => {
//   console.log("hello 2");
// }, 1000);
// console.log("world");

// hello
// world
// hello 2


// sayOtherName() //
// sayName() //
// var sayName = () =>{
//     console.log('hello world')
// }

// function sayOtherName(){
//   console.log('world is beautiful')
// }




// var trap = function (height) {


//   let ans = 0;
//   let left_arr = [], right_arr = [];

//   let left_max = 0;
//   for (let i = 0; i < height.length; i++) {
//     const num = height[i];
//     left_max = Math.max(num, left_max);
//     left_arr.push(left_max);
//   }

//   let right_max = height[height.length - 1];
//   right_arr.push(right_max);
//   for (let i = height.length - 2; i >= 0; i--) {
//     const num = height[i];
//     right_max = Math.max(num, right_max);
//     right_arr.push(right_max);
//   }
//   right_arr = right_arr.reverse();
//   for (let i = 0; i < height.length; i++) {
//     const num = height[i];
//     ans = ans + Math.min(left_arr[i], right_arr[i]) - num;
//   }

//   return ans;
// };

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));






/**
 * operators: "+-/*^"
 * equation example : x^y+z*c
 * EquationManager:
 * * createEquation(...args): eqId
 * * overwriteEquation(eqId, ...args): true
 * * deleteEquation(eqId): true // throw error if being used by some equation
 * * mergeEquations(eqId1, eqId2, operator): eqId3
 * * mergeEquations(eqId2, eqId3, operator): eqId4 // reflect changes in eq3 & eq4
 * * overwriteEquation(eqId1, ...args): true //reflect changes if eq1 edited
 * * printEquation(eqId4): string
 * * solveEquation(eqId3, {x:value1, z: value2}): number
 * * solveEquation : overwriteEquation :: 100:1
 * * DON'T USE ANY SHORTCUTS
 **/


function EquationManager() {

  const _equationMap = {}; // collection map for each eqid
  const _operatorRegex = /[+-\/*^]/;
  const _charRegex = /^[a-zA-Z]+$/;

  const isOperator = char => _operatorRegex.test(char);

  const isValidEquation = equation => {
    for (let i = 0; i < equation.length; i++) {
      const char = equation[i];
      if (!(_charRegex.test(char) || _operatorRegex.test(char))) return false;
    }
    return true;
  }

  // just used to solve equation with number and operators in it.
  const solve = str => {
    let expressionIndex = str.lastIndexOf("^");
    if (expressionIndex === -1) expressionIndex = Math.max(str.lastIndexOf("-"), str.lastIndexOf("+"));
    if (expressionIndex === -1) expressionIndex = Math.max(str.lastIndexOf("*"), str.lastIndexOf("/"));
    if (expressionIndex === -1) {
      let num = Number.parseInt(str.trim());
      if (isNaN(num)) {
        throw Exception("not a valid number");
      } else {
        return num;
      }
    } else {
      let leftVal = solve(str.substring(0, expressionIndex).trim());
      let rightVal = solve(str.substring(expressionIndex + 1).trim());
      switch (str[expressionIndex]) {
        case "+":
          return leftVal + rightVal;
        case "-":
          return leftVal - rightVal;
        case "*":
          return leftVal * rightVal;
        case "/":
          return leftVal / rightVal;
        case "^":
          return leftVal ^ rightVal;
      }
    }
  }

  // get equation object from _equationMap collection
  const getEqObject = (eqId) => {
    const eqObj = _equationMap[eqId];
    if (!eqObj) throw `Equation Id ${eqId} doesn't Not Exist`;
    return _equationMap[eqId];
  }

  // Recursively check and combine the equation for nested used equations
  const getEquationValue = obj => {
    if (typeof obj.equation === 'string') return obj.equation;
    const val = `${getEquationValue(obj.equation.eq1)}${obj.equation.operator}${getEquationValue(obj.equation.eq2)}`;
    return val;
  }

  this.createEquation = function (equation) {
    if (!isValidEquation(equation)) throw "Invalid Equation !!";
    const eqId = `${Object.keys(_equationMap).length + 1}_${Date.now()}`;
    // with each eqId key { memo => store the result prev calculated equation, 
    // usedBy=>keep track of equation used by other equations}
    _equationMap[eqId] = { equation, memo: {}, usedBy: [] }
    return eqId;
  }

  this.deleteEquation = function (eqId) {
    const eqObj = getEqObject(eqId);
    if (eqObj.usedBy.length) throw "Equation being used by some other equation."
    return delete _equationMap[eqId];
  }

  this.overwriteEquation = function (eqId, newEq) {
    try {
      if (!isValidEquation(newEq)) throw "Invalid Equation !!";
      const eqObj = getEqObject(eqId);
      eqObj.equation = newEq;
      eqObj.memo = {};
      return true;
    } catch (err) {
      return err || false;
    }
  }

  // merging equation by reference so that we can fetch it recursively whenever required
  this.mergeEquations = function (eqId1, eqId2, operator) {
    if (!isOperator(operator)) throw "Invalid Operator !!";
    const eq1Obj = getEqObject(eqId1);
    const eq2Obj = getEqObject(eqId2);
    const equation = { eq1: eq1Obj, eq2: eq2Obj, operator };
    const newEqId = this.createEquation(equation);
    eq1Obj.usedBy.push(newEqId);
    eq2Obj.usedBy.push(newEqId);
    return newEqId;
  }

  // recursively check and combine all equations
  this.printEquation = function (eqId) {
    const value = getEqObject(eqId);
    return getEquationValue(value);
  }


  // for given edId, recusively combine all the equation and then insert respective variables value
  // if memo already has the ans, then return else calculate the equation with solve method and then save it to memo.
  this.solveEquation = function (eqId, variableValueObj) {
    const obj = getEqObject(eqId);
    let str = getEquationValue(obj).split('');
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!isOperator(char)) str[i] = variableValueObj[char];
    }
    str = str.join('');
    if (obj.memo[str]) return obj.memo[str];
    const ans = solve(str);
    // console.log("answer from eval", eval(str));
    obj.memo[str] = ans;
    return ans;
  }

}

const obj = new EquationManager();
const eqId1 = obj.createEquation("x+yy");
const eqId2 = obj.createEquation("w+e");
const eqId3 = obj.createEquation("q+s");
const eqId4 = obj.mergeEquations(eqId3, eqId2, "-");
const eqId5 = obj.mergeEquations(eqId1, eqId2, "/");
const eqId6 = obj.mergeEquations(eqId4, eqId5, "*");
console.log(obj.printEquation(eqId6));

console.time("FIRST");
let ans = obj.solveEquation(eqId6, { q: 3, s: 1, w: 1, e: 2, x: 5, y: 6 });
console.timeEnd("FIRST");
console.log(ans);

obj.overwriteEquation(eqId1, "q*y");

console.time("SECOND");
ans = obj.solveEquation(eqId6, { q: 3, s: 1, w: 1, e: 2, x: 5, y: 6 });
console.timeEnd("SECOND");
console.log(ans);

console.time("THIRD");
ans = obj.solveEquation(eqId6, { q: 3, s: 1, w: 1, e: 2, x: 5, y: 6 });
console.timeEnd("THIRD");
console.log(ans);


