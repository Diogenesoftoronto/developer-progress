const findMaxConsecutiveOnes = function (nums) {
  // first create the variables to store the data
  if (!nums[0]) return null;

  const obj = { prevCountOnes: 0, currCountOnes: 0, result: 0 };
  nums.forEach((element, index) => {
    if (!element) {
      obj.currCountOnes = index;
      if (obj.currCountOnes > obj.prevCountOnes) {
        obj.result = obj.currCountOnes - obj.prevCountOnes;
      }
      obj.prevCountOnes = obj.currCountOnes - obj.prevCountOnes;
      // obj.longest = obj.currCount;
    }
  });
  //  subtract the end of the array from the current count of ones and set result to that number if greater than result
  if (obj.currCountOnes === 0) {
    obj.result = nums.length
  }
  const someVar = (nums.length - 1) - obj.currCountOnes;
  console.log('someVar', someVar);
  if (someVar > obj.result) {
    obj.result = someVar;
  }

  console.log(nums)
  console.table(obj)
  // hey
  return obj.result;
};
// using consoles immense power for good by creating a test tool with just console
const testArrs = [
  { var: [], result: null },
  { var: [1, 0], result: 1 },
  { var: [1, 0, 1], result: 1 },
  { var: [1, 0, 1, 1, 1, 0, 1], result: 2 },
  { var: [1, 1, 0, 1, 1, 1], result: 3 },
  { var: [1, 2, 0, 1, 1], result: null },
  { var: [1, 1, 1], result: 3 },
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
                acc.push(index + 1);
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
      console.time(`benchmark for ${funcName} and test #${index}`);
      func(test.var);
      console.timeEnd(`benchmark for ${funcName} and test #${index}`);
    });
  };
  benchmarkFunc(func, testVars);
  return result;
};
console.log(
  testFunc(findMaxConsecutiveOnes, testArrs, findMaxConsecutiveOnes.name)
);
