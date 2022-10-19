
/*
Floyd's Cycle Finding Algorithm (Tortoise and Hare Algorithm)
    have two pointers, the fast pointer (or "hare") moves at double speed of the slow pointer (or "tortoise"). 
    The idea is that since the cycle must have integer size, 
    when the tortoise and the hare are both in the cycle, their distance difference must also be an integer. 
    Then, each cycle, because of their speed difference, the distance between them constantly reduces until they meet, 
    in which case we know there is a cycle. 
    However, if there is no cycle, they will never meet because the speed of the hare is always faster.
    */

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function next(node) {
    if (node.next == null) return node;
    return node.next;
}

function hasCycle(nodes) {
    let tortoise = nextNode(nodes);
    let hare = nextNode(nextNode(nodes));
    while (tortoise !== hare && hare.next != null) {
        tortoise = nextNode(tortoise);
        hare = nextNode(nextNode(hare));
    }
    return hare.next != null;
}