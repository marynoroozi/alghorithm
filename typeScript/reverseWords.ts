function reverseWords(s: string): any {
  const updated = s.split(" ").filter((word) => word != "");
  let write = 0;
  let read = updated.length - 1;
  while (write < read) {
    const temp = updated[write];
    updated[write] = updated[read];
    updated[read] = temp;
    read--;
    write++;
  }
  return updated.join(" ");
  console.log(updated);
}

const word = "a good   example";
console.log(reverseWords(word));
