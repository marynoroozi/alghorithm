// 🧠 الگوهای کدی قابل استفاده مجدد
// شمارش فرکانس با Map:
const map = new Map();
for (let ch of str) {
  map.set(ch, (map.get(ch) || 0) + 1);
}

// شمارش فرکانس با Array(26):
const freq = new Array(26).fill(0);
for (let ch of str) {
  freq[ch.charCodeAt(0) - 97]++;
}

// مقایسه‌ی دو فرکانس:
freq1.sort((a, b) => a - b);
freq2.sort((a, b) => a - b);
for (let i = 0; i < 26; i++) {
  if (freq1[i] !== freq2[i]) return false;
}

// بررسی وجود حروف یکسان:
const set1 = new Set(word1);
const set2 = new Set(word2);
for (let ch of set1) {
  if (!set2.has(ch)) return false;
}
