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

