function largestAltitude(gain: number[]): number {
  let prefix = 0;
  let max = 0;
  for (let i = 0; i < gain.length; i++) {
    prefix += gain[i];
    max = Math.max(max, prefix);
  }
  return max;
}

// gain = [-5,1,5,0,-7]
