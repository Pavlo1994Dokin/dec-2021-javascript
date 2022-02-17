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
let user2 = new User(2, 'lesya', 'lolkin', 'qwe@gmail.com', '0931232323');
let user3 = new User(3, 'olga', 'pushkin', 'qwe@gmail.com', '0931232323');
let user4 = new User(4, 'petay', 'somitin', 'qwe@gmail.com', '0931232323');
let user5 = new User(5, 'byba', 'nenkin', 'qwe@gmail.com', '0931232323');
let user6 = new User(6, 'lol', 'glupkin', 'qwe@gmail.com', '0931232323');
let user7 = new User(7, 'asd', 'repin', 'qwe@gmail.com', '0931232323');
let user8 = new User(8, 'qwe', 'do[ka', 'qwe@gmail.com', '0931232323');
let user9 = new User(9, 'zxc', 'zaza', 'qwe@gmail.com', '0931232323');
let user0 = new User(10, 'rew', 'scvaza', 'qwe@gmail.com', '0931232323');
let someArrayUsers = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user0]
console.log(someArrayUsers);


//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

