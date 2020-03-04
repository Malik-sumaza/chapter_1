// //     // Hosting

// // // var firstName;

// // // firstName = 'Jack';

// // // console.log(firstName);

// // // отличия var & let не хостится
// // // console.log(firstName); //undefined
// // // var firstName = 'Jack';

// // console.log(firstName);
// // let firstName = 'Jack';

// //объявление 2х let невозможно
// // var firstName = 'Jack';
// // var firstName = 'John';
// // console.log(firstName);

// // let firstName = 'Jack';
// // let firstName = 'John';
// // console.log(firstName)

// // var записывается в глобальный объект window
// // var firstName = 'Jack';
// // console.log(window.firstName);

// // let не записывается в глобальный объект window   // undefined
// // let firstName = 'Jack';
// // console.log(window.firstName)

// // переменная объявленна через const унаследовала все принципы
// //  которые свойственны переменной let, но с небольшим отличиями

// // переназначение let возможно 
// let firstName = 'Jack';
// console.log(firstName)
// firstName = 'John';
// console.log(firstName);

// переназначение const не возможно

// const firstName = 'Jack';
// firstName = 'John';
// console.log(firstName);

    // Объекты

// const person = {
//     name: 'Jack',
//     age: 20,
//     childs: ['John', 'Luci']
// }
// // нестандартные значения ключей
// const notStandardFields = {
//     'Kebab-case': 'i can use it :D',
//     '0': 10
// }

// Доступ к свойствам объекта
// console.log(person.name);
// console.log(notStandardFields["Kebab-case"]);

// переназначение свойст даже если это константа
// person.name = 'Petya';
// console.log(person);

// добавления свойства извне
// person.weight = '80kg';
// console.log(person);

// Массивы
// const arrNums = [1,2,3,4,5];
// console.log(arrNums);

// длина массива
// console.log(arrNums.lenght);

// доступ к первому элементу массива
// console.log(arrNums[0]);

// доступ к последнему элементу массиву
// console.log(arrNums[arrNums.legth - 1]);

// переназначение элементу массива
// arrNums[2] = 10;
// console.log(arrNums)

// оператор инкремент
// let num = 0;
// num++
// num++
// console.log(num++);
// console.log(num)

// циклы

// цикл for

// for(let i = 0; i <= 100; i ++){
//     console.log('итерация №' + i)
// }
// циклы в массивах

const arrNums = [1,2,3,4,5];

// for(let i = 0; i < arrNums.length; i++){
//     // console.log(arrNums[i]);
//     console.log(arrNums[i] * 2);
// }

//поиск элемента в массиве циклом и условием 
// let value = null;

// for(let i = 0; i < arrNums.length; i++){
    // if(arrNums[i] === 4 ) value = arrNums[i];
// }
// console.log(value);

// вытаскиваем все элементы больше 3х в отдельный массив
// const arrNums2 = [];

// for(let i = 0; i < arrNums.length; i++) {
//     if(arrNums[i] > 3) arrNums2.push(arrNums[i]);
// }
// console.log(arrNums2)

// цикл while

// let i = 0;

// while(i < 10){
//     console.log('итерация №' + i++)
// }

// Цикл do while

// let i = 0;

// do{
//     console.log('Итерация №' + i++);
// }while(false);

// метода массива stage 1

const someFamily = [
 {
     name: 'March',
     position: 'Mother',
     age: 36
 },
 {
    name: 'Petrovych',
    position: 'Father',
    age: 65
},
{
    name: 'Valera',
    position: 'FATHER',
    age: 13
},
{
    name: 'Andryha',
    position: 'Son..',
    age: 8
},
{
    name: 'Kotik',
    position: 'Daughter',
    age: 2
}
];
//метод push/pop
const newChild = {
    name: 'Alewa',
    position: 'Son2',
    age: 5 
}

// someFamily.push(newChild);
// someFamily.pop();
// console.log(someFamily);

// методы shift / unshift
// someFamily.shift();
// console.log(someFamily);

//  метод splice
// someFamily.slice(1, 1); // удаление
// console.log(someFamily)

// someFamily.slice(2, 0, newChild); //добавление
// console.log(someFamily);

// самостоятельно узнать про собрата splice метод slice

// жизнь без метода forEach
// const simpsonsFamily = [];

// for(let i = 0; i < someFamily.length; i++){
//     someFamily[i].lastName = 'Simpson';
//     simpsonsFamily.push(someFamily[i]);

// }
// console.log(simpsonsFamily);

// жизнь с методом forEach
// someFamily.forEach(function(item){
//     item.lastName = 'Simpson';
//     simpsonsFamily.push(item);
// })
// console.log(simpsonsFamily);

// жизнь с методом map
// const simpsonsFamily = someFamily.map(function(item){
    // item.lastName = 'Simpson';
    // return item;
// });

// console.log(someFamily);