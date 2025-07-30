const hashTable = new Map();

hashTable.set("apple", "1$");
// we will get just 2$ in log bcz we don't have duplicate in hash tables
hashTable.set("apple", "2$");

hashTable.set("milk", "3$");

console.log(hashTable.get("apple"));
console.log(hashTable);
