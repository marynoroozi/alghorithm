/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const absProduct = (input) => {
  return Math.abs(input);
};
var asteroidCollision = function (asteroids) {
  let stack = [];
  let i = 0;
  while (i < asteroids.length) {
    if (stack.length && stack[stack.length - 1] > 0 && asteroids[i] < 0) {
      let inputAbs = absProduct(asteroids[i]);
      while (
        stack.length &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < inputAbs
      ) {
        stack.pop();
      }
      if (
        stack.length &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] === inputAbs
      ) {
        stack.pop();
      }
      // for this test case
      else if (stack.length === 0 || stack[stack.length - 1] < 0) {
        stack.push(asteroids[i]);
      }
      i++;
    } else {
      stack.push(asteroids[i]);
      i++;
    }
  }
  return stack;
};

// var asteroidCollision = function (asteroids) {
//   let write = 0;
//   let read = 1;
//   let n = asteroids.length;
//   for (read; read < n; read++) {
//     if (asteroids[write] > 0 && asteroids[read] < 0) {
//       let readAbs = absProduct(asteroids[read]);
//       while (
//         write >= 0 &&
//         asteroids[write] > 0 &&
//         readAbs > absProduct(asteroids[write])
//       ) {
//         asteroids[write] = asteroids[read];
//         write--;
//       }
//       if (
//         write >= 0 &&
//         asteroids[write] > 0 &&
//         readAbs === absProduct(asteroids[write])
//       ) {
//         write--;
//       } else if (write < 0 || asteroids[write] < 0) {
//         write++;
//         asteroids[write] = asteroids[read];
//       }
//     } else {
//       write++;
//       asteroids[write] = asteroids[read];
//     }
//   }
//   return asteroids.slice(0, write + 1);
// };

const asteroids = [10, 2, -5];
console.log(asteroidCollision(asteroids));
