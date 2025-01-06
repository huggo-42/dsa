# Arrays 
--------------------------------------------------------------------------------

# Array List
    len
    cap
Needs to grow capacity if wants to add something and cap = len

Enqueue:
    needs to shift everyone to the right and add it
Deque:
    needs to shift every single item to the left

Array Lists are really bad with Enqueue and Deque.
But, really good with push and pop.

Interview tip
(the answer should always be it depends)
Pushing and poppingo from the end either a Array List or a Linked List will
work quite well.
But, with Array List you get random access at constant time.
At the same time, it not good when you need to remove from the front.
Getting is bad in Linked Lists, removing from the front is bad on Array Lists.

# Ring Buffer
goes around

# const arr = []
How does JavaScript implements arrays under the hood?
Anyalizing src/array-test.ts

get -> O(1)
push/pop ->  O(1)
un/shift ->  O(N)

That looks like an Array List because:
    Instant access
    Instant pushing and popping in the end
    Linear shifting and unshifting (queue and deque)

`const a = []` is not an array! it is an Array List
It is not an array because it is growable

`slice.(i, j)`
copy to new array from i up to, not included,  j

# Q&A

# Search

## Linear Search
Whats the Big O?
    In the worst case, we go through all the items in the array.
    So, O(N)
    Meaning, time complexity grows if N grows
Important concepts
1. growth is with respect to the input
2. constants are dropped
3. worst case is usually the way we measure

## Binary Search (wiki)[https://en.wikipedia.org/wiki/Binary_search]
Is it ordered?
O(LogN)

Big O trick:
    If the input halves at each step, its likely O(LogN) or O(NLogN)

### Two Crystal Balls Problem
Given two crystal balls that will break if dropped from high enough
distance, determine the exact spot in which will break in the most
optimized way.

Options:
Linear, Binary

[f, f, ..., t, t, ..., t]
0                       n

After the first height a ball breaks, all next heights will brek it.
**So it is ordered**
Binary Search to find the first time it breaks, the Linear Search going
backwards to find at which height it first breaks.

O(N/2)

# QuickSort Algorithm O(NlogN)
**can be N^2 worst case (which is 10..1)
Divide and Conquer!

Split the input into chunks 
Solve those small subsets
Re-split it again, again, ...

p -> pivot

[               ]
0       p       n
   <=   p   >=

[       ] [       ]
    p         p
        ...

                           [0, 31]
                          /  16   \...
                   [0, 15]
           _______/   8   \_______
          /                       \
       [1, 7]                      [9, 15]
      /  4   \                    /  12   \
[1, 3]        [5, 7]       [9, 11]        [13, 15]
  2             6            10              14
1   3         5   7        9   11         13    15
                       
Puts everything bigger than p (pivot) to one side of the array
And everything smaller than p to the other side of the array

# Recursion
What is Recursion?
A function that call itself until the problem is solved.
Usually involves a "base case", which is the point in which the problem is
solved at.

```
foo(n)
    if n = 1:
        ret 1
    ret n + foo(n - 1)
```
Every function has:
    rA -> return address
    rV -> return value
    A  -> arguments

↑      rA   | rV | A |
|   ------------------
|   foo 5   | 5+ | 5 |
|   ------------------
|   foo 4   | 4+ | 4 |
|   ------------------
|   foo 3   | 3+ | 3 |
|   ------------------
|   foo 2   | 2+ | 2 |
|   ------------------
|   foo 1   | 1  | 1 |
after it reaches the base case, it solves itself all the way up
↑      rA   |  rV  | A |
|   --------------------
|   foo 5   | 5+10 | 5 |
|   --------------------
|   foo 4   | 4+6  | 4 |
|   --------------------
|   foo 3   | 3+3  | 3 |
|   --------------------
|   foo 2   | 2+1  | 2 |
|   --------------------
|   foo 1   | 1    | 1 |
ends up returning 15

if when n = 1 throwed a error, that how it would find the stack trace

> Stack trace -> stack of functions that have been called
Err at foo:2
    foo:3
    foo:3

# MazeSolver
# Path Finding: Base case

WALL  -> #
START -> S
END   -> E

[
 "##########E######",
 "#               #",
 "#S###############",
]

Base cases:
1. Its a wall
2. Off the map
3. It's the end (the actual goal)
4. If we have been there

Q: When to use recursion?
R: When it's note able to be done via for loop

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

