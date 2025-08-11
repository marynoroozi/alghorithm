var reverseVowels = function (s: string): string {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let i = 0;
  const arr = Array.from(s);
  let j = s.length - 1;

  while (i < j) {
    while (i < j && !vowels.has(arr[i])) i++;
    while (i < j && !vowels.has(arr[j])) j--;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr.join("");
};

const s = "IceCreAm";
console.log(reverseVowels(s));
