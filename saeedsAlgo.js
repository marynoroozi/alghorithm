var result = (line, maxW, maxN, floor) => {
  let left = 0;
  let right = 0;

  let steps = 0;

  while (left < line.length) {
    let maxWeiWindow = 0;
    let maxNuWindow = 0;
    let floors = new Set();
    right = left;

    while (
      right < line.length &&
      maxNuWindow < maxN &&
      maxWeiWindow + line[right].weight < maxW
    ) {
      if (line[right].floor > floor) return "";
      floors.add(line[right].floor);
      maxWeiWindow += line[right].weight;
      maxNuWindow += 1;
      right++;
    }
    console.log(floors);
    steps = steps + floors.size + 1;
    console.log(steps);
    left = right;
  }
  return steps - 1;
};

const line = [
  { weight: 100, floor: 6 },
  { weight: 300, floor: 2 },
  { weight: 80, floor: 2 },
  { weight: 100, floor: 5 },
  { weight: 120, floor: 3 },
  { weight: 160, floor: 4 },
  { weight: 120, floor: 6 },
  { weight: 250, floor: 2 },
  { weight: 180, floor: 5 },
  { weight: 120, floor: 4 },
];

const maxW = 600;
const maxN = 4;
const floor = 7;

console.log(result(line, maxW, maxN, floor));
