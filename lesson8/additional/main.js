//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
//


let arr = []
for (const arrayElement of array) {
    let aa = arrayElement.split(' ')
    for (const aaElement of aa) {
        arr.push(aaElement)
    }
}