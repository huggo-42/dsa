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

