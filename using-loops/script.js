// TODO: Implement the oddNumbers function

function oddNumbers(firstNum, secoundNum) {
  let oddNum = "";

  for (let index = firstNum; index <= secoundNum; index++) {
    if (index % 2 !== 0 && index >= 0) {
      oddNum += index + ",";
    }
  }
  return oddNum;
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// TODO: Implement the charCount function

function charCount(word, char) {
  let result;

  for (let index = 0; index < word.length; index++) {
    const currentChar = word[index];
    if (currentChar === char) {
      result = index;
      break;
    }
    console.log(index);
  }
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
