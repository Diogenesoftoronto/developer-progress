class solution:
  def findNumbers(self, nums: List[int]) -> int:
          count = 0
          for index, value in enumerate(nums):
              digit_val = len(str(value)) - 1 
              if digit_val % 2:     
                  count+=1
          return count
class test: 
  def test_find_numbers(self, test_variables) ->