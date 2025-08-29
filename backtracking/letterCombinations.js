/**
 * @param {string} digits
 * @return {string[]}
 */

//  (Iterative)
var letterCombinations = function (digits) {
  if (!digits) return [];
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let combinations = [""];
  for (i in digits) {
    let digit = digits[i];
    let new_combo = [];
    for (combo of combinations) {
      for (let i = 0; i < map[digit].length; i++) {
        let letter = map[digit][i];
        new_combo.push(combo + letter);
      }
    }
    combinations = new_combo;
  }
  return combinations;
};

// backtracking (Recursive)
var letterCombinations = function (digits) {
  if (!digits) return [];
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let combinations = [];

  const recursiveFunc = (curr, i) => {
    //base case
    if (curr.length === digits.length) {
      combinations.push(curr);
    }
    for (let c of map[digits[i]]) {
      recursiveFunc(curr + c, i + 1);
    }
  };
  recursiveFunc("", 0);
  return combinations;
};
