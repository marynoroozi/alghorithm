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
  let fast = head;
  let slow = head.next;
  while (fast !== null) {
    if (fast.next === null) {
      while (slow !== null && slow.next !== null) {
        fast.next = slow;
        slow.next = slow.next.next;
        slow = slow.next;
      }
    } else {
      fast.next = fast.next.next;
      fast = fast.next;
    }
  }
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
