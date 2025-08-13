/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];
  for (let ch of s) {
    if (ch !== "]") {
      stack.push(ch);
    } else {
      let subStr = "";
      while (stack.length && stack[stack.length - 1] !== "[") {
        subStr = stack.pop() + subStr;
      }
      stack.pop();
      let k = "";
      while (stack.length && !isNaN(stack[stack.length - 1])) {
        k = stack.pop() + k;
      }
      stack.push(subStr.repeat(Number(k)));
    }
  }
  return stack.join("");
};

const s = "3[a2[c]]";
console.log(decodeString(s));
