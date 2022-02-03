// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let first = +prompt('Enter first umber');
// let second = +prompt('Enter second umber');
// if (first > second) {
//     console.log(first);
// } else if (second > first) {
//     console.log(second);
// } else {
//     console.log('numbers are equal');
// }


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let entrance = prompt('what apartment?');
// if (entrance >= 1 && entrance <= 20) {
//     console.log('Entrance 1');
// } else if (entrance >= 21 && entrance <= 48) {
//     console.log('Entrance 2');
// } else if (entrance >= 49 && entrance <= 90) {
//     console.log('Entrance 3');
// } else {
//     console.log('it is not your Entrance!');
// }


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = +prompt('what number?');
// if (number === 10) {
//     console.log('TRUE');
// } else if (number !== 10) {
//     console.log('FALSE');
// }


// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 4.
// якщо в змінну записали щось інше, спрацьовує else

// let x = prompt('set value');
// if (x === 'number') {
//     console.log(1);
// } else if (x === 'string') {
//     console.log(2);
// }


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let t = prompt('Are we going to Okten?');
// if (t >= 10 && t <= 22) {
//     document.write('We go learn to Okten');
// }else {
//     document.write('We stay at home');
// }


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне

// let lottery = +prompt('enter number from 1 to 5');
// switch (lottery) {
//     case 1 :
//         console.log('you won the auto');
//         break;
//     case 2 :
//         console.log('you won the moto');
//         break;
//     case 3 :
//         console.log('you won the telephone');
//         break;
//     case 4 :
//         console.log('you won the bike');
//         break;
//     case 5 :
//         console.log('you won the apartment');
//         break;
//     default :
//         console.log('you lose');
// }
