const size = 25;
let result;

if (size > 10 && size < 20) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

// TODO: Implement the oddEven function

function oddEven(number) {
  let result;
  //check if the number is even
  if (number % 2 === 0) {
    console.log(`${number} is even`);
    result = "even";
  }

  // if the number is odd
  else {
    console.log(`${number} is odd`);
    result = "odd";
  }

  return result;
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

// TODO: Implement the oldYoung function

function oldYoung(age) {
  let oldYoung;

  if (age > 0 && age < 16) {
    oldYoung = "children";
  } else if (age > 16 && age < 50) {
    oldYoung = "young person";
  } else if (age > 50) {
    oldYoung = "elder person";
  } else if (age < 0) {
    oldYoung = "invalid Parameter";
  }

  return oldYoung;
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
