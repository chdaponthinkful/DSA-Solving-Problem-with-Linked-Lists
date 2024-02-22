const cycle = (list) => {
 
  if (!list.head) return false;

  let slowPointer = list.head;
  let fastPointer = list.head;

  // exit the loop
  while (fastPointer.next && fastPointer.next.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (slowPointer == fastPointer) return true;
  }
  return false;
};

/// this is thinking fast and slow
/// in python slow slow.next
//           fast = fast.next.next
// this is way better in python

module.exports = cycle;
