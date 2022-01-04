'use strict';
const PI_NUMBER = 3.14;
const PriceDollar = 27.5;

/*Task 1. Написать функцию, которая принимает высоту прямоугольника и 
его ширину и возвращает площадь прямоугольника.*/

function starTask1() {
  const inputHeight = Number(prompt('Type height of the rectangle'));
  const inputWidth = Number(prompt('Type width of the rectangle'));

  if (isNaN(inputHeight) || isNaN(inputWidth)) {
    alert('The entered values do not match the conditions.');
  } else {
    alert(`Rectangle area = ${getRectangleSquare(inputHeight, inputWidth)}`);
  }
}

/*Task 2. Написать функцию, которая принимает диаметр и возвращает длину окружности.*/

function starTask2() {
  const inputDiameter = Number(prompt('Type diameter'));

  if (isNaN(inputDiameter)) {
    alert('The entered values do not match the conditions.');
  } else {
    alert(`Circumference = ${getCircumference(inputDiameter)}`);
  }
}

/*Task 3. Написать функцию, которая принимает высоту и диаметр у основания 
циллиндра и возвращает его объем.*/

function starTask3() {
  const inputHeight = Number(prompt('Type height of the cylinder'));
  const inputDiameter = Number(prompt('Type diametr of the cylinder'));

  if (isNaN(inputHeight) || isNaN(inputDiameter)) {
    alert('The entered values do not match the conditions.');
  } else {
    alert(`Cylinder volume = ${getCylinderVolume(inputHeight, inputDiameter)}`);
  }
}

/*Task 4. Реализовать конвертер доллара (доллар-грн и грн-доллар, в зависимости от 
переданного модификатора). Курс текущий на момент решения задачи*/

function starTask4() {
  const inputModifier = Number(
    prompt('Check convert modifier:\n0 - UAH to USD\n1 - USD to UAH')
  );
  const inputValue = Number(prompt('Enter the amount you want to convert:'));

  if (isNaN(inputValue)) {
    alert('The entered values do not match the conditions.');
  } else {
    switch (inputModifier) {
      //0 - UAH to USD
      case 0:
        alert(`${inputValue} UAH = ${convertUAHtoUSD(inputValue)} USD`);
        break;
      //1 - USD to UAH
      case 1:
        alert(`${inputValue} USD = ${convertUSDtoUAH(inputValue)} UAH`);
        break;
      default:
        alert('There is no such modifier!!!');
    }
  }
}

/*Task 5. Выведите все числа в заданном диапазоне, которые делятся на 5. 
(Функция принимает два числа (от и до) и выводит в консоль всё из этого диапазона, что делится на 5).*/

function starTask5() {
  const fromNumber = Number(prompt('Type begin'));
  const toNumber = Number(prompt('Type end'));

  if (isNaN(fromNumber) || isNaN(toNumber)) {
    alert('The entered values do not match the conditions.');
  } else {
    for (let index = fromNumber; index <= toNumber; index++) {
      if (getModuleFive(index)) {
        console.log(index);
      }
    }
  }
}

/*Task 6. Реализовать игру FizzBuzz (Fizz buzz это групповая детская игра для обучения правилам деления. 
Начинающий произносит число «1», и каждый следующий игрок прибавляет к предыдущему значению единицу. 
Когда число делится на три оно заменяется на fizz, если число делится на пять, то произносится buzz. 
Числа, делящиеся на три и пять одновременно заменяются на fizz buzz. Сделавший ошибку игрок 
исключается из игры.
Типичная партия в fizz buzz выглядит так:
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, 
Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...)
Диапазон игры - 100 чисел.*/

function starTask6() {
  for (let index = 1; index <= 100; index++) {
    if (getModuleThree(index) && getModuleFive(index)) {
      console.log('Fizz Buzz');
    } else if (getModuleThree(index)) {
      console.log('Fizz');
    } else if (getModuleFive(index)) {
      console.log('Buzz');
    } else {
      console.log(index);
    }
  }
}

function getRectangleSquare(height, width) {
  return height * width;
}

function getCircumference(diameter) {
  return diameter * PI_NUMBER;
}

function getCylinderVolume(height, diameter) {
  return PI_NUMBER * ((diameter * diameter) / 4) * height;
}

function convertUAHtoUSD(value) {
  return value / PriceDollar;
}

function convertUSDtoUAH(value) {
  return value * PriceDollar;
}

function getModuleFive(value) {
  return value % 5 === 0 ? true : false;
}

function getModuleThree(value) {
  return value % 3 === 0 ? true : false;
}

(function startApp() {
  while (true) {
    const inputTask = prompt(
      'For select:\nTask 1 - type "1";\nTask 2 - type "2";\nTask 3 - type "3";\nTask 4 - type "4";\nTask 5 - type "5";\nTask 6 - type "6";\n'
    );
    switch (inputTask) {
      case '1':
        starTask1();
        return null;
      case '2':
        starTask2();
        return null;
      case '3':
        starTask3();
        return null;
      case '4':
        starTask4();
        return null;
      case '5':
        starTask5();
        return null;
      case '6':
        starTask6();
        return null;
      default:
        alert('You made a bad choice');
        return null;
    }
  }
})();
