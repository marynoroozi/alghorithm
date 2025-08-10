/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function arrayToLinkedList(arr) {
  let dummy = new ListNode(0); // یک نود موقت (کمکی)
  let curr = dummy; // اشاره‌گر برای پیمایش لیست

  for (let num of arr) {
    curr.next = new ListNode(num); // یک نود جدید با مقدار num می‌سازیم
    curr = curr.next; // اشاره‌گر را به نود جدید می‌بریم
  }

  return dummy.next; // اولین نود واقعی لیست
}
var reverseList = function (head) {
  let curr = head;
  let prev = null;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

function linkedListToArray(head) {
  let arr = [];
  let curr = head; // شروع از اولین نود

  while (curr) {
    // تا وقتی به null نرسیدیم
    arr.push(curr.val); // مقدار نود رو به آرایه اضافه کن
    curr = curr.next; // برو به نود بعدی
  }

  return arr;
}

const head = arrayToLinkedList([1, 2, 3, 4, 5]);
const reversed = reverseList(head);
console.log(linkedListToArray(reversed)); // [5, 4, 3, 2, 1]
