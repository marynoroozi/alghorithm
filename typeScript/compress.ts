function compress(chars: string[]): number {
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
}
const chars = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars));
