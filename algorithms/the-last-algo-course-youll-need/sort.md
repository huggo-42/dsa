# Bubble Sort
Time complexity: O(N^2)

After each iteration through the whole array, it is guaranteed that the highest
number will be taken all the way to the end.
See 1st iter where 7 ended up in the last position.
So, after each iteration, no need to sort the last number

arr = [1, 3, 7, 4, 2]

1st iter
[1, 3, 7, 4, 2]
7 > 4, swap them
[1, 3, 4, 7, 2]
7 > 2, swap them
[1, 3, 4, 2, 7]

2nd iter (don't need to check last position)
[1, 3, 4, 2,  |   7]
4 > 2, so swap them
[1, 3, 2, 4,  |   7]

3rd iter (don't need to check last 2 positions)
[1, 3, 2,  |  4, 7]
3 > 2, swap them
[1, 2, 3,  |  4, 7]
...
until there's one position to order, in which case any array of 1 item is
always sorted

```typescript
export default function bubble_sort(arr: number[]): void {
    for (let j = arr.length; j > 1; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                const tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
            }
        }
    }
}
```
--------------------------------------------------------------------------------
# Linked List Data Structures, node based data structure

## Singly linked list
A -> B -> C -> D

Node<T>
    val: T
    next?: Node<T>

## Doubly linked list
A -> B
A <- B -> C
B <- C -> D
C <- D

Node<T>
    val: T
    next?: Node<T>
    prev?: Node<T>

A -> B -> C
want to add F between A and B
A -> F
A <- F -> B
F <- B -> C

want to delete C
A -> B
A <- B -> D
B <- D
```
B.next = C.next
D.prev = C.prev
C.prev = C.next = null
```
Deleting and Insertion are constant time O(1)

--------------------------------------------------------------------------------

# QUEUE (FIFO)
Time complexity: O(1)

  A -> B -> C -> D
head            tail
Add E
```
this.tail.next = E
this.tail = E
```
A FIFO QUEUE will pop from the head, so NO NEED for it to be doubly linked
Remove A
```
h = head
head = head.next
h.next = null
return h.val
```

--------------------------------------------------------------------------------

# Stack (FILO)
Add and remove from the head.
Time complexity is constant: O(1)

  A <- B <- C <- D
tail            head

