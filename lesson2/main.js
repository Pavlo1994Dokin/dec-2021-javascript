// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = prompt('Time from 0 to 59');
// if (time >= 0 && time <= 14) {
//     console.log('first part');
// } else if (time >= 15 && time <= 29) {
//     console.log('second part');
// } else if (time >= 30 && time <= 44) {
//     console.log('third part');
// } else if (time >= 45 && time <= 59) {
//     console.log('fourth part');
// } else {
//     console.log('error');
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = prompt('what half of the day from 1 to 31');
// if (day >= 1 && day <= 10) {
//     console.log('The First Decade');
// } else if (day >= 11 && day <= 20) {
//     console.log('The Second Decade');
// } else if (day >= 21 && day <= 31) {
//     console.log('The Third Decade');
// } else {
//     console.log('Error');
// }


// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// exampl_1
//
// let test;
// if (confirm('Test')) {
//     test = 'Вірно';
// } else {
//     test = 'Неправильно';
// }
// console.log(test)

// example_2_тернарний
//
// let test = confirm('Test') ? 'Вірно' : 'Неправильно';
// console.log(test);




// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = +prompt('enter 1, 0, -3');
// if (a !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }




// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let week = prompt('enter day');
// switch (week) {
//     case 'monday' :
//         document.write('You go to work');
//         break;
//     case 'tuesday' :
//         document.write('You go to Okten');
//         break;
//     case 'wednesday' :
//         document.write('You have a lecture from Okten');
//         break;
//     case 'thursday' :
//         document.write('You have a practice on Okten school');
//         break;
//     case 'friday' :
//         document.write('You have last working day');
//         break;
//     case 'saturday ' :
//         document.write('You have English lesson');
//         break;
//     case 'sunday' :
//         document.write('You are weekend');
//         break;
//     default :
//         console.log('error');
// }




// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = prompt('How many days on this year?');
// if (year % 4 === 0) {
//     console.log('It is a Leap Year');
// } else {
//     console.log("It is not a Leap Year");
// }


// Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

//
// let js = prompt('What is official name JavaScript? ');
// if (js === 'ECMAScript') {
//     console.log('TRUE');
// } else {
//     console.log('You donnt now? ECMAScript!');
// }
