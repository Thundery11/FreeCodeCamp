//100
function randomWholeNum() {
  // Only change code below this line

  return Math.floor(Math.random() * 10);
}
//101
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}
//102
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
//103
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);
//104
function checkSign(num) {
  return num === 0 ? "zero" : num < 0 ? "negative" : "positive";
}

checkSign(10);
//105
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
//106
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line
const { today, tomorrow } = HIGH_TEMPERATURES;
// Only change code above this line
