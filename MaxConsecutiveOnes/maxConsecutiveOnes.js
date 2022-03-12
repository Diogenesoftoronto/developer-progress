const findMaxConsecutiveOnes = function (nums) {
  // define the left and right of the array
  let left = 0;
  let right = nums.length;
  let result = right;
  const cpNums = [...nums];
  // console.table(cpNums)
  //   trying out the recursive solution
  // first create the variables to store the data
  if (nums.length === 0) return null;

//  call the recursive solution
  for(let index = 0; index < cpNums.length; index++) {
    // check if element is 0
    if (cpNums[index] === 0) {
      left = index;
      right = (cpNums.length - 1) - left;
      result = right;

      // check if left side is greater than right side
      if (left > right) {
        result = left;
        console.table({ right, left, index, result, cpNums: cpNums.length });
        console.table(cpNums)
        return result;
      }
      // pop the left side of the array off the stack
      cpNums.splice(0, index + 1);

    }
  };

  // console.table({ right, left, result, cpNums: cpNums.length });

  return result;
};

function recursiveMaxConsecutiveOnes(nums) {
  //  define the base case: the base will be an array of ones 
  

}

// using consoles immense power for good by creating a test tool with just console
const testArrs = [
  { var: [], result: null },
  { var: [1, 0], result: 1 },
  { var: [1, 0, 1], result: 1 },
  { var: [1, 0, 1, 1, 1, 0, 1, 1], result: 3 },
  { var: [1, 1, 0, 1, 1, 1], result: 3 },
  { var: [1, 1, 1, 0, 1, 1], result: 3 },
  { var: [1, 1, 1, 1], result: 3 },
  { var: [0, 0], result: 0 },
  { var: [0, 1], result: 1 },
  { var: [0, 0, 1, 1], result: 1 },
  { var: [0, 0, 1, 1, 0, 0], result: 1 },
  { var: [0, 0, 0, 0], result: 1 },

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
      console.time(
        `benchmark for ${funcName} and test #${index} and the answer is ${test.result}`
      );
      func(test.var);
      console.timeEnd(
        `benchmark for ${funcName} and test #${index} and the answer is ${test.result}`
      );
    });
  };
  benchmarkFunc(func, testVars);
  return result;
};
console.log(
  testFunc(findMaxConsecutiveOnes, testArrs, findMaxConsecutiveOnes.name)
);
