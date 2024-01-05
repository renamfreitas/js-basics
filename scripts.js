/*-----------------------------------------------------------------*/
/*Iteration 1: Find the maximum*/
const numbers = [45, 35 /*, 25, 48, 15, 113*/];

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
const numbersResult = maxOfTwoNumbers(numbers);
document.getElementById(
  "resultado1"
).textContent = `1) O maior número é: ${numbersResult}`;

/*-----------------------------------------------------------------*/
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

/*Usando o metodo reduce*/
const longestWord = words.reduce((longest, currentWord) => {
  // Verifica se o comprimento da palavra atual é maior que a do maior até agora
  return currentWord.length > longest.length ? currentWord : longest;
}, "");
console.log(longestWord);

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
const wordsResult = findLongestWord(words);
document.getElementById(
  "resultado2"
).textContent = `2) A maior string é: ${wordsResult}`;

/*-----------------------------------------------------------------*/
/*Iteration 3.1: Calculate the sum*/
const numbers2 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers2) {
  let sumNumbers = 0;

  for (let i = 0; i < numbers2.length; i++) {
    sumNumbers += numbers2[i];
  }
  return sumNumbers;
}

/*Utilizando o método reduce*/
const sumReduce = numbers2.reduce((soma, index) => {
  return (soma += index);
}, 0);
console.log(sumReduce);

console.log(sumNumbers(numbers2));
const sumResult = sumNumbers(numbers2);
document.getElementById(
  "resultado3"
).textContent = `3.1) A soma do array é: ${sumResult}`;

/*-----------------------------------------------------------------*/
/*Iteration 3.2: A generic sum() function*/
const mixedArr = [
  6,
  12,
  "miami",
  1,
  true,
  "barca",
  "200",
  "lisboa",
  /*{ key: "value" },*/
  8,
  10,
];

function sum(mixedArr) {
  let totalSum = 0;

  for (let i = 0; i < mixedArr.length; i++) {
    const currentValue = mixedArr[i];

    if (typeof currentValue === "string") {
      totalSum += currentValue.length;
    } else if (
      typeof currentValue === "number" ||
      typeof currentValue === "boolean"
    ) {
      totalSum += currentValue;
    } else {
      throw new Error(
        "A matriz deve conter apenas números, strings ou booleanos."
      );
    }
  }
  return totalSum;
}
try {
  const sumResult2 = sum(mixedArr);
  document.getElementById(
    "resultado4"
  ).textContent = `3.2) A soma mista do array é: ${sumResult2}`;
} catch (error) {
  document.getElementById("resultado4").textContent = `${error.message}`;
}
console.log(sum(mixedArr));

/*-----------------------------------------------------------------*/
/*Iteration 4: Calculate the average*/
const sumAverage = sumNumbers(numbers2) / numbers2.length;
console.log(sumAverage);

/*-----------------------------------------------------------------*/
/*Iteration 4.1: Array of numbers*/
const numbers3 = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(numbers3) {
  const sum = numbers3.reduce((sum, currentNumber) => sum + currentNumber, 0);
  return sum / numbers3.length;
}
console.log(averageNumbers(numbers3));

/*-----------------------------------------------------------------*/
/*Iteration 4.2: Array of strings*/
const words2 = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];
function averageWordLength(words2) {
  let totalWords = 0;

  for (let i = 0; i < words2.length; i++) {
    const currentValue = words2[i];

    if (typeof currentValue === "string") {
      totalWords += currentValue.length;
    }
  }
  return totalWords / words2.length;
}
console.log(averageWordLength(words2));

/*Utilizando o metodo reduce*/
const totalLength = words2.reduce((sum, words2) => sum + words2.length, 0);
console.log(totalLength);

/*-----------------------------------------------------------------*/
/*Bonus - Iteration 4.3: A generic avg() function*/
const mixedArr2 = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];
function avg(arr) {
  let totalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];

    if (typeof currentValue === "string") {
      totalSum += currentValue.length;
    } else if (
      typeof currentValue === "number" ||
      typeof currentValue === "boolean"
    ) {
      totalSum += currentValue;
    }
  }
  return totalSum / arr.length;
}
console.log(avg(mixedArr2));

/*-----------------------------------------------------------------*/
/*Iteration 5: Unique arrays*/
const words3 = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquefyArray(words3) {
  const uniqueArray = words3.filter(
    (word, index) => words3.indexOf(word) === index
  );
  return uniqueArray;
}

console.log(uniquefyArray(words3));
