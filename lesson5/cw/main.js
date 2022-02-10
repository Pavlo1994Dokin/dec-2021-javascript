//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let SomeNmb = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a)
//     } else if (b < c && b < a) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// SomeNmb(111, 221, 33);


//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let NmbArray = (nmb1, nmb2, nmb3) => {
//     if (nmb1 > nmb2 && nmb1 > nmb3) {
//         console.log(nmb1);
//     } else if (nmb2 > nmb3 && nmb2 > nmb1) {
//         console.log(nmb2)
//     } else {
//         console.log(nmb3);
//     }
// }
// NmbArray(321, 113, 222);


//- створити функцію яка повертає найбільше число з масиву

// let numbersArray = [11, 22, 33, 44, 55];
// let SomeNmb = (nmb) => {
//     max = nmb[0];
//     for (let nmbElement of nmb) {
//         if (nmbElement > max) {
//             max = nmbElement;
//         }
//     }
//     return max;
// }
// console.log(SomeNmb(numbersArray));


//- створити функцію яка повертає найменьше число з масиву

// let minNumbers = [211, 332, 43, 54, 65];
// let SomeNmb = (nmb) => {
//     min = nmb[0];
//     for (let nmbElement of nmb) {
//         if (nmbElement < min) {
//             min = nmbElement;
//         }
//     }
//     return min;
// }
// console.log(SomeNmb(minNumbers));
// document.write('Найменше число: ' + SomeNmb(minNumbers));


//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let someArray = [11, 22, 33, 44, 55];
//
// let SumArray = (array) => {
//     let sum = 0
//     for (let item of array) {
//         sum = item + sum;
//     }
//     return sum;
// }
// console.log(SumArray(someArray));
// document.write('Сума чисел = ' + SumArray(someArray));


//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let nmb = [12, 23, 34, 45, 56];
//
// let SumArray = (array) => {
//     let sum = 0
//     for (let item of array) {
//         sum = item + sum;
//     }
//     return sum / array.length;
// }
// console.log(SumArray(nmb));
// document.write('Середнє арифметичне: ' + SumArray(nmb));


//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let SomeArray = (...numb) => {
//     let min = numb[0];
//     let max = numb[0];
//     for (let item of numb) {
//         if (item < min) {
//             min = item;
//         }
//         if (item > max) {
//             max = item;
//         }
//     }
//     console.log(min);
//     return max;
// }
// console.log(SomeArray(1, 2, 3,54,321));

//- створити функцію яка заповнює масив рандомними числами

// let SomeArray = (random) => {
//     let someRandom = [];
//     for (let i = 0; i < random; i++) {
//         someRandom.push(Math.floor(Math.random() * 100));
//
//     }
//     return someRandom
// }
// console.log(SomeArray(22));


//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let SomeRandom = (limit, nmb) => {
//     let random = [];
//     for (let i = 0; i < nmb; i++) {
//         random.push(Math.floor(Math.random() * limit));
//     }
//     return random;
// }
// console.log(SomeRandom(100, 22));


//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let SomeArray = (array) => {
//     let newArray = []
//     for (let i = array.length - 1; i >= 0; i--) {
//         newArray.push(array[i])
//
//     }
//     return newArray;
// }
// console.log(SomeArray([11, 22, 33, 44, 55]));
