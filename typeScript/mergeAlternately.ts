function mergeAlternately(word1: string, word2: string): string {
  let i = 0;
  let merged = "";
  while (i < Math.max(word1.length, word2.length)) {
    merged += (word1[i] ?? "") + (word2[i] ?? "");
    i++;
  }
  return merged;
}
