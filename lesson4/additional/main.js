//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function SomeArray() {
//     if (arguments.length === 1) {
//         console.log(arguments[0]);
//     } else if (arguments.length === 2) {
//         return arguments[0] + arguments[1];
//     }
//
// }
//
// console.log(SomeArray(12, 21));


// створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// function someArr(arr1, arr2) {
//     let arr3 = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] + arr2[i]) {
//             arr3.push(arr1[i] + arr2[i])
//         }
//     }
//     return arr3
// }
// let a=[1,2,3,4]
// let b=[2,3,4,5]
// console.log(someArr(a, b));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function someArr(array) {
//     arr1 = [];
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         for (const key in arrayElement) {
//             arr1.push(key)
//         }
//     }
//     return arr1;
// }
//
// let strArr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// console.log(someArr(strArr));

//
// Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function SomeArray(array1) {
//     let array2 = [];
//     for (let i = 0; i < array1.length; i++) {
//         const item = array1[i];
//         for (let itemElement in item) {
//             array2.push(item[itemElement]);
//         }
//     }
//     console.log(array2)
//     return array2
// }
//
// SomeArray([{name: 'Dima', age: 13}, {model: 'Camry'}])

// function someArr(arr) {
//     arr1 = [];
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         for (const key in arrElement) {
//             arr1.push(arrElement[key]);
//         }
//     }
//     return arr1;
// }
//
// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// console.log(someArr(array));

