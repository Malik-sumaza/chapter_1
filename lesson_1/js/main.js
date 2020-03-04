// // // // // // // // // // // var firstName = 'MIIIIRBAAA';

// // // // // // // // // // // alert(firstName)

// // // // // // // // // // var str = 'Petr';
// // // // // // // // // // var num = 10;
// // // // // // // // // // var bool = true;
// // // // // // // // // // var und = undefined;
// // // // // // // // // // var emp = null;
// // // // // // // // // // var sm = Symbol();
// // // // // // // // // // var obj = {
// // // // // // // // // //   str: 'Petr'
// // // // // // // // // // //   num: 10
// // // // // // // // // // };
// // // // // // // // // // console.log(str)

// // // // // // // // // var firstPerson = 'Jack';
// // // // // // // // // var secondPerson = 'Jimmm';
// // // // // // // //      оператор не строгово сравнения
// // // // // // // // // console.log(firstPerson == secondPerson);

// // // // // // // // var firstName = 10;
// // // // // // // // var secondPerson = '10';
// // // // // // // //      оператор строгово сравнения
// // // // // // // // console.log(firstName === secondPerson);

// // // // // // // var firstNum = 10;
// // // // // // // var secondNum = 5;

// // // // // // // console.log(firstNum > secondNum);
// // // // // // console.log(firstNum !== secondNum);

// // // // // var age = 10;

// // // // // if (age >= 18) {
// // // // //     alert('true');
// // // // // } else if (age === 10){
// // // // // alert('your age 10')
// // // // // }
// // // // // else {
// // // // //     alert('false')
// // // // // }

// // // // var age = +prompt('Ваш возраст');

// // // // if (age >= 18){
// // // //     alert('Доступ разрешен');
// // // // }
// // // // else if (confirm('Родители разрешили?')){
// // // //     alert('Доступ разрешен')
// // // // } else{
// // // //     alert('Доступ запрещен')
// // // // }

// // // // console.log(age);

// // // var age = +prompt('Ваш возраст');
// // // var firstName = prompt('Ваше имя');

// // // if (age >= 18 && firstName === 'Yoda'){
// // //     alert('Здравствуй уважаемый Yoda');
// // // } else if (age >= 18){
// // //     alert('Здравствуйте');
// // // } else {
// // //     alert('Всего доброго');
// // // }

// var age = +prompt('Введите возраст');

// switch (age){
//     case 10: alert('Шрек')
//     break;
//     case 15: alert('Симпсоны')
//     break;
//     case 20: alert('Южный парк')
//     break;
//     default: alert('Иди работать');
// }

// var age = +prompt('Возраст');

// var isAccess = age >= 18 ? 'Доступ разрешен' : 'Доступ запрещен';

// console.log(isAccess);
