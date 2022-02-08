//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function nmbMin(numb1, numb2, numb3) {
//     if (numb1 < numb2 && numb1 < numb3) {
//         document.write(numb1);
//         console.log(numb1);
//     } else if (numb2 < numb3 && numb2 < numb1) {
//         document.write(numb2);
//         console.log(numb2);
//     } else {
//         document.write(numb3);
//         console.log(numb3);
//     }
// }
// nmbMin(200, 40, 213);


//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function nmbMax(nmb1, nmb2, nmb3) {
//     if (nmb1 > nmb2 && nmb1 > nmb3) {
//         document.write(nmb1);
//         console.log(nmb1);
//     } else if (nmb2 > nmb3 && nmb2 > nmb1){
//         document.write(nmb2);
//         console.log(nmb2);
//     }else {
//         document.write(nmb3);
//         console.log(nmb3);
//     }
// }
// nmbMax(200, 100, 50);


//- створити функцію яка повертає найбільше число з масиву

// let maxArray = [11, 22, 332, 44,];
//
// function someArray(array) {
//     let max = array[0];
//     for (let arrayElement of array) {
//         if (arrayElement > max) {
//             max = arrayElement;
//         }
//     }
//     return max;
// }
//
// document.write(someArray(maxArray))


//- створити функцію яка повертає найменьше число з масиву

// let someArray = [22, 32, 34, 54, 322, 432];
//
// function maxArray(array) {
//     let min = array[0];
//     for (let arrayElement of array) {
//         if (arrayElement < min) {
//             min = arrayElement
//         }
//     }
//     return min;
// }
//
// document.write(`<h2>Найменший елемент масиву : ${maxArray(someArray)} </h2>`);


//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let nmbArray = [1, 2, 3, 44, 32, 23, 11, 1234, 12];
//
// function sumArray(array) {
//     let sum = 0;
//     for (let arrayElement of array) {
//         sum = arrayElement + sum;
//     }
//     return sum;
// }
//
// document.write(sumArray(nmbArray));


//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let nmbArray = [1, 2, 3, 11, 22, 33, 44, 34, 23, 12];
//
// function serArray(array) {
//     let sum = 0;
//     for (let arrayElement of array) {
//         sum = arrayElement + sum
//     }
//     return sum / array.length;
// }
//
// document.write(serArray(nmbArray));


//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let nmb = [1, 2, 3, 4, 5, 44, 33, 22, 11,];
//
// function allArray(array) {
//     let min = array[0];
//     let max = array[0];
//     for (let arrayElement of array) {
//         if (arrayElement < min) {
//             min = arrayElement
//         }
//         if (arrayElement > max) {
//             max = arrayElement
//         }
//     }
//
//     console.log(max);
//     return min;
// }
//
// document.write(allArray(nmb));


// //- створити функцію яка заповнює масив рандомними числами

// function arrayRandom(array) {
//     let someRondom = [];
//     for (i = 0; i < array; i++) {
//         someRondom.push(Math.floor(Math.random() * 100));
//     }
//     return someRondom;
// }
//
// document.write(arrayRandom(22));



//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.





