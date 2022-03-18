function findEvenNumbers(nums) {
  let count = 0;
  nums.forEach((element) => {
    element.toString().length % 2 ? count++ : null;
    }
  )
  return count;
};