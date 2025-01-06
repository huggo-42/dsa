# Solutions

3. Longest Substring Without Repeating Characters
```python3
class Solution(object):
    def lengthOfLongestSubstring(self, s):
        substring = ""
        longestSubstringLen = 0
        for char in s:
            while char in substring:
                substring = substring[1:]
            substring += char
            longestSubstringLen = max(longestSubstringLen, len(substring))
        return longestSubstringLen
```
