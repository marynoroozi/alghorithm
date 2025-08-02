/**
 * @param {character[]} chars
 * @return {number}
 */
// var compress = function (chars) {
//   let i = 0;

//   const len = chars.length;
//   const output = [];

//   while (i < len) {
//     let j = i + 1;

//     while (j < len && chars[j] === chars[i]) {
//       j++;
//     }
//     let count = j - i;
//     if (count === 1) {
//       output.push(chars[i]);
//     } else {
//       output.push(chars[i], count);
//     }
//     i = j;
//   }

//   return output;
// };

var compress = function (chars) {
  let read = 0;
  let write = 0;
  const len = chars.length;
  while (read < len) {
    let curChar = chars[read];
    let count = 0;
    while (read < len && chars[read] === curChar) {
      read++;
      count++;
    }
    chars[write] = curChar;
    write++;

    if (count > 1) {
      const countStr = count.toString();
      for (let c of countStr) {
        chars[write] = c;
        write++;
      }
    }
  }
  return write;
};

const chars = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars));
