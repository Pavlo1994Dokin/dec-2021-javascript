//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, manufacturer, year, max_speed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.max_speed = max_speed;
    this.engine = engine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
    }



}

let car = new Car('BMW', 'Germany', 1999, 280, 3.5)
console.log(car);

