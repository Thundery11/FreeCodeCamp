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
