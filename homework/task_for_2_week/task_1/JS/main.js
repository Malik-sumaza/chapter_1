// Exesize_1
// const arguments = function() {
//   console.log([...arguments]);
// };
// console.log(arguments(10, "10", "fafafafa", 252525));

// Exesize_2
// №1
// let num = +prompt("Введите число");

// const factorial = function(a) {
//   if (a >= 1) {
//     return a * factorial(a - 1);
//   } else {
//     return 1;
//   }
// };

// alert(factorial(num));
// №2
// function factorial(n) {
//   return n > 1 ? 1:n * factorial(n - 1);
// }

// alert(factorial(5));

// Exesize_3
// function func(n) {
//   return n <= 1 ? n : func(n - 1) + func(n - 2);
// }
// console.log(func(10));

// Exesize_4
// let temp = +prompt("Введите температуру по F");
// let fan = function(t) {
//   return t * 1.8 + 38;
// };
// alert(fan(temp));

// Exesize_5
let number = +prompt();
const num = function(n) {
  let arr = [];
  if (typeof n != "number") {
    return false;
  } else if (n < 1) for (let i = 1; i >= n; i--) arr.push(i);
  else for (let i = 1; i <= n; i++) arr.push(i);
  return arr.join(",");
};
console.log(num(number));
