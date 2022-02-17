// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(1, 'vasya', 'pupkin', 'qwe@gmail.com', '0931232323');
let user2 = new User(21, 'lesya', 'lolkin', 'qwe@gmail.com', '0931232323');
let user3 = new User(33, 'olga', 'pushkin', 'qwe@gmail.com', '0931232323');
let user4 = new User(4, 'petay', 'somitin', 'qwe@gmail.com', '0931232323');
let user5 = new User(5, 'byba', 'nenkin', 'qwe@gmail.com', '0931232323');
let user6 = new User(67, 'lol', 'glupkin', 'qwe@gmail.com', '0931232323');
let user7 = new User(17, 'asd', 'repin', 'qwe@gmail.com', '0931232323');
let user8 = new User(8, 'qwe', 'do[ka', 'qwe@gmail.com', '0931232323');
let user9 = new User(9, 'zxc', 'zaza', 'qwe@gmail.com', '0931232323');
let user0 = new User(10, 'rew', 'scvaza', 'qwe@gmail.com', '0931232323');
let someArrayUsers = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user0]
console.log(someArrayUsers);


//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUser = someArrayUsers.filter(user => user.id % 2 === 0)
console.log(filterUser);


//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUsers = someArrayUsers.sort((a, b) => a.id - b.id)
console.log(sortUsers);


//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)


class Cliner {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}


// створити пустий масив, наповнити його 10 об'єктами Client


let someCliner = [
    new Cliner(211, 'kokos', 'kos', 'koks@globys', 12345292121, ['book', 'psp', 'pen']),
    new Cliner(222, 'pop', 'koko', 'kokos@gobys', 101324121, ['psp', 'pen']),
    new Cliner(13, 'ul', 'zebrov', 'koks@glbys', 1022922345, ['book', 'pensil', 'oluver', 'psp', 'pen']),
    new Cliner(71, 'paha', 'lavrinenko', 'oks@globys', 3454592121, ['book', 'psp', 'sega', 'pen']),
    new Cliner(26, 'vasya', 'valer', 'koks@globs', 1022876521, ['book']),
    new Cliner(43, 'petya', 'byk', 'lols@globys', 10226645121, ['book', 'bed', 'psp', 'pen']),
    new Cliner(23, 'olga', 'sader', 'kaka@globys', 102422121, ['book', 'pen']),
    new Cliner(22, 'katerina', 'lol', 'klos@globys', 5432292121, ['book', 'bed', 'window', 'psp', 'pen']),
    new Cliner(11, 'yulya', 'loo', 'koks@gmais', 5634232292121, ['book', 'psp', 'pen']),
    new Cliner(1, 'koks', 'kokos', 'kos@mys', 7895421, ['book', 'psp', 'pen'])
]
console.log(someCliner);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortSomeCliner = someCliner.sort((a, b) => a.order.length - b.order.length)
console.log(sortSomeCliner);

