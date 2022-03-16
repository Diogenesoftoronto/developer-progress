const findMaxConsecutiveOnes = function (nums) {
  // define the left and right of the array
  let max = 0;
  let prev = 0;
  let current = 0;
  // if (nums.length === 0) return null;
  console.table(nums)
  
  for (let index = 0; index < nums.length; index++) {
    current++; 
    // check if element is 0
    if (!nums[index]) {
      current -= 1
      // consider midpoints and that i need to return a count
      // check if left side is greater than right side
      // need to return a count and not an index
      console.table({index, max, prev, nums: nums.length, console: 1, current });
      // prev = current;
        current = 0;
      
    }
    if (current > max) {
        max = current;
        console.table({index, max, prev, nums: nums.length , console: 2});
        
      }
  }

  // console.table({ right, left, result, cpNums: cpNums.length });
  return max;
};

function recursiveMaxConsecutiveOnes(nums) {
  //  define the base case: the base will be an array of ones
  let left = 0;
  let right = nums.length;
  let result = right;
  const cpNums = [...nums];
}

// using consoles immense power for good by creating a test tool with just console
const testArrs = [
  // { var: [], result: null },
  { var: [1, 0], result: 1 },
  { var: [1, 0, 1], result: 1 },
  { var: [1, 0, 1, 1, 1, 0, 1, 1], result: 3 },
  { var: [1, 1, 0, 1, 1, 1], result: 3 },
  { var: [1, 1, 1, 0, 1, 1], result: 3 },
  { var: [1, 1, 1, 1], result: 4 },
  { var: [0, 0], result: 0 },
  { var: [0, 1], result: 1 },
  { var: [0, 0, 1, 1], result: 2 },
  { var: [0, 0, 1, 1, 0], result: 2 },
  { var: [0, 0, 1], result: 1 },
];
var testFunc = function (func, testVars, funcName) {
  // conditional if tests pass
  // result will be an object with an a boolean and a message.
  testHelperResults = (func, testVars) => {
    let resultArrBool = testVars.map((test) => {
      return func(test.var) === test.result;
    });
    // if test passes then result of true will be pushed

    const result = resultArrBool.every((ele) => ele === true)
      ? { msg: `all tests for ${funcName} passed`, results: "passed" }
      : {
          msg: `all tests for ${funcName} did not pass`,
          results: `These tests did not pass: ${resultArrBool.reduce(
            (acc, ele, index) => {
              if (ele === false) {
                acc.push(index);
              }
              return acc;
            },
            []
          )}`,
        };
    return result;
  };

  const result = testHelperResults(func, testVars);
  // let msg = "🙏 pls work 😟";
  // let expectation = true;
  const benchmarkFunc = (func, testVars) => {
    testVars.forEach((test, index) => {
      funcResult = func(test.var);
      console.time(
        `benchmark for ${funcName} test #${index}: answer is ${test.result}, result is ${funcResult}`
      );
      func(test.var);
      console.timeEnd(
        `benchmark for ${funcName} test #${index}: answer is ${test.result}, result is ${funcResult}`
      );
    });
  };
  benchmarkFunc(func, testVars);
  return result;
};
console.log(
  testFunc(findMaxConsecutiveOnes, testArrs, findMaxConsecutiveOnes.name)
);
