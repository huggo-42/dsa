# Solutions
1. Two Sum
```python3
class Solution(object):
    def twoSum(self, nums, target):
        prevDiffs = {}
        for idx, num in enumerate(nums):
            diff = target - num
            if diff in prevDiffs:
                return [prevDiffs[diff], idx]
            prevDiffs[num] = idx
        return [-1, -1]
```
