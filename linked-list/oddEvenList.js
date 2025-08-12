/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// تبدیل آرایه به linked list
function arrayToList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}
var oddEvenList = function (head) {
  if (!head || !head.next) return head; // لیست خالی یا فقط یک نود

  let odd = head; // شروع لیست فرد
  let even = head.next; // شروع لیست زوج
  let evenHead = even; // ذخیره شروع لیست زوج برای اتصال بعدا

  while (even && even.next) {
    odd.next = even.next; // پرش به نود بعدی فرد
    odd = odd.next; // حرکت به نود فرد جدید

    even.next = odd.next; // پرش به نود بعدی زوج
    even = even.next; // حرکت به نود زوج جدید
  }

  odd.next = evenHead; // وصل کردن آخرین نود فرد به ابتدای لیست زوج
  return head;
};

function printList(head) {
  let result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result);
}

let head = arrayToList([1, 2, 3, 4, 5]);
printList(head);
head = oddEvenList(head);
printList(head);
