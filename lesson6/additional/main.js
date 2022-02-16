//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let newString = (str, n) => {
//     let newArray = [];
//     for (let i = 0; i < str.length; i += n) {
//         newArray.push(str.substr(i, n))
//     }
//     return newArray;
// }
// console.log(newString('наслаждение', 3));


//- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com




//- є масивlet coursesArray = [
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));


//- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// let count = (str, stringsearch) => {
//
//     let some = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === stringsearch) {
//             some.push(str[i]);
//         }
//     }
//     return some.length;
// }
// let str = "Астрономия это наука о небесных объектах";
// let symb = "о";
// console.log(count(str, symb));


//- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let cutString = (str, n) => {
//     let some = [];
//     let strSplit = str.split(' ');
//     for (let i = 0; i < n; i++) {
//         some.push(strSplit[i]);
//     }
//     return some.join(' ');
// }
//
// let str = "Сила тяжести приложена к центру масс тела";
// console.log(cutString(str, 5));