function welcomeMsg(Jane) {
  return "Welcome " + Jane;
}

console.log(welcomeMsg("Jane!"));

function welcomeMsg(Marc) {
  return "Welcome " + Marc;
}

console.log(welcomeMsg("Marc!"));

function calcGrossPrice(a, b) {
  return a * b + a;
}

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

function addPositive(a, b) {
  if (a < 0) {
    a *= -1;
  }

  if (b < 0) {
    b *= -1;
  }

  return a + b;
}

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9
