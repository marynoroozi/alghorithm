/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  //   return s.trim().split(/\s+/).reverse().join(" ");
  const arr = s
    .trim()
    .split(" ")
    .filter((item) => item !== "");
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr.join(" ");
};

const s = "  hello   world  ";
console.log(reverseWords(s));
