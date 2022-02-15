//- Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let split = n1.split('..').join(' ');
// console.log(split);
//
// let n2 = 'Ron---Whisley'
// let newN2 = n2.split('---').join(' ');
// console.log(newN2);
//
// let n3 = 'Hermione__Granger';
// let newN3 = n3.split('__').join(' ');
// console.log(newN3);


//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let randomArray = (arr, nmb) => {
//     let newArr = [];
//     for (let i = 0; i < arr; i++) {
//         newArr.push(Math.floor(Math.random() * nmb));
//     }
//     return newArr
// }
// console.log(randomArray(10, 100));


//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let randomArray = (arr, nmb) => {
//     let newArray = [];
//     for (let i = 0; i < arr; i++) {
//         newArray.push(Math.floor(Math.random() * nmb));
//     }
//     return newArray.sort((a, b) => a - b);
// }
// console.log(randomArray(10, 100));


//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let randomArray = (length, nmb) => {
//     let newRandom = [];
//     for (let i = 0; i < length; i++) {
//         newRandom.push(Math.floor(Math.random() * nmb));
//     }
//     return newRandom.filter(value => value % 2 === 0)
// }
// console.log(randomArray(10, 100));


//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let someArray = (length, number) => {
//     let newArray = [];
//     for (let i = 0; i < length; i++) {
//         newArray.push(Math.floor(Math.random() * number))
//     }
//     return newArray.map(value => {
//         return value + ''
//     })
// }
// console.log(someArray(10, 100));


//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// let newSort = [113, 220, 331, 442, 55];
// let sortNums = (newSort, direction) => {
//     if (direction === 'max') return newSort.sort((a, b) => b - a);
//     if (direction === 'min') return newSort.sort((a, b) => a - b);
// }
// console.log(sortNums(newSort, 'max'));


//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// //  -- відсортувати його за спаданням за monthDuration
//
// coursesAndDurationArray.sort(function (a, b) {
//     return b.monthDuration - a.monthDuration;
// });
//
// console.log(coursesAndDurationArray);
//
// //  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let newFilter = coursesAndDurationArray.filter((item) => {
//     return item.monthDuration > 5;
// });
// console.log(newFilter);