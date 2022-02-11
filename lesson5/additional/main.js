//- Дано натуральное число n. Выведите все числа от 1 до n.

// let SomeNmb = (n) => {
//     let number = [];
//     for (let i = 1; i <= n; i++) {
//         number.push(i);
//     }
//     return number;
// }
// console.log(SomeNmb(6));


//- Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let AllNumb = (a, b) => {
//     if (a < b) {
//         for (let i = a; i < b; i++) {
//             console.log(i);
//         }
//     } else if (a > b) {
//         for (let i = a; i > b; i--) {
//             console.log(i)
//         }
//     }
// }
// AllNumb(22, 77);


//-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let foo = ([9, 8, 0, 4]);
// let SomeArray = (arr, i) => {
//     let a = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = a;
//     return arr;
// }
// console.log(SomeArray(foo, 2));

// let foo = [4, 5, 6, 7];
// let SomeArray = (array, i) => {
//     let ar = array[i];
//     array[i] = array[i + 1];
//     array[i + 1] = ar
//     return array
// }
// console.log(SomeArray(foo, 0));

// let foo = [6, 7, 6, 5, 4];
// let SomeArray = (array, i) => {
//     let a = array[i];
//     array[i] = array[i + 1];
//     array[i + 1] = a;
//     return array;
// }
// console.log(SomeArray(foo, 3));

//- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let foo = [1, 0, 6, 0, 3];
// let SomeArray = (array) => {
//     let a = [];
//     let b = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             a.push(array[i]);
//         } else if (array[i] !== 0) {
//            b.push(array[i]);
//         }
//     }
//
//     let c = b.concat(a)
//     return c
// }
// console.log(SomeArray(foo));



