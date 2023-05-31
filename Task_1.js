//Задача 1
const isNumber = (value) => typeof value === 'number' && isFinite(value);

const countEvenOdd = (arr) => {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (isNumber(element)) {
      if (element === 0) {
        zeroCount++;
      } else if (element % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  }

  console.log(`Четных элементов: ${evenCount}`);
  console.log(`Нечетных элементов: ${oddCount}`);
  console.log(`Нулевых элементов: ${zeroCount}`);
};

const array = [1, 2, '3', null, 0, 5]
countEvenOdd(array)