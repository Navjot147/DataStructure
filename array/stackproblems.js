function balancedParanthese(str) {
  function checkClosure(org, matched) {
    if (org === "(" && matched === ")") return "yes";
    if (org === "{" && matched === "}") return "yes";
    if (org === "[" && matched === "]") return "yes";
    return "no";
  }
  const arr = str.split("");
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      temp.push(arr[i]);
    } else if (checkClosure(temp[temp.length - 1], arr[i]) === "yes") {
      temp.pop();
    } else if (checkClosure(temp[temp.length - 1], arr[i]) === "no") {
      temp.push(arr[i]);
    }
  }
  if (!temp.length) return 1;
  if (temp.length) return 0;
}

function checkRedundancy(str) {
  const arr = str.split("");
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (ar[i] === ")") {
      let top = stack[stack.length - 1];
      stack.pop();
      let flag = true; 
      while (top !== "(") {
        if (top == "+" || top == "-" || top == "*" || top == "/") {
          flag = false;
        }
        top = stack[stack.length - 1];
        st.pop();
      }
      if (flag == true) {
        return true;
      }
    } else {
      stack.push(arr[i]);
    }
  }
}

console.log(balancedParanthese("[{{"));
