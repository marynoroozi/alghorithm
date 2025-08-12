/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// var pairSum = function (head) {
//   // 1. first find the middle of the linked list
//   let fast = head;
//   let slow = head;
//   while (fast && fast.next) {
//     fast = fast.next.next;
//     slow = slow.next;
//   }

//   // 2. Then reverse the second half of the linked list
//   let prev = null;
//   while (slow) {
//     let nextNode = slow.next;
//     slow.next = prev;
//     prev = slow;
//     slow = nextNode;
//   }
//   // We can return the prev here that is the head of the second half of the linked list

//   // 3. Travers first and second half simultaneously
//   let maxSum = 0;
//   let first = head;
//   let second = prev;
//   while (second) {
//     maxSum = Math.max(maxSum, first.val + second.val);
//     first = first.next;
//     second = second.next;
//   }
//   return maxSum;
// };

var pairSum = function (head) {
  let stack = [];
  let current = head;

  while (current) {
    stack.push(current.val);
    current = current.next;
  }

  let maxSum = 0;
  current = head;
  let size = stack.length / 2;
  for (let i = 0; i < size; i++) {
    let val = stack.pop();
    maxSum = Math.max(maxSum, current.val + val);
    current = current.next;
  }
  return maxSum;
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

let head = arrayToList([1, 2, 3, 4, 5, 6]);
printList(head);
head = pairSum(head);
printList(head);
