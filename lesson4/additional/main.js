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

// function SomeArray(array1, array2) {
//     let array3 = [];
//     for (let i = 0; i < array1.length; i++) {
//         array3.push(array1[i] + array2[i]);
//
//     }
//     console.log(array3);
//     return array3;
// }
//
// SomeArray([1, 2, 3, 4], [2, 3, 4, 5]);
// // console.log(SomeArray([1,2,3,4], [2,3,4,5] ));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function SomeArray(array1) {
//     let array3 = [];
//     for (let i = 0; i < array1.length; i++) {
//         const array1Element = array1[i];
//         for (let item in array1Element) {
//             array3.push(item);
//         }
//     }
//     console.log(array3);
//     return array3;
// }
//
// SomeArray([{name: 'Dima', age: 13}, {model: 'Camry'}]);

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

