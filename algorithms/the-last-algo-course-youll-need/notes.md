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

