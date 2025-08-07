/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  //   نیازی به تبدیل کردن به آرایه نیست. چون هر کاراکتر از رشته را میتونیم بررسی کنیم
  //   const arr = [...s];
  //   const arr = s.split("")
  //   const arr = Array.from(s)

  let windowMax = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      windowMax++;
    }
  }
  let max = windowMax;

  for (i = k; i < s.length; i++) {
    if (vowels.has(s[i - k])) {
      windowMax--;
    }
    if (vowels.has(s[i])) {
      windowMax++;
    }
    max = Math.max(max, windowMax);
  }
  return max;
};

const s = "abciiidef";
const k = 3;

console.log(maxVowels(s, k));
