//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let newString = (str, n) => {
    let newArray = [];
    for (let i = 0; i < str.length; i += n) {
        newArray.push(str.substr(i, n))
    }
    return newArray;
}
console.log(newString('наслаждение', 3));