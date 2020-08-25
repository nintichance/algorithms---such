/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
  //same here, we need a pointer as we traverse the linked list
  //a slower pointer which will always look for the val to be swapped
  //a faster pointer which will traverse until the end of the list
  //in order to traverse a linked list, you must move to the next element
  //in order to swap the order or remove items, you must point your current element to the item after the element to be removed
  //a link list is done with being traversed when next is  null
  //if the value is at the head, I need to point the head to the next node
  //if the value is in the middle, I need to point the node before that node to the node after that node
  //if the value is in the end, I need to point the node before that node to null
  if (head == null) {
      return head
  }
  
  let current = head
  let prev = head
  while(current.next != null) {
      const nextNode = current.next
      const movePrevTo = prev.next 
      if (current.val == val && current == head) {
          head = nextNode
          prev = head
          current = head
      } else if(current.val == val){
          prev.next = current.next
      } else if (current.val != val) {
          prev = current
      } 
      current = nextNode
  }
  
  if (current.val == val && current.next == null) {
          prev.next = null 
  }
  
   if (head.val == val && head.next==null) {
      head = null
      return head
  } 
   
  return head
}