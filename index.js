//Task 1.
/*Написать функцию, которая принимает высоту прямоугольника и 
его ширину и возвращает площадь прямоугольника.*/

/*
const inputHeight = Number(prompt('Type height of the rectangle'));
const inputWidth = Number(prompt('Type width of the rectangle'));

function getRectangleSquare(height, width) {
  return height * width;
}

if (isNaN(inputHeight) || isNaN(inputWidth)) {
  alert('The entered values do not match the conditions.');
} else {
  alert(`Rectangle area = ${getRectangleSquare(inputHeight, inputWidth)}`);
}

*/

//Task 2.
/*Написать функцию, которая принимает диаметр и возвращает длину окружности.*/
/*
const PI_NUMBER = 3.14;

const inputDiameter = Number(prompt('Type diameter'));

function getCircumference(diameter) {
  return diameter * PI_NUMBER;
}

if (isNaN(inputDiameter)) {
  alert('The entered values do not match the conditions.');
} else {
  alert(`Circumference = ${getCircumference(inputDiameter)}`);
}
*/
//Task 3.
/*Написать функцию, которая принимает высоту и диаметр у основания 
циллиндра и возвращает его объем.*/

/*
const PI_NUMBER = 3.14;

const inputHeight = Number(prompt('Type height of the cylinder'));
const inputDiameter = Number(prompt('Type diametr of the cylinder'));

function getCylinderVolume(height, diameter) {
  return PI_NUMBER * ((diameter * diameter) / 4) * height;
}

if (isNaN(inputHeight) || isNaN(inputDiameter)) {
  alert('The entered values do not match the conditions.');
} else {
  alert(`Cylinder Volume = ${getCylinderVolume(inputHeight, inputDiameter)}`);
}
*/
//Task 4.
/*Реализовать конвертер доллара (доллар-грн и грн-доллар, в зависимости от 
переданного модификатора). Курс текущий на момент решения задачи*/
/*
const PriceDollar = 27.5;

const inputModifier = Number(
  prompt('Check convert modifier:\n0 - UAH to USD\n1 - USD to UAH')
);
const inputValue = Number(prompt('Enter the amount you want to convert:'));

function converterMoney(modifier, value) {
  switch (modifier) {
    case 0:
      return value / PriceDollar;
    case 1:
      return value * PriceDollar;
    default:
      return 'Not undesttand';
  }
}

if (isNaN(inputValue)) {
  alert('The entered values do not match the conditions.');
} else {
  alert(converterMoney(inputModifier, inputValue));
}
*/
//Task 5.
/*Выведите все числа в заданном диапазоне, которые делятся на 5. 
(Функция принимает два числа (от и до) и выводит в консоль всё из этого диапазона, что делится на 5).*/
/*
const fromNumber = Number(prompt('Type begin'));
const toNumber = Number(prompt('Type end'));

function devideFive(from, to) {
  for (let index = from; index <= to; index++) {
    if (index % 5 === 0) {
      console.log(index);
    }
  }
}

if (isNaN(fromNumber) || isNaN(toNumber)) {
  alert('The entered values do not match the conditions.');
} else {
  devideFive(fromNumber, toNumber);
}
*/
//Task 6.
/*Реализовать игру FizzBuzz (Fizz buzz это групповая детская игра для обучения правилам деления. 
Начинающий произносит число «1», и каждый следующий игрок прибавляет к предыдущему значению единицу. 
Когда число делится на три оно заменяется на fizz, если число делится на пять, то произносится buzz. 
Числа, делящиеся на три и пять одновременно заменяются на fizz buzz. Сделавший ошибку игрок 
исключается из игры.
Типичная партия в fizz buzz выглядит так:
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, 
Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...)
Диапазон игры - 100 чисел.*/

const fromNumber = 1;
const toNumber = 100;

function getFillBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'Fizz Buzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else {
    return number;
  }
}

for (let index = fromNumber; index <= toNumber; index++) {
  console.log(getFillBuzz(index));
}
