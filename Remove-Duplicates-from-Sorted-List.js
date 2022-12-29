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
var deleteDuplicates = function(head) {
    
    let data = head;
    while(data && data.next){
    if(data.val==data.next.val){
        
        data.next=data.next.next;
    }
     else{
         data=data.next
     }   
        
    }
    return head;
};
