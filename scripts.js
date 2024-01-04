/*Iteration 1: Find the maximum*/
const numbers = [45, 35];

function maxOfTwoNumbers(numbers) {
  let maxNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
}
console.log(maxOfTwoNumbers(numbers));

/*Iteration 2: Find the longest word*/
/*Utilizei a mesma ideia do exerc1, mas poderia usar o reduce*/
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "crocodil3",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  let stringLength = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > stringLength.length) {
      stringLength = words[i];
    }
  }
  return stringLength;
}
console.log(findLongestWord(words));

/*Iteration 3: Calculate the sum*/
const numbers2 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers2) {
  let sumNumbers = 0;

  for (let i = 0; i < numbers2.length; i++) {
    sumNumbers += numbers2[i];
  }
  return sumNumbers;
}

console.log(sumNumbers(numbers2));
