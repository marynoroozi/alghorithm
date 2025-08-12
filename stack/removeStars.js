/**
 * @param {string} s
 * @return {string}
 */
// var removeStars = function (s) {
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== "*") {
//       stack.push(s[i]);
//     } else {
//       stack.pop();
//     }
//   }
//   return stack.join("");
// };

var removeStars = function (s) {
  let read = 0;
  let write = 0;
  let array = Array.from(s);
  const n = array.length;
  for (read; read < n; read++) {
    if (array[read] !== "*") {
      array[write] = array[read];
      write++;
    } else {
      write--;
    }
  }
  return array.slice(0, write).join("");
};
const s = "leet**cod*e";
console.log(removeStars(s));
