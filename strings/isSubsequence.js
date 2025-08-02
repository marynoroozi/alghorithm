/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//my first *
var isSubsequence = function (s, t) {
  let sI = 0;
  let tI = 0;

  for (tI; tI < t.length; tI++) {
    if (t[tI] === s[sI]) {
      sI++;
    }
  }

  return sI === s.length;
};

const s = "axc";
const t = "ahbgdc";
console.log(isSubsequence(s, t));
