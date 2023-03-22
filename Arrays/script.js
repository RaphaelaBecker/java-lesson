// TODO: Implement the removeItem function

function removeItem(arr, deleteNumber) {
  const arrCopy = structuredClone(arr);
  arrCopy.splice(deleteNumber - 1, 1);

  return arrCopy;
}

const animals = ["Dog", "Cat", "Lion"];
console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]

console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

// TODO: Implement the sumOfCharacters function

function sumOfCharacters(arr) {
  let arrChar = 0;
  for (let index = 0; index < arr.length; index++) {
    if (typeof arr[index] === "string") {
      arrChar += arr[index].length;
    }
  }
  return arrChar;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55

function countSheeps(arrayOfSheep) {
  let present = [true];

  for (let index = 0; index < arrayOfSheep; index++) {
    if (arrayOfSheep[index] === true) {
      present += arrayOfSheep[index].filter;
    }
  }
  return present;
  // TODO May the force be with you
}

const array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
console.log(countSheeps(arrayOfSheep));
