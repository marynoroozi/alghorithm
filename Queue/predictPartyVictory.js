/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let arr = Array.from(senate);
  const n = arr.length;
  let radianQue = [];
  let direQue = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] === "R") {
      radianQue.push(i);
    } else {
      direQue.push(i);
    }
  }
  while (radianQue.length > 0 && direQue.length > 0) {
    let d = direQue.shift();
    let r = radianQue.shift();
    if (r < d) {
      radianQue.push(r + n);
    } else {
      direQue.push(d + n);
    }
  }
  return radianQue.length ? "Radiant" : "Dire";
};

const senate = "RD";
console.log(predictPartyVictory(senate));
