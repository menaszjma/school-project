function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numbers = [getRandomNumber(0, 5), getRandomNumber(0, 5), getRandomNumber(0, 5)];

console.log(numbers);
