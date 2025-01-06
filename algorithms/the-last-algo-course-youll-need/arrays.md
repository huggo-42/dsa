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

